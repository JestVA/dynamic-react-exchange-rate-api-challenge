import React from 'react'

const UserInputCurrency = ({ defaultCurrency, onChange, options, size }) => {
    const displayOptions = () => {
        return options.map(option => <option value={option}>{option}</option>)
    }

    return (
        <div>
            <p>Please select a base currency to be quoted against:</p>
            <select 
                defaultValue={[defaultCurrency]}
                size={size}
                multiple
                onChange={e => onChange(e.target.value)}
            >
                {displayOptions()}
            </select>
        </div>
    )
}

export default UserInputCurrency