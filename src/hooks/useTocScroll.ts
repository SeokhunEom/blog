import { useEffect, useRef } from "react";

const OFFSET = 60;

const useTocScroll = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const handleClick = (e: MouseEvent) => {
      const clickedElement = e.currentTarget as HTMLElement;
      if (clickedElement.tagName !== "A") return;

      const href = clickedElement.getAttribute("href");
      if (!href || !href.startsWith("#") || href.startsWith("#fn-")) return;
      const adjustedHref = href.startsWith("#fnref-")
        ? href.replace("ref", "")
        : href;
      const targetAnchor = Array.from(
        contentElement.querySelectorAll("a")
      ).find(
        (anchor) => anchor.getAttribute("href") === adjustedHref
      ) as HTMLAnchorElement;

      if (targetAnchor) {
        e.preventDefault();
        const targetPosition =
          targetAnchor.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: targetPosition - OFFSET, behavior: "smooth" });
      }
    };

    const anchors = contentElement.querySelectorAll("a");
    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return contentRef;
};

export default useTocScroll;
