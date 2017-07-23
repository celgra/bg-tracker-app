import React from 'react';

const BgResultForm = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                Add BG Reading
            </div>
            <div className="card-block">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Blood Glucose Level</label>
                            <input type="number" 
                            className="form-control"
                            placeholder="Enter BG reading..." />
                        </div>
                    </div>
                </div>
                <button onClick={props.closeForm} 
                className="btn btn-danger">
                Close
                </button>
            </div>
        </div>
    );
};

export default BgResultForm;