import { LogoContainer, MainContainer, MenuContainer, MenuItem, MenuMobileContainer } from "./style"
import logo from '../../assets/images/logo_circle_inverted.png';
import { Link } from "react-router-dom";
import MenuMobile from "../../assets/images/menuMobile.png";
import { Button } from "../accentButton";

export const Header = () => {
    return (
        <MainContainer>
            <LogoContainer>
                <Link to='/'>
                    <img src={logo} alt="Xpress logo" />
                </Link>
                <p>Xpress</p>
            </LogoContainer>
            <MenuContainer>
                <MenuItem>
                    <p>Send</p>
                </MenuItem>
                <MenuItem>
                    <p>Track</p>
                </MenuItem>
                <MenuItem>
                    <p>Help</p>
                </MenuItem>
                <Button title="Sign In" />
            </MenuContainer>
            <MenuMobileContainer>
                <img src={MenuMobile} alt="Menu" />
            </MenuMobileContainer>
        </MainContainer>
    )
}