export const Modal = ({openModal, closeModal, children}) => {

    if(!openModal) return null;

    return(
        <div
            style={{
                position: 'fixed',
                inset: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.5)',
                zIndex: '1000'
            }}
            onClick={closeModal}
        >
            <div
            onClick={(e) => e.stopPropagation()}
            style={{
                width: '450px',
                backgroundColor: 'white',
                padding: '20px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                margin: '20px',
                borderRadius: '10px'
            }}>
                {children}
            </div>
        </div>
    )
}