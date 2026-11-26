import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

console.log("🚀 Building portfolio for GitHub Pages (https://maghima2302.github.io/portfolio/)...");

process.env.BUILD_TARGET = "gh-pages"; // guard:allow-env-credential — static export target
process.env.GITHUB_PAGES = "true"; // guard:allow-env-credential — static export target

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

// 1. Create .nojekyll so GitHub Pages does not ignore files starting with underscores
fs.writeFileSync(noJekyll, "");
console.log("✅ Created .nojekyll in build/client");

// 2. Ensure root index.html uses the full pre-rendered HTML if portfolio/index.html was produced
if (fs.existsSync(portfolioIndex)) {
  fs.copyFileSync(portfolioIndex, rootIndex);
  fs.copyFileSync(portfolioIndex, notFoundHtml);
  console.log("✅ Synced prerendered HTML from portfolio/index.html to root index.html and 404.html");
} else if (fs.existsSync(rootIndex)) {
  fs.copyFileSync(rootIndex, notFoundHtml);
  console.log("✅ Synced root index.html to 404.html");
}

// 3. Helper to recursively walk a directory
function getAllFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

// 4. Rewrite absolute paths from root / to /portfolio/ across all HTML, JS, and JSON files
const files = getAllFiles(clientDir);
let rewrittenCount = 0;

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".html" || ext === ".js" || ext === ".json") {
    let content = fs.readFileSync(file, "utf8");
    let changed = false;

    // Rewrite asset paths to include /portfolio/
    if (content.includes("/assets/")) {
      content = content.replace(/(["'])\/assets\//g, "$1/portfolio/assets/");
      content = content.replace(/(href|src)=["']\/assets\//g, '$1="/portfolio/assets/');
      changed = true;
    }

    // Rewrite favicon, icon, and manifest paths
    const assetReplacements: [string, string][] = [
      ['"/favicon.svg"', '"/portfolio/favicon.svg"'],
      ["'/favicon.svg'", "'/portfolio/favicon.svg'"],
      ['href="/favicon.svg"', 'href="/portfolio/favicon.svg"'],
      ['"/icon-180.svg"', '"/portfolio/icon-180.svg"'],
      ["'/icon-180.svg'", "'/portfolio/icon-180.svg'"],
      ['href="/icon-180.svg"', 'href="/portfolio/icon-180.svg"'],
      ['"/manifest.json"', '"/portfolio/manifest.json"'],
      ["'/manifest.json'", "'/portfolio/manifest.json'"],
      ['href="/manifest.json"', 'href="/portfolio/manifest.json"'],
    ];

    for (const [from, to] of assetReplacements) {
      if (content.includes(from)) {
        content = content.split(from).join(to);
        changed = true;
      }
    }

    // In HTML files, strip out chunk-recovery bootstrap and auth-session bootstrap
    if (ext === ".html") {
      // Remove or neutralize chunk recovery script to prevent redirect loops on GitHub Pages
      if (content.includes("data-agent-native-chunk-recovery-bootstrap")) {
        content = content.replace(
          /<script data-agent-native-chunk-recovery-bootstrap>[\s\S]*?<\/script>/g,
          "<!-- chunk recovery bootstrap disabled for static hosting -->"
        );
        changed = true;
      }

      // Remove session bootstrap since static site has no server session endpoint
      if (content.includes("data-agent-native-session-bootstrap")) {
        content = content.replace(
          /<script data-agent-native-session-bootstrap="1">[\s\S]*?<\/script>/g,
          "<!-- session bootstrap disabled for static hosting -->"
        );
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(file, content, "utf8");
      rewrittenCount++;
    }
  }
}

console.log(`✅ Rewrote paths in ${rewrittenCount} files for GitHub Pages base /portfolio/`);

// 5. Also copy assets directory into portfolio/ so if any request routes via /portfolio/portfolio/assets, it also succeeds
const clientAssets = path.join(clientDir, "assets");
const portfolioAssets = path.join(portfolioDir, "assets");
if (fs.existsSync(clientAssets)) {
  fs.cpSync(clientAssets, portfolioAssets, { recursive: true });
  console.log("✅ Mirrored assets into portfolio/assets as fallback");
}

console.log("🎉 GitHub Pages build completed successfully in build/client!");
