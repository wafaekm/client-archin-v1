const REPO = "client-archin-v1";

// gh = GitHub Pages, cf = Cloudflare (ou vide)
const DEPLOY_TARGET = process.env.NEXT_PUBLIC_DEPLOY_TARGET;

const BASE_PATH =
  process.env.NODE_ENV === "production" && DEPLOY_TARGET === "gh"
    ? `/${REPO}`
    : "";

export default BASE_PATH;
