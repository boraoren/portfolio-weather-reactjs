// @ts-check
// @ts-ignore
import React from 'react'
import { getByTestId } from '@testing-library/dom'
import { render } from '@testing-library/react'
import DateWeatherPanel from './DateWeatherPanel'
import '@testing-library/jest-dom/extend-expect'


describe('date',()=>{
    describe('weather',()=>{
        describe('panel', ()=>{
            it('has weatherIcon component',()=>{
                const rendered = render(<DateWeatherPanel/>)
                const getByTestId = rendered.getByTestId
                const weatherIcon = getByTestId('weatherIconId')
                expect(getByTestId('dateWeatherPanel'))
                .toContainElement(weatherIcon)
            })

            it('has weatherDegree component', ()=>{
                const rendered = render(<DateWeatherPanel/>)
                const getByTestId = rendered.getByTestId
                const weatherDegree = getByTestId('weatherDegreeId')
                expect(getByTestId('dateWeatherPanel'))
                .toContainElement(weatherDegree)
            })

            it('has dateText component', ()=>{
                const rendered = render(<DateWeatherPanel/>)
                const getByTestId = rendered.getByTestId
                const dateText = getByTestId('dateTextId')
                expect(getByTestId('dateWeatherPanel'))
                .toContainElement(dateText)
            })
        })
    })
})