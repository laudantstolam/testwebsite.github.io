import React from 'react';
import './App.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-content">
                {props.children}
                <button onClick={() => props.setTrigger(false)}><img src='./image/button_onoff1.png' width={60} alt='popoff' id='popoff' /></button>

            </div>
        </div>
    ) : "";
}

export default Popup;
