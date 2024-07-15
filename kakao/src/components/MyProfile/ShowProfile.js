import React from 'react';
import { MainContainer, ProfileContainer, Title, Button, ShowText} from './MyProfileStyle';

const ShowProfile = ({ id, nickname, description, onEdit }) => {
  return (
    <MainContainer>
      <ProfileContainer>
        <Title>프로필 정보</Title>
        <div>
        <ShowText><strong>ID</strong> : {id}</ShowText>
        <ShowText><strong>닉네임</strong> : {nickname}</ShowText>
        <ShowText><strong>소개</strong> <br/> {description}</ShowText>
        </div>
        <Button onClick={onEdit}>수정하기</Button>
      </ProfileContainer>
    </MainContainer>
  );
};

export default ShowProfile;
