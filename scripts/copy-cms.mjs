// Копирует собранную админку Sveltia CMS в public/admin, чтобы она отдавалась с вашего домена
// (без запросов к сторонним CDN).
import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("public/admin", { recursive: true });
copyFileSync("node_modules/@sveltia/cms/dist/sveltia-cms.js", "public/admin/sveltia-cms.js");
