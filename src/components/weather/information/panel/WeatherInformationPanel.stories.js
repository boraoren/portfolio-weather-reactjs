// @ts-check
// @ts-ignore
import React from 'react'
import WeatherInformationPanel from './WeatherInformationPanel'

export default {title: 'weather/information/panel'}
const jest = {jest:['WeatherInformationPanel']}

export const weatherInformationPanel = () => {
    return(
        <WeatherInformationPanel/>
    )
}

weatherInformationPanel.story = {
    parameters: jest
}