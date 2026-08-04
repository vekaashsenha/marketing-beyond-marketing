import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
let page = await readFile(path.join(root, "index.html"), "utf8");
const css = await readFile(path.join(root, "styles.css"), "utf8");

const imageMatches = [...page.matchAll(/src="(assets\/[^"]+)"/g)];
for (const match of imageMatches) {
  const assetPath = match[1];
  const image = await readFile(path.join(root, assetPath));
  const extension = path.extname(assetPath).slice(1);
  const mime = extension === "svg" ? "image/svg+xml" : `image/${extension}`;
  const embedded = `data:${mime};base64,${image.toString("base64")}`;
  page = page.replaceAll(`src="${assetPath}"`, `src="${embedded}"`);
}

page = page.replace('<link rel="stylesheet" href="styles.css" />', `<style>${css}</style>`);
await writeFile(path.join(root, "MBM-website-preview.html"), page);
