export const Modal = ({isOpen, onClose, children}) => {

    if(!isOpen) return null;

    return(
        <div
        style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000,
        }}
        onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '90%',
                    maxWidth: '480px',
                    backgroundColor: 'white',
                    padding: '20px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.25)'
                }}

            >
                {children}
            </div>
        </div>
    )
}