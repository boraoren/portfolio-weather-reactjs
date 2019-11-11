// @ts-check
// @ts-ignore
import React from 'react'
import WeekWeatherPanel from './WeekWeatherPanel'

const weekWeatherPanelData = [
    {
        dateTextValue: 'Monday',
        weatherDegreeValue: '23°',
        weatherIconType:'wi wi-day-sunny',
    },
    {
        dateTextValue: 'Tuesday',
        weatherDegreeValue: '24°',
        weatherIconType:'wi wi-day-sunny',
    },
    {
        dateTextValue: 'Wednesday',
        weatherDegreeValue: '29°',
        weatherIconType:'wi wi-day-sunny',
    },
    {
        dateTextValue: 'Thursday',
        weatherDegreeValue: '32°',
        weatherIconType:'wi wi-day-sunny',
    },
    {
        dateTextValue: 'Friday',
        weatherDegreeValue: '15°',
        weatherIconType:'wi wi-day-sunny',
    },
    {
        dateTextValue: 'Saturday',
        weatherDegreeValue: '19°',
        weatherIconType:'wi wi-day-sunny',
    },
    {
        dateTextValue: 'Sunday',
        weatherDegreeValue: '26°',
        weatherIconType:'wi wi-day-sunny',
    }

]

export default {title: 'week/weather/panel'}
const jest = {jest:['WeekWeatherPanel']}

export const weekWeatherPanel = () => {
    return(
        <WeekWeatherPanel data={weekWeatherPanelData}/>
    )
}

weekWeatherPanel.story = {
    parameters: jest
}