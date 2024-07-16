import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../api';
import ShowProfile from '../components/MyProfile/ShowProfile';
import EditProfile from '../components/MyProfile/EditProfile';
import { ProfilesBtn } from '../components/MyProfile/ProfilesBtn';

// 토큰 재발급
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
    console.log('토큰 재발급')
    const newAccessToken = response.data.access;
    localStorage.setItem('access_token', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Axios 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401 응답일 때
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshToken(); // 토큰 재발급 시도
      if (newAccessToken) {
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest); // 재발급된 토큰으로 원래 요청 재시도
      }
    }

    return Promise.reject(error); // 에러 반환
  }
);

const MyProfile = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const fetchProfile = async () => {
    try {
      // 로컬 스토리지에서 access token을 가져옴
      const accessToken = localStorage.getItem('access_token');

      // 프로필 데이터를 get
      const response = await axiosInstance.get('/users/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // response 데이터를 상태에 설정
      setProfile(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  // 프로필 수정하기
  const handleSaveDescription = async (editedDescription) => {
    try {
      // 로컬 스토리지에서 access token을 가져옴
      const accessToken = localStorage.getItem('access_token');

      // access token이 없을 경우
      if (!accessToken) {
        return;
      }

      // 프로필 description을 patch
      const response = await axiosInstance.patch('/users', {
        description: editedDescription,
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // response 데이터를 상태에 설정
      setProfile(response.data);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ProfilesBtn />
      {profile ? (
        editMode ? (
          <EditProfile
            id={profile.id}
            nickname={profile.nickname}
            description={profile.description}
            onSave={handleSaveDescription}
            onCancel={() => setEditMode(false)}
          />
        ) : (
          <ShowProfile
            id={profile.id}
            nickname={profile.nickname}
            description={profile.description}
            onEdit={handleEdit}
          />
        )
      ) : (
        <div>프로필이 없습니다.</div>
      )}
    </div>
  );
};

export default MyProfile;
