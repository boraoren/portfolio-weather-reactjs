// @ts-check
// @ts-ignore
import React from 'react'
import {render} from '@testing-library/react';
import CityImage from "./CityImage";

let getByTestId
const dataTestId = 'cityImageId'
const altAttribute = 'City Image'
const expectedSrc = 'static/media/melbournex300.png'
const src = "static/media/melbourne"


beforeEach(() => {
    const rendered = render(<CityImage src={src}/>)
    getByTestId = rendered.getByTestId
})


describe('city', () => {

    describe('image', () => {
        it('has image', () => {
            expect(getByTestId(dataTestId)
                .getAttribute('src'))
                .toBe(expectedSrc)
        })

        it('alt value is ' + altAttribute, () => {
            expect(getByTestId(dataTestId)
                .getAttribute('alt'))
                .toBe(altAttribute)
        })

    })
})