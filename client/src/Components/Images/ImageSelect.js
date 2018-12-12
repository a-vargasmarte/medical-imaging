import React from 'react';
import Select from 'react-select';

const ImageSelect = ({ value, onChange, options, isSearchable, isClearable, placeholder }) => {
    return (
        <div className="row">
            <div className="col-md-4">

                <Select
                    value={value}
                    onChange={onChange}
                    options={options}
                    isSearchable={isSearchable}
                    isClearable={isClearable}
                    placeholder={placeholder} />

            </div>
        </div>
    );
}

export default ImageSelect;