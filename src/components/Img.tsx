import React from 'react'
import type { JSX } from 'react/jsx-runtime'


import images_32b10b09_5d55_4b5c_bc21_d4bda9e09a22_png from '/images/32b10b09-5d55-4b5c-bc21-d4bda9e09a22.png';
import images_aa729f49_aa07_4ea4_a03f_6fec738f40a0_png from '/images/aa729f49-aa07-4ea4-a03f-6fec738f40a0.png';
import images_0b17cb9b_83c8_43d8_8ba1_6259040f70cb_png from '/images/0b17cb9b-83c8-43d8-8ba1-6259040f70cb.png';
import images_096192d6_e978_465e_8711_b680b7070952_png from '/images/096192d6-e978-465e-8711-b680b7070952.png';

export const Img = ({ id }) => {
    switch (String(id)) {    case "0":
        return (
            <img src={images_32b10b09_5d55_4b5c_bc21_d4bda9e09a22_png} alt={"Bitcoin"} className={"h-16 w-16"}></img>
        );
    case "1":
        return (
            <img src={images_aa729f49_aa07_4ea4_a03f_6fec738f40a0_png} alt={"Ethereum"} className={"h-16 w-16"}></img>
        );
    case "2":
        return (
            <img src={images_0b17cb9b_83c8_43d8_8ba1_6259040f70cb_png} alt={""} className={"pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-20"}></img>
        );
    case "3":
        return (
            <img src={images_096192d6_e978_465e_8711_b680b7070952_png} alt={"en"}></img>
        );
    default:
        return null;
    }
};

export default Img
