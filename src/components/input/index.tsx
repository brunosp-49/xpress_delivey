import React from "react"
import { CustomInput } from "./style"

interface Props {
    placeholder: string;
    id?: string;
    className?: string;
    onChange?: (event: any) => void;
    value?: string;
    maxLength?: number;
}

export const Input: React.FC<Props> = ({ placeholder, id, className, onChange, value, maxLength }) => {
    return (
        <CustomInput
            id={id}
            maxLength={maxLength}
            placeholder={placeholder}
            className={className}
            onChange={(e) => onChange ? onChange(e.target.value) : {}}
            value={value}
        />
    )
}