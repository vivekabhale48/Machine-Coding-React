import { useEffect, useState } from "react"
import { useDebounce } from "./hook/useDebounce";

export const ReactSearchComponentWithDebounce = () => {

    const [value, setValue] = useState('');
    const [debounceText, setDebounceText] = useState('');
    console.log(value);
    
    const debounceCallback = useDebounce((value) => {
        setDebounceText(value);
    }, 1000)

    function handleOnChange(e) {
        setValue(e.target.value);
        debounceCallback(e.target.value);
    }

    return (
        <div>
            <input value={value} onChange={handleOnChange} className="p-2 border border-[#ccc] rounded-lg" type="text" />
            {debounceText}
        </div>
    )
}