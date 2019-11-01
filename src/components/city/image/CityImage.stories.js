// @ts-check
// @ts-ignore
import React from 'react'
import CityImage from "./CityImage";
//@ts-ignore
import src from './melbourne.png'

export default { title: 'city/image' };
const jest = {jest:['CityImage']};

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

