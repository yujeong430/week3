import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Btn = styled.div`
    font-size: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export function ProfilesBtn() {
    const navigate = useNavigate();
    return(
        <Btn onClick={() => navigate('/profiles')}>👥 프로필 둘러보기 👥</Btn>
    )
}