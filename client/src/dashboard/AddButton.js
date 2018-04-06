import React from 'react';

import './AddButton.css';

const AddButton = (props) => {
    const css = `btn btn-primary add-button ${props.css} ${props.isAddingResult ? 'disabled' : ''}`;

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
