import styled from 'styled-components';
import { colors } from '../../assets/colors';

interface Props {
  mode: 'neutral' | 'delete' | undefined;
  fullWidth?: boolean;
  customWidth?: string;
}

export const MainContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.mode === 'neutral'
      ? colors.subColor
      : props.mode === 'delete'
      ? '#c94345'
      : colors.accentColor};
  width: ${(props) =>
    props.fullWidth
      ? '32%'
      : props.customWidth
      ? props.customWidth
      : '100px'};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.mode === 'neutral'
        ? colors.subColorFade
        : props.mode === 'delete'
        ? '#e14c4f'
        : colors.accentColorFade};
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  p {
    color: ${colors.mainText};
    font-weight: 500;
  }
`;
