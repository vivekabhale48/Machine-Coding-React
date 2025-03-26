import { useEffect, useState } from "react"
import { CommonDebounce } from "./CommonDebounce";

export const DebounceSection = () => {

  const [text, setText] = useState('');
  const [debounceText, setDebounceText] = useState('');
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     if(timer) clearTimeout(timer);

  //     console.log(text);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, [text])
  const callDebounce = CommonDebounce((value) => {
    console.log(value);
    setDebounceText(value);
  }, 1000);

  function handleOnChange(e) {
    setText(e.target.value);
    callDebounce(e.target.value);
  }
  return (
    <div>
      <input value={text} onChange={handleOnChange} className="border" type="text" />
      {debounceText}
    </div>
  )
}