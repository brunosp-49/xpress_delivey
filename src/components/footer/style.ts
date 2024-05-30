import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 5%;
  align-items: center;
  height: 146px;
  @media (max-width: 500px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 146px;
    flex-direction: column;
  }
  p {
    cursor: pointer;
    color: ${colors.subTextColor};
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 500px){
    justify-self: center;
  }
  }
`;
