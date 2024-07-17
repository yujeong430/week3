import React from 'react';
import { MainContainer, ProfileContainer, Title, ShowText} from './MyProfileStyle';

const ShowProfile = ({ id, nickname, description}) => {
  return (
    <MainContainer>
      <ProfileContainer>
        <Title>프로필 {id}</Title>
        <div>
        <ShowText><strong>ID</strong> : {id}</ShowText>
        <ShowText><strong>닉네임</strong> : {nickname}</ShowText>
        <ShowText><strong>소개</strong></ShowText>
        <ShowText>{description}</ShowText>
        </div>
      </ProfileContainer>
    </MainContainer>
  );
};

export default ShowProfile;
