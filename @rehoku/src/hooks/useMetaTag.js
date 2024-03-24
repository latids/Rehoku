import { useEffect } from "react";

function useMetaTag(title = "", description = "", keywords = "") {
  useEffect(() => {
    document.title = title || "";
    const descriptionMetaTag = document.querySelector(
      'meta[name="description"]'
    );
    if (descriptionMetaTag) {
      descriptionMetaTag.content = description || "";
    }
    const keywordsMetaTag = document.querySelector('meta[name="keywords"]');
    if (keywordsMetaTag) {
      keywordsMetaTag.content = keywords || "";
    }

    return () => {};
  }, [title, description, keywords]);
}

export default useMetaTag;
