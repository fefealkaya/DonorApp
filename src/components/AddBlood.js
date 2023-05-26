import React, { useState } from 'react';

const AddBlood = () => {
    const [blood, setBlood] = useState({
        quantity: 0,
    });

    const handleChange = e => {
        setBlood({ ...blood, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(blood); // Replace this with API call
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="quantity" onChange={handleChange} placeholder="Blood quantity" required />
            <button type="submit">Add Blood</button>
        </form>
    );
}

export default AddBlood;
