import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 12px 0;
  margin: 5px 0;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  min-width: 50px;
  border-radius: 8px;
  background-color: ${colors.subColor};
`;

export const InfoContainers = styled.div`
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
  padding: 0%;
  justify-content: space-between;
`;

export const TitleCard = styled.div`
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: normal;
  font-size: 18px;
  font-weight: 500;
  color: ${colors.mainText};
  @media (max-width: 500px) {
    max-width: 80%;
    width: 80%;
  }
`;

export const AddressCard = styled.p`
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: normal;
  font-size: 16px;
  color: ${colors.subTextColor};
  @media (max-width: 500px) {
    max-width: 80%;
    width: 80%;
  }
`;

export const ActionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 900px) {
    width: 40%;
  }
`;

export const IdentifyContainer = styled.div`
  display: flex;
  width: 50%;
  @media (max-width: 900px) {
    width: 60%;
  }
`;
