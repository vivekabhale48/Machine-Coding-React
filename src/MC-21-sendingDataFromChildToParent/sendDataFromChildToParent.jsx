import { useState } from "react"
import Child from "./Child";

export default function ParentComponent() {

    const [data, setData] = useState('welcome!');
    function getDataFromParent(data) {
        setData(data);
    }
    return (
        <div>
            <div>{data}</div>
            <Child sendData={getDataFromParent} />
        </div>
    )
}