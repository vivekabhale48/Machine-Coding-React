import { useRef } from "react"

export const useDebounce = (cb, delay) => {

    let timeRef = useRef();

    return function(...args) {

        if(timeRef.current) clearTimeout(timeRef.current);

        timeRef.current = setTimeout(() => {
            cb(...args);
        }, delay)
    }

}