// @ts-check
// @ts-ignore
import React from 'react'
import WeatherIcon from '../../../weather/icon/WeatherIcon'
import WeatherDegree from '../../../weather/degree/WeatherDegree'
import DateText from '../../text/DateText'


const DateWeatherPanel = () => {
    return(
        <div data-testid={'dateWeatherPanel'}>
            <WeatherIcon type={'wi wi-day-sunny'}/>
            <WeatherDegree value={'26°'}/>
            <DateText value={'Friday'}/>
        </div>
    )
}

export default DateWeatherPanel