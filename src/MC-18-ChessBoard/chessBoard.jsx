export default function ChessBoard({dimension}) {
    return(
        <div>{Array.from({length: dimension}).map((_, row) => {
            return (
                <div style={{display: 'flex'}}>
                    {
                        Array.from({length: dimension}).map((_, col) => {
                            return(
                                <div style={{border: '1px solid black', width: '50px', height: '50px', backgroundColor: `${(row+col) % 2 === 0 ? 'black' : 'white'}`}}></div>
                            )
                        })
                    }
                </div>
            )
        })}</div>
    )
}