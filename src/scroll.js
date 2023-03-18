import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './App.css';

function ScrollableModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <img src="./image/savepoint.png" width={80} id="collect" alt='collector' />
            </Button>

            <Modal show={show} onHide={handleClose} scrollable id='scroll'>
                <Modal.Header closeButton>
                    <Modal.Title>lez see how many Shu u've got</Modal.Title>
                </Modal.Header>
                <Modal.Body id='scrollcontent'>
                    {/* <div style={{ height: '200px', overflowY: 'auto' }}>
                        {[...Array(50)].map((_, i) => (
                            <p key={i}>Scrollable Content {i}</p>
                        ))}
                    </div> */}
                    <img src='./image/lock.png' width={60} alt='lockicon' />
                    <img src='./image/lock.png' width={60} alt='lockicon' />
                    <img src='./image/lock.png' width={60} alt='lockicon' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <img src='./image/buttin_off.png' width={70} alt='popoff' id='popoff' />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ScrollableModal;
