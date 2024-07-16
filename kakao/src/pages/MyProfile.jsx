import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../api';
import ShowProfile from '../components/MyProfile/ShowProfile';
import EditProfile from '../components/MyProfile/EditProfile';

const MyProfile = () => {

  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // 프로필 데이터 받아오기
    const fetchProfile = async () => {
      try {
        // 로컬 스토리지에서 access token을 가져옴
        const accessToken = localStorage.getItem('access_token');

        // access token이 없을 경우
        if (!accessToken) {
          return;
        }

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
