import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../api';
import ShowProfile from '../components/MyProfile/ShowOtherProfile';


const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
        console.error('No refresh token available');
        return null;
    } 

    try {
        const response = await axiosInstance.post('/auth/refresh', {
            refresh: refreshToken,
        });
        console.log('토큰 재발급');
        const newAccessToken = response.data.access;
        localStorage.setItem('access_token', newAccessToken);
        return newAccessToken;
    } catch (error) {
        console.error(error);
        return null;
    }
};

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const newAccessToken = await refreshToken();
            if (newAccessToken) {
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            }
        }

        return Promise.reject(error);
    }
);

const Profile = () => {
    
    const [otherProfiles, setOtherProfiles] = useState([]);

    const fetchOtherProfiles = async () => {
        try {
            const accessToken = localStorage.getItem('access_token');

            const response = await axiosInstance.get('/users', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setOtherProfiles(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchOtherProfiles();
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px' }}>다른 사람의 프로필</div>
            {otherProfiles ? (
                otherProfiles.map((profile) => (
                    <ShowProfile
                        key={profile.id}
                        id={profile.id}
                        nickname={profile.nickname}
                        description={profile.description}
                    />
                ))
            ) : (
                <p>프로필이 없습니다.</p>
            )}
        </div>
    );
}

export default Profile;