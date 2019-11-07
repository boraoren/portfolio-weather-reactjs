// @ts-check
// @ts-ignore
import React from 'react'
import { getByTestId } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import WeatherInformationPanel from './WeatherInformationPanel'

describe('weather',()=>{
    describe('information',()=>{
        describe('panel',()=>{
            it('has cityName component',()=>{
                const rendered = render(<WeatherInformationPanel/>)
                const getByTestId = rendered.getByTestId
                const cityName = getByTestId('cityNameId')
                expect(getByTestId('weatherInformationPanelId'))
                .toContainElement(cityName)
            })

            it('has weatherIcon component', ()=>{
                const rendered = render(<WeatherInformationPanel/>)
                const getByTestId = rendered.getByTestId
                const weatherIcon = getByTestId('weatherIconId')
                expect(getByTestId('weatherInformationPanelId'))
                .toContainElement(weatherIcon)
            })

            it('has weatherDegree component', ()=>{
                const rendered = render(<WeatherInformationPanel/>)
                const getByTestId = rendered.getByTestId
                const weatherDegree = getByTestId('weatherDegreeId')
                expect(getByTestId('weatherInformationPanelId'))
                .toContainElement(weatherDegree)
            })

            it('has dateText component', ()=>{
                const rendered = render(<WeatherInformationPanel/>)
                const getByTestId = rendered.getByTestId
                const dateText = getByTestId('dateTextId')
                expect(getByTestId('weatherInformationPanelId'))
                .toContainElement(dateText)
            })
        })
    })
})