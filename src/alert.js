import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import './App.css';

function AlertMessage() {
    const [showAlert, setShowAlert] = useState(true);

    const handleAlertClose = () => setShowAlert(false);

    return (
        <>
            {showAlert && (
                <Alert variant="info" onClose={handleAlertClose} dismissible id='alertpage'>
                    Welcome this is a test alert<br />
                    <Button variant="outline-info" size="sm" onClick={handleAlertClose} className="ml-2">
                        <img src="./image/buttin_off.png" width={40} alt='alertoff' />
                    </Button>
                </Alert>
            )}
        </>
    );
}

export default AlertMessage;
