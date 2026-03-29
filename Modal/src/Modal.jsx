import React, { useState } from 'react'

function Modal() {
    // March 28 update
    // March 29 update
    const [modalopen, setModalopen] = useState(false);

    const open = () => {
        setModalopen(true);
    }

    const close = () => {
        setModalopen(false);
    }

    return (
        <>
            <button onClick={open}>Open</button>
            {modalopen && (
                <div className="overlay" onClick={close}>
                    <div className="container" onClick={(e) => e.stopPropagation()}>
                        <h1>Hello World</h1>
                        <p>This is a modal component.</p>
                        <button onClick={close}>Close</button>
                    </div>
                </div>
            )}
             
        </>
    )
}

export default Modal
