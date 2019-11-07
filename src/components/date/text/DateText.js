// @ts-check
// @ts-ignore
import React from 'react'

/**
* @typedef {Object} Props
* @property {String} value - date text value
* @property {String} [size='62px'] - date text size, default is 62px
* @property {String} color - date text color, example: white
 */

/**
* texts of date
* @module DateText
* @param {Props} props
 */
const DateText = (props) => {
    return(
        <span data-testid={'dateTextId'} style={{fontSize: props.size|| '62px', color: props.color}}>{props.value}</span>
    )
}

export default DateText