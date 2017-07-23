import React from 'react';

const AddButton = (props) => {
    if(props.isAddingResult){
        return (
            <button className="btn btn-primary"
            disabled>
                Add
            </button>
        );
    } else {
        return (
            <button className="btn btn-primary"
            onClick={props.addResult}>
                Add
            </button>
        );
    }
};

export default AddButton;