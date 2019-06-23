import React from 'react'
const UserInputDate = ({ onChange, date }) => {
    return (
        <div>
            <p>Please select a date:</p>
            <input 
                type="date"
                defaultValue={date}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}
export default UserInputDate