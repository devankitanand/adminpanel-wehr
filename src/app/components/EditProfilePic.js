import React, { useState } from 'react';

const EditProfilePic = ({ onSubmit }) => {
    const [profilePic, setProfilePic] = useState(null);

    const handleProfilePicChange = (e) => {
        setProfilePic(e.target.files[0]);
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('profilePic', profilePic);
        onSubmit(formData);
    };

    return (
        <div className="flex flex-col space-y-4">
            <input 
                type="file" 
                className="border border-gray-300 p-2" 
                accept="image/*" 
                onChange={handleProfilePicChange} 
            />
            <button 
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default EditProfilePic;
