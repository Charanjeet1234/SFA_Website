import { useEffect } from "react";

const defaultTitle = "SFA Globex FZCO | Ferro Alloys Supplier in Dubai, UAE";
const defaultDescription =
  "SFA Globex FZCO supplies ferro manganese, silico manganese, ferro chrome, ferro silicon, manganese ore, and ferro molybdenum to industrial buyers across the UAE and global markets.";

export function useSeoMeta({
  title = defaultTitle,
  description = defaultDescription,
  keywords,
  canonical,
  ogTitle = title,
  ogDescription = description,
  ogImage = "https://sfaglobex.ae/Sfa_Logo.png",
  ogType = "website",
  ogLocale = "en_AE",
} = {}) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = title;

    const setNamedMeta = (name, content) => {
      let element = document.head.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const setPropertyMeta = (property, content) => {
      let element = document.head.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setNamedMeta("description", description);
    if (keywords) setNamedMeta("keywords", keywords);
    setPropertyMeta("og:title", ogTitle);
    setPropertyMeta("og:description", ogDescription);
    setPropertyMeta("og:type", ogType);
    setPropertyMeta("og:image", ogImage);
    setPropertyMeta("og:locale", ogLocale);
    setPropertyMeta("og:site_name", "SFA Globex FZCO");

    const canonicalLink =
      document.head.querySelector('link[rel="canonical"]') ||
      document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", canonical || "https://sfaglobex.ae/");
    if (!canonicalLink.parentNode) {
      document.head.appendChild(canonicalLink);
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, ogLocale]);
}
