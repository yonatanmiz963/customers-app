import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserAuthToken } from '../../services/authService';

const ProtectedRoute = ({ component: Component }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const token = getUserAuthToken();
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