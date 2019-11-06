//ts-check
//ts-ignore
import React from 'react'
import CityName from './CityName'

export default {title: 'city/name'}
const jest = {jest:['CityName']};

export const melbourne = () => {
    return(<CityName text={'Melbourne'}/>)
}

melbourne.story = {
    parameters: jest
}
