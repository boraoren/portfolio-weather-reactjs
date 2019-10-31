// @flow
import {render} from '@testing-library/react';
import React from 'react';
import image from './melbourne.png';
import CityImage from "./CityImage";


let getByTestId
const dataTestId = 'cityImageId'
const altAttribute = 'City Image'
const srcAttribute = 'melbourne.png'

beforeEach(() => {
    const rendered = render(<CityImage src={image}/>)
    getByTestId = rendered.getByTestId
})


describe('city', () => {

    describe('image', () => {
        it('has image', () => {
            expect(getByTestId(dataTestId)
                .getAttribute('src'))
                .toBe(srcAttribute)
        })

        it('alt value is ' + altAttribute, () => {
            expect(getByTestId(dataTestId)
                .getAttribute('alt'))
                .toBe(altAttribute)
        })

    })
})