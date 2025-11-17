export default function Child({sendData}) {

    return(
        <button onClick={() => sendData('Send message from child to parent')}>Send Data</button>
    )
}