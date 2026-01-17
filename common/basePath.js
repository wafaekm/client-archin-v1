const REPO = "client-archin-v1";

// GitHub Pages sert le site sous /<repo>
const BASE_PATH = process.env.NODE_ENV === "production" ? `/${REPO}` : "";

export default BASE_PATH;
