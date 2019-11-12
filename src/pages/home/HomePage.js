// @ts-check
// @ts-ignore
import React from 'react'
import CityImage from '../../components/city/image/CityImage'
import WeatherInformationPanel from '../../components/weather/information/panel/WeatherInformationPanel'
import WeekWeatherPanel from '../../components/week/weather/panel/WeekWeatherPanel'
import styled from 'styled-components'
import { flexbox, width, maxHeight, minWidth,flexWrap,height } from 'styled-system'

/**
* @typedef {Object} Props
* @property {Object[]} weekWeatherPanelData
 */

/**
* @param {Props} props
 */
const HomePage = (props) => {
    return(
        <HomePageWrapper data-testid={'homePageId'} flexWrap='wrap'>

            <HomePageLeftPanelWrapper  width={[1,1/2]}>
                
                <CityImage src={'static/media/melbourne'}/>
                
                
                <WeatherInformationWrapper width={[1,1/2]}>
                    <WeatherInformationPanel/>
                </WeatherInformationWrapper>
            </HomePageLeftPanelWrapper>
            
            <WeekWeatherPanelWrapper width={[1,1/2]}>
                <WeekWeatherPanel data={props.weekWeatherPanelData}/>
            </WeekWeatherPanelWrapper>

        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.div`
    display: flex;
    ${flexWrap};
`

const HomePageLeftPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    ${width};
`

const WeekWeatherPanelWrapper = styled.div`
    ${width};
    ${maxHeight};
    ${minWidth};
`

const WeatherInformationWrapper = styled.div`
    position: absolute;
    ${width};
`

export default HomePage;