import * as React from 'react';

interface Option {
    value: string;
    text: string;
}

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }: { name: string, label: string, onChange: any, defaultOption: string, value: string, error: any, options: Option[] }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
            </label>
            <div className="field">
                <select name={name}
                    className="form-control"
                    onChange={onChange}
                    value={value} >
                    <option value=''>{defaultOption}</option>
                    {
                        options.map(option => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })
                    }
                </select>
            </div>
        </div>
    )
}
export default SelectInput;