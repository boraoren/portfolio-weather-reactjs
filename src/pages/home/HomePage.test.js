// @ts-check
// @ts-ignore
import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HomePage from './HomePage'

describe('page',()=>{
    describe('homePage',()=>{


    const weekWeatherPanelData = [
        {
            dateTextValue: 'Monday',
            weatherDegreeValue: '23°',
            weatherIconType:'wi wi-day-sunny',
        },
        {
            dateTextValue: 'Tuesday',
            weatherDegreeValue: '24°',
            weatherIconType:'wi wi-day-sunny',
        },
        {
            dateTextValue: 'Wednesday',
            weatherDegreeValue: '29°',
            weatherIconType:'wi wi-day-sunny',
        },
        {
            dateTextValue: 'Thursday',
            weatherDegreeValue: '32°',
            weatherIconType:'wi wi-day-sunny',
        },
        {
            dateTextValue: 'Friday',
            weatherDegreeValue: '15°',
            weatherIconType:'wi wi-day-sunny',
        },
        {
            dateTextValue: 'Saturday',
            weatherDegreeValue: '19°',
            weatherIconType:'wi wi-day-sunny',
        },
        {
            dateTextValue: 'Sunday',
            weatherDegreeValue: '26°',
            weatherIconType:'wi wi-day-sunny',
        }

    ]

        const props = {weekWeatherPanelData}

        const renderedHomePage = () => {
            const rendered = render(<HomePage {...props}/>)
            const getByTestId = rendered.getByTestId
            return {getByTestId}
        }

        it('has cityImage component',()=>{
            const {getByTestId} = renderedHomePage()
            expect(getByTestId('homePageId'))
            .toContainElement(getByTestId('cityImageId'))
        });

        it('has weatherInformationPanel component',()=>{
          const {getByTestId} = renderedHomePage()
          expect(getByTestId('homePageId'))
          .toContainElement(getByTestId('weatherInformationPanelId'))
        })

        it('has weekWeatherPanel component', ()=>{
            const {getByTestId} = renderedHomePage()
            expect(getByTestId('homePageId'))
            .toContainElement(getByTestId('weekWeatherPanelId'))
        })
    })
})