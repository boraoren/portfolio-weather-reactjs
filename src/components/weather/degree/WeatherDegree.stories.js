// @ts-check
// @ts-ignore
import React from 'react'
import WeatherDegree from './WeatherDegree'

export default {title: 'weather/degree'}
const jest = {jest:['WeatherDegree']}

export const twentySixDegree = () => {
    return(<WeatherDegree value={'26°'}/>)
}

twentySixDegree.story = {
    parameters: jest
}
