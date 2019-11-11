// @ts-check
// @ts-ignore
import React from 'react'
import WeatherDegree from './WeatherDegree'

export default {title: 'weather/degree'}
const jest = {jest:['WeatherDegree']}

export const twentySixDegree = () => {
    return(<WeatherDegree value={'26°'}
                            size={[40]}
                            color={'black'}/>)
}

twentySixDegree.story = {
    parameters: jest
}
