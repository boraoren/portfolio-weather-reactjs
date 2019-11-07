// @ts-check
// @ts-ignore
import React from 'react'
import CityName from '../../../city/name/CityName'
import WeatherIcon from '../../../weather/icon/WeatherIcon'
import WeatherDegree from '../../../weather/degree/WeatherDegree'
import DateText from '../../../date/text/DateText'

const WeatherInformationPanel = () =>{
    return(
    <div data-testid={'weatherInformationPanelId'}>
        <CityName text={'Melbourne'}/>
        <WeatherIcon type={'wi wi-day-sunny'}/>
        <WeatherDegree value={'26°'}/>
        <DateText value={'Wednesday'}/>
    </div>
    )
}

export default WeatherInformationPanel