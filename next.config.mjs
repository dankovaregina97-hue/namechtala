/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    // нужна, чтобы страница «Акции» одинаково отрисовывалась на сервере и в браузере до проверки реальной даты
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString().slice(0, 10)
  }
};

export default nextConfig;
