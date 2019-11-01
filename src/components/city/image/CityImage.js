// @ts-check
// @ts-ignore
import React from 'react'
/**
 * @typedef {Object} Props
 * @property {string} src - image url
 */

 /**
 * Show City Image
 * @module CityImage
 * @param {Props} props
 */
const CityImage = (props) => {

    const defaultAlt = 'City Image';

    return(
        <img data-testid={'cityImageId'} src={props.src} alt={defaultAlt}/>
    )
}

export default CityImage