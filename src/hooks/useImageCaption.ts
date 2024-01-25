import { useEffect } from "react";

const useImageCaption = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".markdown img");
    images.forEach((image) => {
      const alt = image.getAttribute("alt");
      const caption =
        image.parentElement?.nextElementSibling ||
        image.parentElement?.parentElement?.nextElementSibling;
      if (caption?.innerHTML === alt) {
        caption.classList.add("caption");
      }
    });
  }, []);
};

export default useImageCaption;
