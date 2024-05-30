import React from "react";
import { MainContainer } from "./style";

interface Props {
    title: string;
    onClick?: () => void
    mode?: 'neutral' | 'delete' | undefined;
    fullWidth?: boolean;
    customWidth?: string;
}

export const Button: React.FC<Props> = ({ title, onClick, mode, fullWidth, customWidth }) => {
    return (
        <MainContainer fullWidth={fullWidth} mode={mode} onClick={onClick && onClick} customWidth={customWidth}>
            <p>{title}</p>
        </MainContainer>
    )
};