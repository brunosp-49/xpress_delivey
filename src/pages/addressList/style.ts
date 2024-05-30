import { colors } from './../../assets/colors/index';
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: ${colors.mainColor};
  min-height: 100vh;
`;

export const SubContainer = styled.div`
  flex-grow: 1;
  min-height: calc(100vh - 176px - 68px - 20px);
  padding: 2.5% 18% 0 13%;
  @media only screen and (min-width: 500px) and (max-width: 600px) {
    padding: 2.5% 10% 0 10%;
  }
  @media (max-width: 500px) {
    padding: 2.5% 6% 0 6%;
    min-height: calc(100vh - 176px - 68px);
  }
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 12px;
  margin-top: 10px;
  background-color: ${colors.subColor};
  width: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${colors.subColorFade};
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  p {
    color: ${colors.mainText};
    font-weight: 500;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding-bottom: 30px;
  margin: 0;
  p {
    color: ${colors.mainText};
    font-size: 2.2em;
    font-weight: 700;
  }
`;
