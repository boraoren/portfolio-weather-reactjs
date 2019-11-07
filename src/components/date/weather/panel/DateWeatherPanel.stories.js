// @ts-check
// @ts-ignore
import React from 'react'
import DateWeatherPanel from './DateWeatherPanel'

export default {title: 'date/weather/panel'}
const jest = {jest:['DateWeatherPanel']}

export const dateWeatherPanel = () => {
    return <DateWeatherPanel
                weatherIconType={'wi wi-day-sunny'}
                weatherDegreeValue={'26°'}
                dateTextValue={'Wednesday'}/>
}

dateWeatherPanel.story = {
    parameters: jest
}

