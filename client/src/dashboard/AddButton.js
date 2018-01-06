//@flow
import React from 'react';

import './AddButton.css';

type Props = { 
    isAddingResult: boolean,
    addResult: Function,
    css: string 
};

const AddButton = (props: Props) => {
    const css = `btn btn-primary add-button ${props.css} ${props.isAddingResult ? 'disabled' : ''}`

    return (
        <button
        type='button'
        className={css}
        onClick={props.addResult}>
            Add
        </button>
    );
};

export default AddButton;
