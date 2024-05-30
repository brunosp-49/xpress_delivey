import { useNavigate } from "react-router-dom";
import { AddressRow } from "../../components/adressRow/intex";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useAppSelector } from "../../hooks/hooks";
import { addresses } from "../../redux/addressSlice";
import { AddButton, HeaderContainer, MainContainer, SubContainer } from "./style";

function AddressList() {
    const address = useAppSelector(addresses);
    const navigation = useNavigate();

    return (
        <MainContainer>
            <Header />
            <SubContainer>
                <HeaderContainer>
                    <p>Manage Addresses</p>
                </HeaderContainer>
                <div style={{maxHeight: '50vh', overflow: 'auto'}}>
                <AddressRow addresses={address} />
                </div>
                <AddButton onClick={()=>navigation('/create')}>
                    <p>Add New Address</p>
                </AddButton>
            </SubContainer>
            <Footer />
        </MainContainer>
    )
}

export default AddressList;