import React, { useState } from 'react';
import ShowProfile from '../components/MyProfile/ShowProfile';
import EditProfile from '../components/MyProfile/EditProfile';

const MyProfile = () => {
  const initialProfile = {
    id: 'user123',
    nickname: '사용자',
    description: '안녕하세요. 반갑습니다.',
  };

  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveDescription = (editedDescription) => {
    setProfile({
      ...profile,
      description: editedDescription,
    });
    setEditMode(false);
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
