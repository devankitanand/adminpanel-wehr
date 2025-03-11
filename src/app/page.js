'use client';
// app/page.js
import React, { useEffect, useState } from 'react';
import EditName from './components/EditName';
import EditProfilePic from './components/EditProfilePic';
// import PushNotification from './components/PushNotification';
import { updateProfile, getProfile } from './lib/api';

const Home = () => {
    const [profile, setProfile] = useState(null);
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registration successful with scope: ', registration.scope);
                })
                .catch(error => {
                    console.log('Service Worker registration failed: ', error);
                });
        }

        getProfile().then(data => setProfile(data));
    }, []);

    const handleUpdateProfile = (data) => {
        updateProfile(data).then(updatedProfile => setProfile(updatedProfile));
    };

    return (
        <div className='flex justify-center'>
            <div className='w-1/2'>
                <h1>Wehr Admin panel</h1>
                {profile && (
                    <div>
                        <p>Name: {profile.name}</p>
                        <p>Profile Pic:</p>
                        {profile.profilePic && (
                            <img 
                                src={`${API_BASE_URL}/uploads/${profile.profilePic}`} 
                                alt="Profile Pic" 
                                width={100} 
                                height={100} 
                            />
                        )}
                    </div>
                )}
                <EditName onSubmit={handleUpdateProfile} />
                <EditProfilePic onSubmit={handleUpdateProfile} />
                
            </div>
        </div>
    );
};

export default Home;
