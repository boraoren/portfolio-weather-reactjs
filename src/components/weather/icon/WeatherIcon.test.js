// @ts-check
// @ts-ignore
import React from 'react'
import {render, getByTestId} from '@testing-library/react'
import WeatherIcon from './WeatherIcon'
import '@testing-library/jest-dom/extend-expect'

describe('weather', () => {
    describe('icon', () => {
        describe('daytime', () => {

            const renderedWeatherIcon = () => {
                const rendered = render(<WeatherIcon type={'wi wi-day-sunny'} color={'white'}/>)
                const getByTestId = rendered.getByTestId
                return {getByTestId}
            }

            it('has sunny icon', () => {
                // @ts-ignore
                const {getByTestId} = renderedWeatherIcon()
                expect(getByTestId('weatherIconId')).toHaveClass('wi wi-day-sunny')
            })

            it('color is white',()=>{
                const {getByTestId} = renderedWeatherIcon()
                expect(getByTestId('weatherIconId'))
                .toHaveStyle(`
                    color: white;
                `)
            })
        })
    })
})