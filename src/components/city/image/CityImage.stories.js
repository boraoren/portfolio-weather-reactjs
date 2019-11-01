// @ts-check
// @ts-ignore
import React from 'react'
import CityImage from "./CityImage";
export default { title: 'city/image' };
const jest = {jest:['CityImage']};

const src = "static/media/melbourne"

export const withImage = () => {
    return(<CityImage src={src}/>)
}

export const withoutImage = () => {
    return(<CityImage src={''}/>)
}

withImage.story = {
    parameters: jest
};

withoutImage.story = {
    parameters: jest
}

