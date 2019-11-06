// @ts-check
// @ts-ignore
import React from 'react'
import DateText from './DateText'

export default {title: 'date/text'}
const jest = {jest:['DateText']}

export const monday = () => {
    return(<DateText value={'Monday'}/>)
}

monday.story = {
    parameters: jest
}
