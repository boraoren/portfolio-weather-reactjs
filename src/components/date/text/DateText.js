// @ts-check
// @ts-ignore
import React from 'react'
import styled from 'styled-components'
import { color, fontSize, flexbox } from 'styled-system'

/**
* @typedef {Object} Props
* @property {String} value - date text value
* @property {number[]} size - date text size
* @property {String} color - date text color, example: white
 */

/**
* texts of date
* @module DateText
* @param {Props} props
 */
const DateText = (props) => {
    return(
        // @ts-ignore
        <DateTextWrapper data-testid={'dateTextId'}
        fontSize={props.size}
        alignSelf={'center'}
        color={props.color}>{props.value}</DateTextWrapper>
    )
}

const DateTextWrapper = styled.span`
    ${color}
    ${fontSize}
    ${flexbox}
`

export default DateText