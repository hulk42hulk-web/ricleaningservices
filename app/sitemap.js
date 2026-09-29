import { siteUrl } from "@/lib/seo";

export default function sitemap() {
  const routes = ["", "/diensten", "/over-ons", "/contact", "/privacy"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
