// @ts-check
// @ts-ignore
import React from 'react'
import DateWeatherPanel from '../../../date/weather/panel/DateWeatherPanel'

const WeekWeatherPanel = () =>{

    const days = ['Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday']


    return(
        <div data-testid={'weekWeatherPanelId'}>
            {days.map((day)=> <DateWeatherPanel
                key={day}
                backgroundColor={'black'}
                weatherIconType={'wi wi-day-sunny'}
                weatherDegreeValue={'26°'}
                dateTextValue={day}/>
            )}
        </div>
    )
}

export default WeekWeatherPanel