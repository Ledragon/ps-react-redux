import * as React from 'react';

const SelectInput = ({ name, label, onChange, placeholder, value, error }: { name: string, label: string, onChange: any, placeholder: string, value: string, error: any }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
            </label>
            <div className="field">
                <select name={name}
                    className="form-control"
                    onChange={onChange}
                    value={value} />
            </div>
        </div>
    )
}
export default SelectInput;