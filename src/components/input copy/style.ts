import styled from 'styled-components';
import { colors } from '../../assets/colors';
import icon from '../../assets/images/selectIcon.svg';

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownButton = styled.button`
  width: 100%;
  height: 56px;
  border: 2px solid ${colors.inputBorderColor};
  border-radius: 12px;
  font-size: 16px;
  color: ${colors.inputTextColor};
  font-family: 'Space Grotesk', sans-serif;
  background-color: ${colors.inputBackgroundColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  outline: none;
  background-image: url(${icon});
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  &::after {
    margin-left: 10px;
    border-style: solid;
    border-width: 8px 6px 8px 0;
    border-color: transparent
      ${colors.inputBorderColor} transparent
      transparent;
  }
`;

interface Props {
  isOpen: boolean;
}

export const DropdownMenu = styled.ul<Props>`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: -15px;
  position: absolute;
  width: 98.5%;
  border: 2px solid ${colors.inputBorderColor};
  border-top: none;
  color: ${colors.inputTextColor};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${colors.inputBackgroundColor};
  z-index: 1;
  display: ${(props) =>
    props.isOpen ? 'block' : 'none'};
  @media  only screen and (min-width: 500px) and (max-width: 640px){
    width: 98%;
  }
  @media (max-width: 500px){
    width: 99%;
  }

  li {
    padding: 10px 20px;
    cursor: pointer;
    font-family: 'Space Grotesk', sans-serif;

    &:hover {
      background-color: ${colors.subColorFade};
    }
  }
`;
