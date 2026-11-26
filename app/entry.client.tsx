import { configureClientRouterBasename } from "@agent-native/core/client/api-path";
import { installRouteChunkRecovery } from "@agent-native/core/client/route-chunk-recovery";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

if (typeof window !== "undefined" && !window.location.hostname.includes("github.io")) {
  installRouteChunkRecovery();
}

configureClientRouterBasename();

hydrateRoot(document, <HydratedRouter />);
