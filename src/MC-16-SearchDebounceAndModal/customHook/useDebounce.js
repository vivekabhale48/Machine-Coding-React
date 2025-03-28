import { useRef } from "react"

export const useDebounce = (cb, delay) => {

    let ref = useRef();
    return function(...args) {
        if(ref.current) clearTimeout(ref.current);
        ref.current = setTimeout(() => {
            cb(...args);
        }, delay)
    } 
}