import { useLayoutEffect, useRef, useState } from "react"
import { UseLayoutExample2 } from "./UseLayoutExample2";

export const UseLayoutHookSection = () => {

  const [width, setWidth] = useState(0);
  const ref = useRef();

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth)
    console.log(ref.current.offsetWidth);
    console.log(ref.current.dataset.value);
  }, [])

  return (
    <div>
      {width}
      <div data-value="xyz" ref={ref} style={{backgroundColor: "black", width: "100px", height: "100px"}}>

      </div>

      <UseLayoutExample2 />
    </div>
  )

}