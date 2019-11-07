// @ts-check
// @ts-ignore
import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
    font-size: 62px;
`


/**
* @typedef {Object} Props
* @property {String} text - city name
 */
/**
* Show City Name
* @module CityName
* @param {Props} props
 */
const CityName = (props) => {
    return(
        <Text data-testid='cityNameId'>{props.text}</Text>
    )
}

export default CityName