// @ts-check
// @ts-ignore
import React from 'react'
import CityImage from '../../components/city/image/CityImage'
import WeatherInformationPanel from '../../components/weather/information/panel/WeatherInformationPanel'
import WeekWeatherPanel from '../../components/week/weather/panel/WeekWeatherPanel'
import styled from 'styled-components'
import { flexbox, width, maxHeight, minWidth } from 'styled-system'

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

            <HomePageLeftPanelWrapper  width={[1,1/2]} minWidth={[ 350, 180 ]}>
                <CityImage src={'static/media/melbourne'}/>
                <WeatherInformationWrapper width={[1,1/2]}>
                    <WeatherInformationPanel/>
                </WeatherInformationWrapper>
            </HomePageLeftPanelWrapper>
            
            <WeekWeatherPanelWrapper width={[1,1/2]} minWidth={[ 350, 180 ]}>
                <WeekWeatherPanel data={props.weekWeatherPanelData}/>
            </WeekWeatherPanelWrapper>

        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.div`
    display: flex;
    ${flexbox};
    ${maxHeight};
    ${minWidth};
`

const HomePageLeftPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${flexbox};
    ${width};
    ${maxHeight};
    ${minWidth};
`

const WeekWeatherPanelWrapper = styled.div`
    ${width};
    ${maxHeight};
    ${minWidth};
`

const WeatherInformationWrapper = styled.div`
    position: absolute;
    bottom: 0;
    padding-bottom: 20px;
    ${width};
`

export default HomePage;