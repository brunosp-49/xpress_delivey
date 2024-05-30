import { useState } from "react";
import { Checkbox } from "../../components/checkbox";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Select } from "../../components/input copy";
import { ButtonContainer, GridFlex, HeaderContainer, MainContainer, SubContainer } from "./style";
import { Button } from "../../components/accentButton";
import { addressPlanetOptions, addressTypeOptions, filterValue, generateRandomKey } from "../../utils/utils";
import { Address } from "../../types";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "../../hooks/hooks";
import { createAddress } from "../../redux/addressSlice";
import { useNavigate } from "react-router-dom";



function AddressCreate() {
    const [newAddress, setNewAddress] = useState<Address>({
        address: '',
        address_citizen_full_name: '',
        address_citizen_id: '',
        address_city: '',
        address_country: '',
        address_id: generateRandomKey(),
        address_lot_id: '',
        address_name: '',
        address_observations: '',
        address_planet: 'Earth',
        address_state: '',
        address_type: 1,
        address_zip_code: ''
    })
    const dispatch = useAppDispatch();
    const [isDefault, setIsDefault] = useState(false);
    const navigate = useNavigate();

    const createNewAddress = (): void => {
        if (newAddress.address_state) {
            if (
                !newAddress.address_state ||
                !newAddress.address_type ||
                !newAddress.address_zip_code ||
                !newAddress.address_name ||
                !newAddress.address_country ||
                !newAddress.address_id ||
                !newAddress.address_city ||
                !newAddress.address
            ) {
                toast.error(`Please fill the empty fields`);
                return;
            }
        } else {
            if (
                !newAddress.address_citizen_full_name ||
                !newAddress.address_citizen_id ||
                !newAddress.address_id ||
                !newAddress.address_name ||
                !newAddress.address_planet ||
                !newAddress.address_type
            ) {
                toast.error(`Please fill the empty fields`);
                return;
            }
        }

        dispatch(createAddress({ data: newAddress, mode: isDefault ? 'default' : 'normal' }));
        navigate('/');
    };



    return (
        <MainContainer>
            <Header />
            <SubContainer>
                <GridFlex>
                    <HeaderContainer>
                        <p>Add new address</p>
                    </HeaderContainer>
                    <Select
                        placeholder="Address type"
                        options={addressTypeOptions}
                        onChange={(e) => setNewAddress({ ...newAddress, address_type: e })}
                        value={filterValue(newAddress.address_type)}
                    />
                    <Select
                        placeholder="Planet"
                        options={addressPlanetOptions}
                        onChange={(e) => setNewAddress({ ...newAddress, address_planet: e })}
                        value={newAddress.address_planet}
                    />
                    <Input
                        placeholder="Address nickname"
                        value={newAddress.address_name}
                        onChange={(e) => setNewAddress({ ...newAddress, address_name: e })}
                    />
                    {
                        newAddress.address_planet === 'Mars'
                            ?
                            (<>
                                <Input
                                    placeholder="Lot ID"
                                    value={newAddress.address_lot_id}
                                    onChange={(e) => setNewAddress({ ...newAddress, address_lot_id: e })}
                                    maxLength={4}
                                />
                                <Input
                                    placeholder="Citizen ID"
                                    value={newAddress.address_citizen_id}
                                    onChange={(e) => setNewAddress({ ...newAddress, address_citizen_id: e })}
                                />
                                <Input
                                    placeholder="Full name"
                                    value={newAddress.address_citizen_full_name}
                                    onChange={(e) => setNewAddress({ ...newAddress, address_citizen_full_name: e })}
                                />
                                <Input
                                    placeholder="Observations"
                                    className="complete-row"
                                    value={newAddress.address_observations}
                                    onChange={(e) => setNewAddress({ ...newAddress, address_observations: e })}
                                />
                            </>)
                            :
                            (<>
                                <Input
                                    placeholder="Zip Code"
                                    value={newAddress.address_zip_code}
                                    onChange={(e) => setNewAddress({ ...newAddress, address_zip_code: e })}
                                />
                                <Input
                                    className="complete-row"
                                    placeholder="Address"
                                    value={newAddress.address}
                                    onChange={(e) => setNewAddress({ ...newAddress, address: e })}
                                />
                                <Input
                                    placeholder="City"
                                    value={newAddress.address_city}
                                    onChange={(e) => setNewAddress({ ...newAddress, address_city: e })}
                                />
                                <Input
                                    placeholder="State"
                                    value={newAddress.address_state}
                                    onChange={(e) => setNewAddress({ ...newAddress, address_state: e })}
                                />
                                <Input
                                    placeholder="Country"
                                    className="complete-row"
                                    value={newAddress.address_country}
                                    onChange={(e) => setNewAddress({ ...newAddress, address_country: e })}
                                />
                            </>)
                    }
                    <Checkbox
                        className="complete-row"
                        placeholder="Set as default address"
                        value={isDefault}
                        onChange={(e) => setIsDefault(e)}
                    />
                    <ButtonContainer className="complete-row">
                        <Button title="Cancel" customWidth="48%" mode="neutral" onClick={() => navigate('/')} />
                        <Button title="Create" customWidth="48%" onClick={createNewAddress} />
                    </ButtonContainer>
                </GridFlex>
            </SubContainer>
            <Footer />
            <ToastContainer style={{ width: '30%', minWidth: '380px' }} />
        </MainContainer>
    )
}

export default AddressCreate;