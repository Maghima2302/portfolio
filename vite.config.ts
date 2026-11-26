import { agentNative } from "@agent-native/core/vite";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

const reactRouterPlugins = reactRouter as unknown as () => any[];
const agentNativePlugins = agentNative as unknown as (
  options?: Parameters<typeof agentNative>[0],
) => any[];

const isGhPages =
  process.env.BUILD_TARGET === "gh-pages" || // guard:allow-env-credential — static export target
  process.env.GITHUB_PAGES === "true"; // guard:allow-env-credential — static export target

export default defineConfig({
  base: isGhPages ? "/portfolio/" : "/",
  optimizeDeps: {
    include: ["@tabler/icons-react", "framer-motion"],
    entries: [
      "app/entry.client.tsx",
      "app/root.tsx",
      "app/routes/_index.tsx",
    ],
  },
  plugins: [
    ...reactRouterPlugins(),
    ...agentNativePlugins({
      ssrStubs: ["shiki"],
    }),
  ],
});

