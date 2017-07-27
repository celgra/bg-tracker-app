import React from 'react';

import './AddButton.css';

const AddButton = (props) => {
    if(props.isAddingResult){
        return null;
    } else {
        return (
            <button
            type="button"
            className="btn btn-primary add-button"
            onClick={props.addResult}>
                Add
            </button>
        );
    }
};

export default AddButton;
