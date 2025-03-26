import { useState } from "react";
import { useUndo } from "./useUndo";

export const UndoSection = () => {

  const [text, setText] = useState('');

  const prevState = useUndo(text);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} className="border p-1" type="text" />
      <button onClick={() => setText(prevState)} className="border p-1 ml-2">Undo</button>
    </div>
  ) 
}