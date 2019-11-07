// @ts-check
// @ts-ignore
import React from 'react'
import DateWeatherPanel from './DateWeatherPanel'

export default {title: 'date/weather/panel'}
const jest = {jest:['DateWeatherPanel']}

export const dateWeatherPanel = () => {
    return <DateWeatherPanel/>
}

dateWeatherPanel.story = {
    parameters: jest
}

