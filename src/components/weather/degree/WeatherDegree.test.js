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
        it('value is 26°',()=>{
            const rendered = render(<WeatherDegree value={'26°'}/>)
            const getByTestId = rendered.getByTestId
            expect(getByTestId('weatherDegreeId'))
            .toHaveTextContent('26°')
        })

        it('size is 40px',()=>{
            const rendered = render(<WeatherDegree value={'26°'}/>)
            const getByTestId = rendered.getByTestId
            expect(getByTestId('weatherDegreeId'))
            .toHaveStyle(`
                font-size:40px;
            `)

        })
    })
})