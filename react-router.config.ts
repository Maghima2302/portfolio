import type { Config } from "@react-router/dev/config";

const isGhPages =
  process.env.BUILD_TARGET === "gh-pages" ||
  process.env.GITHUB_PAGES === "true";

export default {
  appDirectory: "app",
  ssr: !isGhPages,
  basename: isGhPages ? "/portfolio/" : "/",
  splitRouteModules: false,
  routeDiscovery: { mode: "initial" },
  async prerender() {
    return ["/"];
  },
} satisfies Config;

