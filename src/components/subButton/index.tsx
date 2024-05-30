import React from "react";
import { MainContainer } from "./style";

interface Props {
    title: string;
    onClick?: () => void;
    color?: string;
    backgroundColor?: string;
    width?: number | string;
    height?: number | string;
}

export const SubButton: React.FC<Props> = ({ title, backgroundColor, color, onClick, width, height }) => {
    return (
        <MainContainer onClick={onClick && onClick} color={color} backgroundColor={backgroundColor} width={width} height={height}>
            <p>{title}</p>
        </MainContainer>
    )
}