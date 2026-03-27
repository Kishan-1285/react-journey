import React, { useState } from 'react'

function Modal() {
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
                        <h1>hello</h1>
                        <button onClick={close}>Close</button>
                    </div>
                </div>
            )}
             
        </>
    )
}

export default Modal
