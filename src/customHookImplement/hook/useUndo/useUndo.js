import { useEffect, useRef } from "react"

export const useUndo = (state) => {

  const ref = useRef();

  useEffect(() => {
    ref.current = state;
  })

  return ref.current;
}