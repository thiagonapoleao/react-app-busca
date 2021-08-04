import React from "react";
import ReactDom from "react-dom";
import './Modal.css';

const portalRoot = document.getElementById('portal-root');

const UIModal = ({ Children, isOpen, onClickClose }) => {
    if (!isOpen) {
        return null;
    }

    return ReactDom.createPortal(
        <div className="ui-modal__overlay">
            <div className="ui-modal">
                <button type="button" className="ui-modal__close-button" onClick={onClickClose}>X</button>                
                {Children}
            </div>
        </div>,
        portalRoot,
    );
};

export default UIModal;