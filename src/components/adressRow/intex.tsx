import React from "react";
import { SubButton } from "../subButton";
import { ActionsContainer, AddressCard, IconContainer, IdentifyContainer, InfoContainers, MainContainer, TitleCard } from "./style";
import houseIcon from "../../assets/images/houseIcon.png";
import workIcon from "../../assets/images/workIcon.png";
import vacationIcon from "../../assets/images/vacationIcon.png";
import otherIcon from "../../assets/images/otherIcon.png";
import { Address } from "../../types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { setSelectedAddress } from "../../redux/addressSlice";

interface Props {
    addresses: Address[];
}


export const AddressRow: React.FC<Props> = ({ addresses }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onEdit = (address: Address) => {
        dispatch(setSelectedAddress(address));
        navigate(`/edit/${address.address_id}`);
    }

    return (
        <>
            {addresses.length
                ?
                <>
                    {addresses.map((address, index) => (
                        <MainContainer key={index}>
                            <IdentifyContainer>
                                <IconContainer>
                                    <img src={
                                        address.address_type === 1
                                            ?
                                            houseIcon
                                            :
                                            address.address_type === 2
                                                ?
                                                workIcon
                                                :
                                                address.address_type === 3
                                                    ?
                                                    vacationIcon
                                                    :
                                                    otherIcon
                                    } alt="House Icon" />
                                </IconContainer>
                                <InfoContainers>
                                    <TitleCard>{address.address_name}</TitleCard>
                                    <AddressCard>{address.address}</AddressCard>
                                </InfoContainers>
                            </IdentifyContainer>
                            <ActionsContainer>
                                <SubButton title="Edit" onClick={() => onEdit(address)} />
                            </ActionsContainer>
                        </MainContainer>
                    ))}
                </>
                :
                <>
                    <MainContainer>
                        <AddressCard>No items to show</AddressCard>
                    </MainContainer>
                </>
            }
        </>
    )
}