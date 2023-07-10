import { useRef } from "react";
import { useIntersectionObserver } from "../../../pages/io/hooks";

export const useImageObserve = () => {
  const ref = useRef();
  const {} = useIntersectionObserver();

  return {
    ref
  }
};