import React, { useState } from 'react';

const CreateDonor = () => {
    const [donor, setDonor] = useState({
        fullname: '',
        bloodType: '',
        town: '',
        city: '',
        phoneNo: '',
        photo: null
    });

    const handleChange = e => {
        setDonor({ ...donor, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(donor); // Replace this with API call
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="fullname" onChange={handleChange} placeholder="Full name" required />
            <input type="text" name="bloodType" onChange={handleChange} placeholder="Blood type" required />
            <input type="text" name="town" onChange={handleChange} placeholder="Town" required />
            <input type="text" name="city" onChange={handleChange} placeholder="City" required />
            <input type="tel" name="phoneNo" onChange={handleChange} placeholder="Phone number" required />
            <input type="file" name="photo" onChange={handleChange} required />
            <button type="submit">Create Donor</button>
        </form>
    );
}

export default CreateDonor;