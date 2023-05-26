import React, { useState } from 'react';

const RequestBlood = () => {
    const [request, setRequest] = useState({
        hospital: '',
        city: '',
        town: '',
        bloodType: '',
        units: 0
    });

    const handleChange = e => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(request); // Replace this with API call
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="hospital" onChange={handleChange} placeholder="Hospital" required />
            <input type="text" name="city" onChange={handleChange} placeholder="City" required />
            <input type="text" name="town" onChange={handleChange} placeholder="Town" required />
            <input type="text" name="bloodType" onChange={handleChange} placeholder="Blood type" required />
            <input type="number" name="units" onChange={handleChange} placeholder="Units" required />
            <button type="submit">Request Blood</button>
        </form>
    );
}

export default RequestBlood;
