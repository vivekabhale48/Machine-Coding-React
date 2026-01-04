export const Modal = ({children, onClose}) => {

    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: "0",
        bottom: '0',
        right: '0',
        left: '0',
        background: 'rgba(0,0,0,0.8)',
        padding: '20px'
    }}
        onClick={() => onClose(false)}
    >

        <div style={{
            backgroundColor: 'white',
            zIndex: '9999',
            
        }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl md:mx-auto bg-white rounded-2xl  shadow-lg p-6 relative"
        >
            
            <button className="absolute right-3 top-3 flex justify-center items-center w-6 h-6 shadow" style={{padding: 3, background: '#ccc'}} onClick={() => onClose(false)}>X</button>
            {
                children
            }
        </div>

    </div>
}