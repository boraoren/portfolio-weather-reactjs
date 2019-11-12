// @ts-check
// @ts-ignore
import React from 'react'
import styled from 'styled-components'
import {width, height} from 'styled-system'

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

    const defaultAlt = 'City Image'
    const small = `${props.src}x300.png`;
    const medium = `${props.src}x768.png`;
    const large = `${props.src}x1280.png`;

    return(
            <Image data-testid={'cityImageId'}
            src={small}
            alt={defaultAlt}
            height={['44vh','98vh']}
            srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`}
            />
    )
}


const Image = styled.img`
    ${height}
    width: 100%;
    object-fit: cover;
`


export default CityImage