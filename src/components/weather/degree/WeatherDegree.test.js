// @ts-check
// @ts-ignore
import React from 'react'
import WeatherDegree from './WeatherDegree'
import { getByTestId } from '@testing-library/dom'
import { render } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import {toHaveTextContent,toHaveStyle} from '@testing-library/jest-dom'
expect.extend({toHaveTextContent,toHaveStyle})

describe('weather', ()=>{
    describe('degree',()=>{

        const renderedWeatherDegree = () => {
            const rendered = render(<WeatherDegree value={'26°'} color={'white'}/>)
            const getByTestId = rendered.getByTestId
            return {getByTestId}
        }

        it('value is 26°',()=>{
            const {getByTestId} = renderedWeatherDegree()
            expect(getByTestId('weatherDegreeId'))
            .toHaveTextContent('26°')
        })

        it('size is 40px',()=>{
            const {getByTestId} = renderedWeatherDegree()
            expect(getByTestId('weatherDegreeId'))
            .toHaveStyle(`
                font-size:40px;
            `)
        })

        it('color is white',()=>{
            const {getByTestId} = renderedWeatherDegree()
            expect(getByTestId('weatherDegreeId'))
            .toHaveStyle(`
                color:white;
            `)
        })
    })
})