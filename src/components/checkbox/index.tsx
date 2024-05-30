import React from "react";
import { CustomInput, Label } from "./style";

interface Props {
    placeholder: string;
    id?: string;
    className?: string;
    value: boolean;
    onChange: (value: boolean) => void;
}

export const Checkbox: React.FC<Props> = ({ placeholder, id, className, onChange, value }) => {
    return (
        <div id={id} style={{ width: '100%', display: 'flex'
         }} className={className}>
            <CustomInput checked={value} onClick={() => onChange(!value)}>
                <div className={value ? "checked" : "unChecked"} />
            </CustomInput>
            <Label>{placeholder}</Label>
        </div>
    );
};
