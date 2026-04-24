import React, { useState, useRef, useEffect } from 'react'
import './Modal.css'

function Modal() {
    const [modalOpen, setModalOpen] = useState(false)
    const closeBtnRef = useRef(null)

    const open = () => setModalOpen(true)
    const close = () => setModalOpen(false)

    return (
        <>
            <button className="modal-open-btn" onClick={open}>Open Modal</button>
            {modalOpen && (
                <div className="modal-overlay" onClick={close}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <header className="modal-header">
                            <h2 className="modal-title">Hello World</h2>
                            <button ref={closeBtnRef} className="modal-close" onClick={close} aria-label="Close modal">×</button>
                        </header>
                        <div className="modal-body">
                            <p>This is an improved modal with CSS styling.</p>
                        </div>
                        <footer className="modal-footer">
                            <button className="modal-action" onClick={close}>Close</button>
                        </footer>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
// Change for 2026-04-24
