// @ts-check
// @ts-ignore
import React from 'react'
import {render} from '@testing-library/react'
import WeatherIcon from './WeatherIcon'

import {toHaveClass} from '@testing-library/jest-dom'
expect.extend({toHaveClass})

describe('weather', () => {
    describe('icon', () => {
        describe('daytime', () => {
            it('has sunny icon', () => {
                const rendered = render(<WeatherIcon type={'wi wi-day-sunny'}/>)
                const getByTestId = rendered.getByTestId
                // @ts-ignore
                expect(getByTestId('weatherIconId')).toHaveClass('wi wi-day-sunny')
            })
        })
    })
})