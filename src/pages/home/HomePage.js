// @ts-check
// @ts-ignore
import React from 'react'
import CityImage from '../../components/city/image/CityImage'
import WeatherInformationPanel from '../../components/weather/information/panel/WeatherInformationPanel'
import WeekWeatherPanel from '../../components/week/weather/panel/WeekWeatherPanel'

/**
* @typedef {Object} Props
* @property {Object[]} weekWeatherPanelData
 */

/**
* @param {Props} props
 */
const HomePage = (props) => {
    return(
        <div data-testid={'homePageId'}>
            <CityImage src={'static/media/melbourne'}/>
            <WeatherInformationPanel/>
            <WeekWeatherPanel data={props.weekWeatherPanelData}/>
        </div>
    )
}

export default HomePage;