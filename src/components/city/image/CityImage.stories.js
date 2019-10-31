import React from 'react'
import CityImage from "./CityImage";

export default { title: 'city' };

export const image = () => {
    return(
        <CityImage/>
    )
}

image.story = {
    parameters: {jest: ['CityImage']},
};