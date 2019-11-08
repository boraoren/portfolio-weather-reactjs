// @ts-check
// @ts-ignore
import React from 'react'
import WeekWeatherPanel from './WeekWeatherPanel'

export default {title: 'week/weather/panel'}

const jest = {jest:['WeekWeatherPanel']}

const weekWeatherPanel = () => {
    return(<WeekWeatherPanel/>)
}

weekWeatherPanel.story ={
    parameters: jest
}