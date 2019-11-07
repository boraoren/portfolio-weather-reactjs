// @ts-check
// @ts-ignore
import React from 'react'
import WeatherIcon from '../../../weather/icon/WeatherIcon'
import WeatherDegree from '../../../weather/degree/WeatherDegree'
import DateText from '../../text/DateText'

/**
* @typedef {Object} Props
* @property {String} weatherIconType - weather icon type, example: wi wi-day-sunny
* @property {String} weatherDegreeValue - weather degree value, example: 26°
* @property {String} dateTextValue - date text value, example: Wednesday
* @property {String} backgroundColor - date weather panel background color
 */

/**
* Date Weather Panel (includes: Weather Icon, Weather Degree, Date Text)
* @module DateWeatherPanel
* @param {Props} props
 */
const DateWeatherPanel = (props) => {
    return(
        <div data-testid={'dateWeatherPanel'} style={{backgroundColor:'black'}}>
            <WeatherIcon type={props.weatherIconType} color={'white'}/>
            <WeatherDegree value={props.weatherDegreeValue}/>
            <DateText value={props.dateTextValue}/>
        </div>
    )
}

export default DateWeatherPanel