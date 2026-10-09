// Страница админки (Sveltia CMS). Сам редактор лежит в public/cms/sveltia-cms.js,
// настройки полей — в public/cms/config.yml.
export const dynamic = "force-static";

const html = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Управление сайтом — namechtala</title>
    <link href="/cms/config.yml" type="text/yaml" rel="cms-config-url" />
  </head>
  <body>
    <script src="/cms/sveltia-cms.js"></script>
  </body>
</html>
`;

export function GET() {
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" }
  });
}
