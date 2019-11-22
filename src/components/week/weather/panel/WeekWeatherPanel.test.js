// @ts-check
// @ts-ignore
import React from 'react'
import { getAllByTestId } from '@testing-library/dom'
import { render } from '@testing-library/react'
import WeekWeatherPanel from './WeekWeatherPanel'

const days=[{
			"date": 1574121600,
			"dateTextValue": "2019-11-19 00:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 13.42
		},
		{
			"date": 1574132400,
			"dateTextValue": "2019-11-19 03:00:00",
			"weatherIconType": "Clear",
			"weatherDegreeValue": 13.91
		},
		{
			"date": 1574143200,
			"dateTextValue": "2019-11-19 06:00:00",
			"weatherIconType": "Clear",
			"weatherDegreeValue": 14.84
		},
		{
			"date": 1574154000,
			"dateTextValue": "2019-11-19 09:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 18.25
		},
		{
			"date": 1574164800,
			"dateTextValue": "2019-11-19 12:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 20.57
		},
		{
			"date": 1574175600,
			"dateTextValue": "2019-11-19 15:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 18.76
		},
		{
			"date": 1574186400,
			"dateTextValue": "2019-11-19 18:00:00",
			"weatherIconType": "Clear",
			"weatherDegreeValue": 17.84
		},
		{
			"date": 1574197200,
			"dateTextValue": "2019-11-19 21:00:00",
			"weatherIconType": "Clear",
			"weatherDegreeValue": 16.96
		},
		{
			"date": 1574208000,
			"dateTextValue": "2019-11-20 00:00:00",
			"weatherIconType": "Clear",
			"weatherDegreeValue": 16.11
		},
		{
			"date": 1574218800,
			"dateTextValue": "2019-11-20 03:00:00",
			"weatherIconType": "Clear",
			"weatherDegreeValue": 15.44
		},
		{
			"date": 1574229600,
			"dateTextValue": "2019-11-20 06:00:00",
			"weatherIconType": "Clear",
			"weatherDegreeValue": 15.66
		},
		{
			"date": 1574240400,
			"dateTextValue": "2019-11-20 09:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 17.77
		},
		{
			"date": 1574251200,
			"dateTextValue": "2019-11-20 12:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 18.54
		},
		{
			"date": 1574262000,
			"dateTextValue": "2019-11-20 15:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 17.99
		},
		{
			"date": 1574272800,
			"dateTextValue": "2019-11-20 18:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 17.32
		},
		{
			"date": 1574283600,
			"dateTextValue": "2019-11-20 21:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 16.78
		},
		{
			"date": 1574294400,
			"dateTextValue": "2019-11-21 00:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 16.37
		},
		{
			"date": 1574305200,
			"dateTextValue": "2019-11-21 03:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 15.86
		},
		{
			"date": 1574316000,
			"dateTextValue": "2019-11-21 06:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 15.87
		},
		{
			"date": 1574326800,
			"dateTextValue": "2019-11-21 09:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 18.17
		},
		{
			"date": 1574337600,
			"dateTextValue": "2019-11-21 12:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 19.86
		},
		{
			"date": 1574348400,
			"dateTextValue": "2019-11-21 15:00:00",
			"weatherIconType": "Clear",
			"weatherDegreeValue": 17.02
		},
		{
			"date": 1574359200,
			"dateTextValue": "2019-11-21 18:00:00",
			"weatherIconType": "Clear",
			"weatherDegreeValue": 15.67
		},
		{
			"date": 1574370000,
			"dateTextValue": "2019-11-21 21:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 14.78
		},
		{
			"date": 1574380800,
			"dateTextValue": "2019-11-22 00:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 14.36
		},
		{
			"date": 1574391600,
			"dateTextValue": "2019-11-22 03:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 14.2
		},
		{
			"date": 1574402400,
			"dateTextValue": "2019-11-22 06:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 14.31
		},
		{
			"date": 1574413200,
			"dateTextValue": "2019-11-22 09:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 15.29
		},
		{
			"date": 1574424000,
			"dateTextValue": "2019-11-22 12:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 15.2
		},
		{
			"date": 1574434800,
			"dateTextValue": "2019-11-22 15:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 14.35
		},
		{
			"date": 1574445600,
			"dateTextValue": "2019-11-22 18:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 14.12
		},
		{
			"date": 1574456400,
			"dateTextValue": "2019-11-22 21:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 13.91
		},
		{
			"date": 1574467200,
			"dateTextValue": "2019-11-23 00:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 13.87
		},
		{
			"date": 1574478000,
			"dateTextValue": "2019-11-23 03:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 13.69
		},
		{
			"date": 1574488800,
			"dateTextValue": "2019-11-23 06:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 13.65
		},
		{
			"date": 1574499600,
			"dateTextValue": "2019-11-23 09:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 15.81
		},
		{
			"date": 1574510400,
			"dateTextValue": "2019-11-23 12:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 16.52
		},
		{
			"date": 1574521200,
			"dateTextValue": "2019-11-23 15:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 15.23
		},
		{
			"date": 1574532000,
			"dateTextValue": "2019-11-23 18:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 14.65
		},
		{
			"date": 1574542800,
			"dateTextValue": "2019-11-23 21:00:00",
			"weatherIconType": "Clouds",
			"weatherDegreeValue": 14.3
		}
	]

describe('week',()=>{
    describe('weather',()=>{
        describe('panel',()=>{
            it('has 5 dateWeatherPanel components',()=>{
                const rendered = render(<WeekWeatherPanel days={days}/>)
                const getAllByTestId = rendered.getAllByTestId
                expect(getAllByTestId('dateWeatherPanelId')).toHaveLength(5)
            })
        })
    })
})

