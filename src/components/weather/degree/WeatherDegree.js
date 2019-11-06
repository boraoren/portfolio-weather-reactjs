// @ts-check
// @ts-ignore
import React from 'react'

/**
* @typedef {Object} Props
* @property {String} value - weather degree value, for example 26°
* @property {String} [size='40px'] - weather degree font size, default is 40px
 */

/**
* show weather degree
* @module WeatherDegree
* @param {Props} props
 */

const WeatherDegree = (props) => {
    return(
        <span data-testid={'weatherDegreeId'} style={{fontSize: (props.size || '40px')}}>{props.value}</span>
    )
}

export default WeatherDegree