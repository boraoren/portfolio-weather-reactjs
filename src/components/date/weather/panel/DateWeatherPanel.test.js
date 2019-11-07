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

            const renderDateWeatherPanel = () => {
                const rendered = render(<DateWeatherPanel
                                    weatherIconType={'wi wi-day-sunny'}
                                    weatherDegreeValue={'26°'}
                                    dateTextValue={'Wednesday'}/>)

                const getByTestId = rendered.getByTestId
                return {...rendered, getByTestId}
            }

            describe('weatherIcon component',()=>{
                it('exists',()=>{
                    const {getByTestId} = renderDateWeatherPanel()
                    const weatherIcon = getByTestId('weatherIconId')
                    expect(getByTestId('dateWeatherPanel'))
                    .toContainElement(weatherIcon)
                })
                it('type is daily sunny',()=>{
                    const {getByTestId} = renderDateWeatherPanel()
                    const weatherIcon = getByTestId('weatherIconId')
                    expect(weatherIcon)
                    .toHaveClass('wi wi-day-sunny')
                })
            })

            describe('weatherDegree component',()=>{
                it('exists', ()=>{
                    const {getByTestId} = renderDateWeatherPanel()
                    const weatherDegree = getByTestId('weatherDegreeId')
                    expect(getByTestId('dateWeatherPanel'))
                    .toContainElement(weatherDegree)
                })
                it('value is 26°',()=>{
                    const {getByTestId} = renderDateWeatherPanel()
                    const weatherDegree = getByTestId('weatherDegreeId')
                    expect(weatherDegree)
                    .toHaveTextContent(/^26°$/)
                })
            })

            describe('dateText component',()=>{
                it('exists', ()=>{
                    const {getByTestId} = renderDateWeatherPanel()
                    const dateText = getByTestId('dateTextId')
                    expect(getByTestId('dateWeatherPanel'))
                    .toContainElement(dateText)
                })
                it('value is Wednesday',()=>{
                    const {getByTestId} = renderDateWeatherPanel()
                    const dateText = getByTestId('dateTextId')
                    expect(dateText)
                    .toHaveTextContent(/^Wednesday$/)
                })
            })


        })
    })
})