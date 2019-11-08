// @ts-check
// @ts-ignore
import React from 'react'
import { getAllByTestId } from '@testing-library/dom'
import { render } from '@testing-library/react'
import WeekWeatherPanel from './WeekWeatherPanel'

describe('week',()=>{
    describe('weather',()=>{
        describe('panel',()=>{
            it('has 7 dateWeatherPanel components',()=>{
                const rendered = render(<WeekWeatherPanel/>)
                const getAllByTestId = rendered.getAllByTestId
                expect(getAllByTestId('dateWeatherPanelId')).toHaveLength(7)
            })
        })
    })
})
