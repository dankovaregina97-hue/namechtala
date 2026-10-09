// Копирует собранную админку Sveltia CMS в public/cms, чтобы она отдавалась с вашего домена
// (без запросов к сторонним CDN).
import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("public/cms", { recursive: true });
copyFileSync("node_modules/@sveltia/cms/dist/sveltia-cms.js", "public/cms/sveltia-cms.js");
