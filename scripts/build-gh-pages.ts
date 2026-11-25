import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

console.log("🚀 Building portfolio for GitHub Pages (https://maghima2302.github.io/portfolio/)...");

process.env.BUILD_TARGET = "gh-pages";
process.env.GITHUB_PAGES = "true";

try {
  execSync("npx react-router build", {
    stdio: "inherit",
    env: {
      ...process.env,
      BUILD_TARGET: "gh-pages",
      GITHUB_PAGES: "true",
    },
  });
} catch (error) {
  console.error("❌ Build failed:", error);
  process.exit(1);
}

const clientDir = path.resolve(process.cwd(), "build/client");
const portfolioDir = path.join(clientDir, "portfolio");
const rootIndex = path.join(clientDir, "index.html");
const portfolioIndex = path.join(portfolioDir, "index.html");
const notFoundHtml = path.join(clientDir, "404.html");
const noJekyll = path.join(clientDir, ".nojekyll");

// 1. Create .nojekyll so GitHub Pages does not ignore files starting with underscores (e.g. _index-*.js)
fs.writeFileSync(noJekyll, "");
console.log("✅ Created .nojekyll in build/client");

// 2. Ensure root index.html exists. If prerender put it in build/client/portfolio/index.html, make sure both exist
if (fs.existsSync(portfolioIndex)) {
  fs.copyFileSync(portfolioIndex, notFoundHtml);
  if (!fs.existsSync(rootIndex)) {
    fs.copyFileSync(portfolioIndex, rootIndex);
  }
} else if (fs.existsSync(rootIndex)) {
  fs.copyFileSync(rootIndex, notFoundHtml);
}

console.log("✅ Created 404.html for SPA routing fallback");
console.log("🎉 GitHub Pages build completed successfully in build/client!");
