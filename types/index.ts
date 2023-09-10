import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
}

export interface SearchBarProps {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    manufacturer: string;
    year: string;
    fuel: string;
    limit: number;
    model: string;
}

export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
    setFilter: (filter: string) => void;
}

export interface ShowMoreProps {
    pageNumber: number;
    setLimit: (limit: number) => void;
    isNext: boolean;
}