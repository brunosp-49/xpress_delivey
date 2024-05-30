import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const CustomInput = styled.input`
  box-sizing: border-box;
  border: 2px solid ${colors.inputBorderColor};
  height: 56px;
  width: 100%;
  max-width: 100%;
  padding: 0 20px;
  border-radius: 12px;
  font-size: 16px;
  color: ${colors.inputTextColor};
  font-family: "Space Grotesk", sans-serif;
  background-color: ${colors.inputBackgroundColor};
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
