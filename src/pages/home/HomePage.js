// @ts-check
// @ts-ignore
import React from 'react'
import CityImage from '../../components/city/image/CityImage'
import WeatherInformationPanel from '../../components/weather/information/panel/WeatherInformationPanel'
import WeekWeatherPanel from '../../components/week/weather/panel/WeekWeatherPanel'
import styled from 'styled-components'
import { flexbox, width, maxHeight } from 'styled-system'

/**
* @typedef {Object} Props
* @property {Object[]} weekWeatherPanelData
 */

/**
* @param {Props} props
 */
const HomePage = (props) => {
    return(
        <HomePageWrapper data-testid={'homePageId'}>

            <HomePageLeftPanelWrapper  width={1/2}>

                <CityImageWrapper  width={1/2}>
                    <CityImage src={'static/media/melbourne'}/>
                </CityImageWrapper>

                <WeatherInformationWrapper width={[1/2]}>
                    <WeatherInformationPanel/>
                </WeatherInformationWrapper>

            </HomePageLeftPanelWrapper>

            <WeekWeatherPanelWrapper width={[1/2]}>
                <WeekWeatherPanel data={props.weekWeatherPanelData}/>
            </WeekWeatherPanelWrapper>

        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    ${flexbox};
    ${maxHeight};
`

const HomePageLeftPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${flexbox};
    ${width};
    ${maxHeight};
`

const WeekWeatherPanelWrapper = styled.div`
    ${width};
    ${maxHeight};
`

const CityImageWrapper = styled.div`
    ${maxHeight};
    ${width};
`

const WeatherInformationWrapper = styled.div`
    position: absolute;
    ${width};
`

export default HomePage;