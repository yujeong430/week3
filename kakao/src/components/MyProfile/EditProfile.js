import React, { useState } from 'react';
import { MainContainer, ProfileContainer, Title, ShowText, FormContainer, InputLong,Button } from './MyProfileStyle';

const EditProfile = ({ id, nickname, description, onSave, onCancel }) => {
  const [editedDescription, setEditedDescription] = useState(description);

  const handleChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    onSave(editedDescription);
  };

  return (
    <MainContainer>
        <ProfileContainer>
          <Title>프로필 수정</Title>
          <div>
            <ShowText><strong>ID</strong> : {id}</ShowText>
            <ShowText><strong>닉네임</strong> : {nickname}</ShowText>
            <FormContainer onSubmit={handleSubmit}>
              <div>
                  <ShowText><strong>소개</strong></ShowText>
                  <InputLong
                    value={editedDescription}
                    onChange={handleChange}
                    required
                  />
              </div>
              <div>
                <Button type="submit">저장</Button>
                <Button type="button" onClick={onCancel}>취소</Button>
              </div>
            </FormContainer>
          </div>
        </ProfileContainer>
    </MainContainer>
  );
};

export default EditProfile;
