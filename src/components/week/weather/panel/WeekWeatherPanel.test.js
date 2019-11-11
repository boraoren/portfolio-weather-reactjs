// @ts-check
// @ts-ignore
import React from 'react'
import { getAllByTestId } from '@testing-library/dom'
import { render } from '@testing-library/react'
import WeekWeatherPanel from './WeekWeatherPanel'

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


describe('week',()=>{
    describe('weather',()=>{
        describe('panel',()=>{
            it('has 7 dateWeatherPanel components',()=>{
                const rendered = render(<WeekWeatherPanel data={weekWeatherPanelData}/>)
                const getAllByTestId = rendered.getAllByTestId
                expect(getAllByTestId('dateWeatherPanelId')).toHaveLength(7)
            })
        })
    })
})
