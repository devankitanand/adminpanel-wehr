import React, { useState } from 'react';

const EditName = ({ onSubmit }) => {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        onSubmit({ name });
    };

    return (
        <div className="flex flex-col space-y-4">
            <input 
                type="text"
                className="border border-gray-300 p-2"
                placeholder="Edit Name"
                value={name}
                onChange={handleNameChange}
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

export default EditName;
