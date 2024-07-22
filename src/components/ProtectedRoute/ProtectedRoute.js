import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../utills/authUtill';

const ProtectedRoute = ({ component: Component }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const token = getAuthToken();
            if (!token) {
                navigate('/');
            }
            setToken(token);
        };

        checkAuth();
    }, []);

    return (
        <>
            {
                token ?
                    <Component token={token} /> :
                    null
            }

        </>
    );
};

export default ProtectedRoute;