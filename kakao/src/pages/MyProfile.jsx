import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../api';
import ShowProfile from '../components/MyProfile/ShowProfile';
import EditProfile from '../components/MyProfile/EditProfile';

const MyProfile = () => {

  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // 로컬 스토리지에서 access token을 가져옵니다.
        const accessToken = localStorage.getItem('access_token');

        // access token이 없으면 아무것도 하지 않습니다.
        if (!accessToken) {
          return;
        }

        // GET 요청을 통해 프로필 데이터를 가져옵니다.
        const response = await axiosInstance.get('/users/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // 받아온 데이터를 상태에 설정합니다.
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveDescription = (editedDescription) => {
    // 서버로 수정된 description을 전송할 수도 있습니다.
    setProfile({
      ...profile,
      description: editedDescription,
    });
    setEditMode(false);
  }
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
