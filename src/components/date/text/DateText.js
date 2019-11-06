// @ts-check
// @ts-ignore
import React from 'react'

/**
* @typedef {Object} Props
* @property {String} value - date text value
 */

/**
* texts of date
* @module DateText
* @param {Props} props
 */
const DateText = (props) => {
    return(
        <span data-testid={'dateTextId'}>{props.value}</span>
    )
}

export default DateText