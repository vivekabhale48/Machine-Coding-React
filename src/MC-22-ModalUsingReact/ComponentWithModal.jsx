import { useState } from "react"
import { Modal } from "./Modal";

export default function ComponentWithModal() {

    const [openModal, setOpenModal] = useState(false);

    return(
        <div>
            <h1 className="text-xl">Simple Modal</h1>
            <button onClick={() => setOpenModal(true)} style={{padding: '10px', backgroundColor: '#ccc'}} >Open Modal</button>

            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}> 
                <h1>This Is Modal</h1>
                <p>This is some simple content inside the modal.</p>
            </Modal>        
            
            </div>
    )
}