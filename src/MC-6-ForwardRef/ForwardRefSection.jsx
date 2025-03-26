import { useRef } from "react"
import { RefChild } from "./RefChild"

export const ForwardRefSection = () => {

  const ref = useRef();
  function handleClick(){
    ref.current.focus();
  }
   return (
    <div>
      <RefChild ref={ref} />
      <button onClick={handleClick} className="mt-2 p-1 bg-[#eee] border rounded">Focus</button>
    </div>
  )
}