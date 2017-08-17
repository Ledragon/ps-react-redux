import * as React from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, error }: { name: string, label: string, onChange: any, placeholder: string, value: string, error: any }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
            </label>
            <div className="field">
                <input type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value} />
            </div>
        </div>
    )
}
export default TextInput;