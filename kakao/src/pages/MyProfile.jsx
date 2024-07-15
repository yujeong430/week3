import React, { useState } from 'react';
import ShowProfile from '../components/MyProfile/ShowProfile';
import EditProfile from '../components/MyProfile/EditProfile';
import CreateProfile from '../components/MyProfile/CreateProfile';

const MyProfile = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleCreateProfile = (id, nickname, description) => {
    const newProfile = { id, nickname, description };
    setProfile(newProfile);
  };

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
        <CreateProfile onCreate={handleCreateProfile} />
      )}
    </div>
  );
};

export default MyProfile;
