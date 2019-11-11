// @ts-check
// @ts-ignore
import React from 'react'
import HomePage from './HomePage'

export default {title: 'pages/homePage'}
const jest = {jest:['HomePage']}


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

export const homePage = () => {
    return(<HomePage weekWeatherPanelData={weekWeatherPanelData}/>)
}

homePage.story = {
    parameters: jest
}