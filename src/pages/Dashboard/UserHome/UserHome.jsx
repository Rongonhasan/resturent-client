import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user} =useAuth();
    return (
        <div>
            <h1 className='text-3xl mb-4'>Welcome Back ,{user.displayName}</h1>
            <h1 className='text-2xl mb-4 text-red-500'>Order Food And Enjoy Our Service</h1>


        </div>
    );
};

export default UserHome;