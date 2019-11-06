// @ts-check
// @ts-ignore
import React from 'react'

/**
* @typedef {Object} Props
* @property {String} value - weather degree value, for example 26°
 */

/**
* show weather degree
* @module WeatherDegree
* @param {Props} props
 */

const WeatherDegree = (props) => {
    return(
        <span data-testid={'weatherDegreeId'}>{props.value}</span>
    )
}

export default WeatherDegree