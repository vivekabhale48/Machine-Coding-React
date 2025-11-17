import { useReducer } from "react"

export const UseReducerHook = () => {

    function reducer(state, action) {
        switch(action.type) {
            case 'increment':
                return state + 5;

            case 'decrement':
                return state -1;

            case 'reset':
                return 0;
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            {state}

            <div onClick={() => dispatch({type: 'increment'})} style={{padding: '5px', backgroundColor: '#ccc', marginTop: '10px'}}>
                increment
            </div>
            <div onClick={() => dispatch({type: 'decrement'})} style={{padding: '5px', backgroundColor: '#ccc',marginTop: '10px'}}>
                decrement
            </div>
            <div onClick={() => dispatch({type: 'reset'})} style={{padding: '5px', backgroundColor: '#ccc', marginTop: '10px'}}>
                reset
            </div>
        </div>
    )
}