// @ts-check
// @ts-ignore
import React from 'react'
import DateWeatherPanel from '../../../date/weather/panel/DateWeatherPanel'

/**
* @typedef {Object[]} Data
* @property {string} dateTextValue - 'Friday',
* @property {string} weatherDegreeValue - '15°',
* @property {string} weatherIconType - 'wi wi-day-sunny',
*
* @typedef {Object} Props
* @property {Data} data
 */

/**
* Weekly date information
* @module WeekWeatherPanel
* @param {Props} props
 */
const WeekWeatherPanel = (props) =>{

    return(
        <>
        <div data-testid={'weekWeatherPanelId'}>
            {props.data.map((day)=> <DateWeatherPanel
                key={day.dateTextValue}
                backgroundColor={'black'}
                weatherIconType={day.weatherIconType}
                weatherDegreeValue={day.weatherDegreeValue}
                dateTextValue={day.dateTextValue}/>
            )}
        </div>
        </>
    )
}

export default WeekWeatherPanel;