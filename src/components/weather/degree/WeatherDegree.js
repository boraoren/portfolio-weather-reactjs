// @ts-check
// @ts-ignore
import React from 'react'
import styled from 'styled-components'
import { color, fontSize, position, margin } from 'styled-system'


/**
* @typedef {Object} Props
* @property {String} value - weather degree value, for example 26°
* @property {number[]} size - weather degree font size
* @property {String} color - weather degree color, for example white
* @property {number} [marginLeft=0] - weather degree margin left value
* @property {string} [position='none'] - weather degree position, default is none
 */

/**
* show weather degree
* @module WeatherDegree
* @param {Props} props
 */

const WeatherDegree = (props) => {
    return(
        // @ts-ignore
        <WeatherDegreeWrapper data-testid={'weatherDegreeId'}
                fontSize={props.size}
                color={props.color}
                position={props.position || 'none'}
                ml={props.marginLeft || 0}
                >{props.value}</WeatherDegreeWrapper>
    )
}

const WeatherDegreeWrapper = styled.span`
    ${color};
    ${fontSize};
    ${position};
    ${margin}
`

export default WeatherDegree