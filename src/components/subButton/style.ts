import styled from 'styled-components';
import { colors } from '../../assets/colors';

interface MainContainerProps {
  height?: number | string;
  width?: number | string;
  backgroundColor?: string;
  color?: string;
}

export const MainContainer = styled.div<MainContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) =>
    props.height ? props.height : '34px'};
  border-radius: 12px;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : colors.subColor};
  width: ${(props) =>
    props.width ? props.width : '95px'};
  cursor: pointer;
  &:hover {
    background-color: ${colors.subColorFade};
  }
  p {
    color: ${(props) =>
      props.color
        ? props.color
        : colors.mainText};
    font-weight: 500;
  }
`;
