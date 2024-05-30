import React, { useState } from "react"
import { DropdownButton, DropdownContainer, DropdownMenu } from "./style"

interface Props {
    placeholder: string;
    options: { label: string; value: string | number }[];
    id?: string;
    onChange: (event: any) => void;
    value: string;
    className?: string;
}

export const Select: React.FC<Props> = ({ placeholder, options, id, onChange, value, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value: string | number) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <DropdownContainer onClick={toggleDropdown} id={id} className={className}>
            <DropdownButton type="button">{value || placeholder}</DropdownButton>
            <DropdownMenu isOpen={isOpen}>
                {options.map((option) => (
                    <li key={option.value} onClick={() => handleOptionClick(option.value)}>
                        {option.label}
                    </li>
                ))}
            </DropdownMenu>
        </DropdownContainer>
    );
}