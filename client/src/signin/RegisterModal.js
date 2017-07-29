import React from 'react';

const RegisterModal = (props) => {
    return (
        <div>
            <div className="modal-dialog modal-primary">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Register New Account</h4>
                        <button type="button" 
                        className="close"
                        onClick={() => props.closeModal()}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the modal.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                        onClick={() => props.closeModal()} 
                        className="btn btn-default">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;