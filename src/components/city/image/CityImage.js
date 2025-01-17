// @ts-check
// @ts-ignore
import React from 'react'
import styled from 'styled-components'
import {width,height} from 'styled-system'

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
            height={['99.3vh']}
            src={small}
            alt={defaultAlt}
            srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`}
            />
    )
}


const Image = styled.img`
    width: 100%;
    object-fit: cover;
    ${height};
`


export default CityImage