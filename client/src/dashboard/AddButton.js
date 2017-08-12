//@flow
import React from 'react';

import './AddButton.css';

type Props = { 
    isAddingResult: boolean,
    addResult: Function 
};

const AddButton = (props: Props) => {
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
