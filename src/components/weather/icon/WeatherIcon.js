// @ts-check
// @ts-ignore
import React from 'react'
import './css/weather-icons.min.css';

/**
* @typedef {Object} Props
* @property {String} type - weather icon type
* @property {String} [size='62px'] - weather icon size
* @property {String} color - weather icon color
 */

/**
* Weather types icon
* @module WeatherIcon
* @param {Props} props
 */
const WeatherIcon = (props) => {
    return(
            <i data-testid={'weatherIconId'}
                className={props.type}
                style={{fontSize: props.size || '62px', color: props.color}}/>
    )
}

export default WeatherIcon

