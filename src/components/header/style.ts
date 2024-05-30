import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const MainContainer = styled.div`
  height: 68px;
  display: flex;
  padding: 0 2%;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.subColor};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 7.3%;
  min-width: fit-content;
  height: 100%;
  justify-content: flex-start;
  @media (max-width: 500px) {
    width: fit-content;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-weight: 500;
    font-size: 1.5em;
    color: ${colors.mainText};
    @media (max-width: 500px) {
      display: none;
    }
  }

  img {
    height: 42px;
    margin-right: 5px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22%;
  min-width: fit-content;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border-radius: 15px;
  width: 80px;
  cursor: pointer;
  p {
    color: ${colors.mainText};
    font-weight: 500;
  }
`;

export const MenuMobileContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    display: flex;
  }
  img{
    height: 25%;
    margin-right: 12px;
  }
`;
