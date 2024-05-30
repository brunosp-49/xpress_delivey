import { colors } from './../../assets/colors/index';
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: ${colors.mainColor};
  min-height: 100vh;
`;

export const SubContainer = styled.form`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-grow: 1;
  min-height: calc(100vh - 176px - 68px - 20px);
  padding: 2.5% 0 0 0;
  @media only screen and (min-width: 500px) and (max-width: 600px) {
    padding: 2.5% 10% 0 10%;
  }
  @media (max-width: 500px) {
    padding: 2.5% 6% 0 6%;
    margin-bottom: 100px;
    min-height: calc(100vh - 176px);
  }
`;

export const HeaderContainer = styled.div`
  grid-column: 1/3;
  width: 100%;
  padding-bottom: 30px;
  margin: 0;
  @media (max-width: 500px) {
    grid-column: 1;
  }
  p {
    color: ${colors.mainText};
    font-size: 1.8em;
    font-weight: 700;
  }
`;

export const GridFlex = styled.div`
  display: grid;
  row-gap: 25px;
  column-gap: 22px;
  grid-template-columns: 1fr 1fr;
  .complete-row {
    grid-column: 1/3;
  }
  @media (max-width: 500px) {
    width: 100%;
    grid-template-columns: 1fr;
    .complete-row {
      grid-column: 1; // Adjusted to span only one column
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 180px;
    width: 100%;
  }
`;
