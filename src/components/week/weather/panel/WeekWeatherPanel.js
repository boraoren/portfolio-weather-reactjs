// @ts-check
// @ts-ignore
import React from 'react'
import DateWeatherPanel from '../../../date/weather/panel/DateWeatherPanel'
import moment from 'moment'
import _ from 'underscore'

/**
* @typedef {Object[]} Days
* @property {string} dateTextValue - 'Friday',
* @property {number} weatherDegreeValue - 15,
* @property {string} weatherIconType - 'wi wi-day-sunny',
*
* @typedef {Object} Props
* @property {Days} days
 */

/**
* Weekly date information
* @module WeekWeatherPanel
* @param {Props} props
 */
const WeekWeatherPanel = (props) =>{


    const groupBy = (days) => _.groupBy(days, function(day) {
          return moment(day.dateTextValue).startOf('day').format();
    });

    const groupByDays = groupBy(props.days)
    

    return(
        <>
        <div data-testid={'weekWeatherPanelId'}>
            {Object.keys(groupByDays).map(key=>
                <DateWeatherPanel
                    weatherHours={groupByDays[key]}
                    backgroundColor={'black'}/>
            )}                
        </div>
        </>
    )
}

export default WeekWeatherPanel;