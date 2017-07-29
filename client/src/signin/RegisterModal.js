import React from 'react';

const RegisterModal = (props) => {
    return (
        <div>
            <div id="myModal" className="modal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
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
        </div>
    );
}

export default RegisterModal;