// @ts-check
// @ts-ignore
import React from 'react'
import WeatherIcon from './WeatherIcon'

export default {title: 'weather/icon'}
const jest = {jest:['WeatherIcon']}

export const daytimeSunny = () => {
    return(<WeatherIcon type={'wi wi-day-sunny'}/>)
}

export const nighttimeClear = () => {
    return(<WeatherIcon type={'wi wi-night-clear'}/>)
}

export const daytimeCloudy = () => {
    return(<WeatherIcon type={'wi wi-day-cloudy'}/>)
}

export const nighttimePartlyCloudy = () => {
    return(<WeatherIcon type={'wi wi-night-partly-cloudy'}/>)
}

export const cloudy = () => {
    return(<WeatherIcon type={'wi wi-cloud'}/>)
}

export const rainy = () => {
    return(<WeatherIcon type={'wi wi-rain'}/>)
}

export const snowy = () => {
    return(<WeatherIcon type={'wi wi-snow'}/>)
}

export const thunderStorming = () => {
    return(<WeatherIcon type={'wi wi-thunderstorm'}/>)
}

export const foggy = () => {
    return(<WeatherIcon type={'wi wi-fog'}/>)
}


daytimeSunny.story = {
    parameters: jest
}