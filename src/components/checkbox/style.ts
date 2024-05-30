import styled from 'styled-components';
import { colors } from '../../assets/colors';

interface Props{
  checked: boolean;
}

export const CustomInput = styled.div<Props>`
  box-sizing: border-box;
  padding: 3px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  border: 2px solid ${props => props.checked ? colors.accentColor : colors.inputBorderColor};
  border-radius: 4px;
  .checked{
    background-color: ${colors.accentColor};
    height: 100%;
    width: 100%;
    border-radius: 1px;
  }
  .unChecked{
    background-color: transparent;
    height: 100%;
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 24px;
  align-items: center;
  justify-content: flex-start;
`

export const Label = styled.p`
  color: ${colors.mainText};
  margin-left: 15px;
  font-size: 16px;
  user-select: none;
`