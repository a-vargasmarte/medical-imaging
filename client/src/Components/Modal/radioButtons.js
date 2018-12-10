import React from 'react';

const RadioButton = ({ value, radioId, onChange }) => {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id={radioId} value={value} onChange={onChange} />
            <label className="form-check-label" htmlFor={radioId}>{value}</label>
        </div>
    );
}

export default RadioButton;