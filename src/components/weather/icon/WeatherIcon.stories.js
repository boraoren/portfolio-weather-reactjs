// @ts-check
// @ts-ignore
import React from 'react'
import WeatherIcon from './WeatherIcon'

export default {title: 'weather/icon'}
const jest = {jest:['WeatherIcon']}

export const daytimeSunny = () => {
    return(<WeatherIcon type={'wi wi-day-sunny'} size={[15]}/>)
}

export const nighttimeClear = () => {
    return(<WeatherIcon type={'wi wi-night-clear'} size={[15]}/>)
}

export const daytimeCloudy = () => {
    return(<WeatherIcon type={'wi wi-day-cloudy'} size={[15]}/>)
}

export const nighttimePartlyCloudy = () => {
    return(<WeatherIcon type={'wi wi-night-partly-cloudy'} size={[15]}/>)
}

export const cloudy = () => {
    return(<WeatherIcon type={'wi wi-cloud'} size={[15]}/>)
}

export const rainy = () => {
    return(<WeatherIcon type={'wi wi-rain'} size={[15]}/>)
}

export const snowy = () => {
    return(<WeatherIcon type={'wi wi-snow'} size={[15]}/>)
}

export const thunderStorming = () => {
    return(<WeatherIcon type={'wi wi-thunderstorm'} size={[15]}/>)
}

export const foggy = () => {
    return(<WeatherIcon type={'wi wi-fog'} size={[15]}/>)
}


daytimeSunny.story = {
    parameters: jest
}