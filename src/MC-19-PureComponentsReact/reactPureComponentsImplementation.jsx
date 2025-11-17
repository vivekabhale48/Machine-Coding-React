import { useState } from "react";
import PureComponent from './pureComponent';
export default function ReactPureComponentsImplementation() {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Hi from Parent!')

    return(
        <div>
            
            {/* If we dont passs any props in side such components then we dont need to make this components as a pure component. */}
            <PureComponent title={title}/> 
            {count}
            <div>
                <button style={{padding: '5px', backgroundColor: '#ccc', marginBottom: '10px'}} onClick={() => setCount((prev) => prev+1)}>Increment</button>
            </div>
            <div>
                <button style={{padding: '5px', backgroundColor: '#ccc'}} onClick={() => setTitle('Updated Title!')}>Updated Title</button>
            </div>
        </div>
    )
}