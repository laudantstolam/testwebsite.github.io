import React from 'react';
import './App.css';

function Popup(props) {
    return (
        <div className="popup">
            <div className="popup-content">
                <h2>hewwo</h2>
                <p>how luch have u collect</p>
                <button onClick={props.onClose}><img src='./image/button_onoff1.png' width={40} alt='popoff' id='popoff' /></button>
            </div>
        </div>
    );
}

export default Popup;
