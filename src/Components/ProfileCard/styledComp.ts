import styled from 'styled-components';

export const ProfileCardBox = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/profile-bg.png');
  background-size: cover;
  width: 20%;
  height: 20%;
  padding: 10px;
  * {
    margin-bottom: 10px;
  }
  img {
    height: 40px;
  }
  h3 {
    font-weight: bold;
  }
  p {
    font-weight: bold;
  }
`;
