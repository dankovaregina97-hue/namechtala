import { timingSafeEqual } from "node:crypto";

// Вход в админку по паролю (без GitHub-аккаунта).
// Редактор (Sveltia CMS) открывает это окно, мы проверяем пароль и отдаём ему токен доступа к репозиторию.
// Нужны две переменные в Vercel (Settings → Environment Variables):
//   ADMIN_PASSWORD — пароль для входа в админку;
//   CMS_GITHUB_TOKEN — токен GitHub с правом Contents: Read and write на этот репозиторий.
export const dynamic = "force-dynamic";

const headers = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "no-store",
  "x-robots-tag": "noindex"
};

const style = `
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fff;color:#111;font:16px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif}
  main{width:min(360px,88vw)}
  h1{margin:0 0 6px;font:300 30px/1.1 Georgia,serif;letter-spacing:-.01em}
  p{margin:0 0 22px;color:#6f6f6f;font-size:14px}
  input{width:100%;padding:14px 16px;border:1px solid #cfcfcf;border-radius:0;font:inherit;outline:none}
  input:focus{border-color:#111}
  button{width:100%;margin-top:12px;padding:15px;border:1px solid #111;background:#111;color:#fff;font:500 12px/1 system-ui,sans-serif;letter-spacing:.2em;text-transform:uppercase;cursor:pointer}
  .err{margin:12px 0 0;color:#a3261a;font-size:14px}
`;

function page(body: string, status = 200) {
  return new Response(
    `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Вход в админку — namechtala</title><style>${style}</style></head><body><main>${body}</main></body></html>`,
    { status, headers }
  );
}

function form(error?: string) {
  return page(
    `<h1>Вход в админку</h1><p>Введите пароль, чтобы управлять сайтом.</p>
     <form method="post" action="">
       <input type="password" name="password" placeholder="Пароль" autocomplete="current-password" autofocus required>
       <button type="submit">Войти</button>
       ${error ? `<div class="err">${error}</div>` : ""}
     </form>`
  );
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export async function GET() {
  if (!process.env.ADMIN_PASSWORD || !process.env.CMS_GITHUB_TOKEN) {
    return page(
      `<h1>Вход не настроен</h1><p>В Vercel не заданы переменные ADMIN_PASSWORD и CMS_GITHUB_TOKEN. Либо войдите в админку через токен GitHub.</p>`,
      503
    );
  }
  return form();
}

export async function POST(request: Request) {
  const password = process.env.ADMIN_PASSWORD;
  const token = process.env.CMS_GITHUB_TOKEN;
  if (!password || !token) return GET();

  // принимаем форму только с нашего же сайта
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return page("<h1>Запрос отклонён</h1>", 403);

  const data = await request.formData();
  const given = String(data.get("password") ?? "");

  if (!safeEqual(given, password)) {
    await new Promise((resolve) => setTimeout(resolve, 1200)); // замедляем подбор
    return form("Неверный пароль");
  }

  // передаём токен окну админки (тот же обмен, что у стандартного входа через GitHub)
  const payload = JSON.stringify({ token, provider: "github" }).replace(/</g, "\\u003c");
  return page(
    `<h1>Готово</h1><p>Входим…</p>
     <script>
       (function () {
         var message = "authorization:github:success:" + ${JSON.stringify(payload)};
         function receive(event) {
           window.opener.postMessage(message, event.origin);
           window.removeEventListener("message", receive, false);
           setTimeout(function () { window.close(); }, 300);
         }
         window.addEventListener("message", receive, false);
         window.opener.postMessage("authorizing:github", "*");
       })();
     </script>`
  );
}
