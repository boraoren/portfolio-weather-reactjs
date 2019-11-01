// @ts-check
// @ts-ignore
import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
    width: 100%; /* or whatever is required */
    height: 100%;
    text-align: center; /* ensures the image is always in the h-middle */
    overflow: hidden; /* hide the cropped portion */
`

const Image = styled.img`
    position: relative; /* allows repositioning */
    left: 100%; /* move the whole width of the image to the right */
    margin-left: -200%; /* magic! */
`
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
        <Content>
            <Image data-testid={'cityImageId'}
            src={small}
            alt={defaultAlt}
            srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} />
        </Content>

    )
}

export default CityImage