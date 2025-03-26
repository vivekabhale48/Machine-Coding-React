import { useRef } from "react";

export const CommonDebounce = (cb, delay) => {

  let timerRef = useRef();

  return function(...args) {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  }
}