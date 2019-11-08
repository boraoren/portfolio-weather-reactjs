// @ts-check
// @ts-ignore
import React from 'react'
import './css/weather-icons.min.css';
import styled from 'styled-components'
import { color, fontSize, padding } from 'styled-system'

/**
* @typedef {Object} Props
* @property {string} type - weather icon type
* @property {number[]} size - weather icon size
* @property {string} [color='black'] - weather icon color
* @property {number[]} [padding=[15]] - weather icon padding
 */

/**
* Weather types icon
* @module WeatherIcon
* @param {Props} props
 */
const WeatherIcon = (props) => {
    return(
        // @ts-ignore
        <WeatherIconWrapper
        data-testid={'weatherIconId'}
        className={props.type}
        fontSize={props.size}
        color={props.color}
        p={props.padding || [15]}
        >
        </WeatherIconWrapper>

    )
}

const WeatherIconWrapper = styled.i`
    ${color}
    ${fontSize}
    ${padding}
`


export default WeatherIcon

