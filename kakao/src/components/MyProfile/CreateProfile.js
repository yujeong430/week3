import React, { useState } from 'react';
import { MainContainer, Title, ProfileContainer, FormContainer, Input, InputLong, Button } from './MyProfileStyle';

const CreateProfile = ({ onCreate }) => {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    onCreate(id, nickname, description);
  };

  return (
    <MainContainer>
      <ProfileContainer>
        <Title>프로필 생성</Title>
        <FormContainer onSubmit={handleSubmit}>
          <div>
            <div>ID</div>
            <Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div>
          <div>닉네임</div>
            <Input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
          <div>
          <div>소개</div>
            <InputLong
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <Button type="submit">생성하기</Button>
        </FormContainer>
        </ProfileContainer>
    </MainContainer>
  );
};

export default CreateProfile;
