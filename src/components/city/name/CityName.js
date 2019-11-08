// @ts-check
// @ts-ignore
import React from 'react'
import styled from 'styled-components'
import {fontSize, color} from 'styled-system'

/**
* @typedef {Object} Props
* @property {String} text - city name
* @property {number[]} size - city name font size
* @property {string} color - city name color
 */
/**
* Show City Name
* @module CityName
* @param {Props} props
 */
const CityName = (props) => {
    return(
        // @ts-ignore
        <Text data-testid='cityNameId'
            fontSize={props.size}
            color={props.color}
            >{props.text}</Text>
    )
}

const Text = styled.span`
    ${fontSize};
    ${color};
`

export default CityName