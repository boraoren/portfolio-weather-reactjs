// @ts-check
// @ts-ignore
import React from 'react'
import CityName from '../../../city/name/CityName'
import WeatherIcon from '../../../weather/icon/WeatherIcon'
import WeatherDegree from '../../../weather/degree/WeatherDegree'
import DateText from '../../../date/text/DateText'
import styled from 'styled-components'
import { grid, width } from 'styled-system'

const WeatherInformationPanel = () =>{
    return(
    // @ts-ignore
    <WeatherInformationPanelWrapper
        data-testid={'weatherInformationPanelId'}
        gridTemplateColumns='1fr 1fr 6fr'
        gridTemplateRows='1fr 1fr'>
        <ComponentWrapper gridColumn={'1/4'}>
            <CityName text={'Melbourne'}
                        size={[40,60,65]}
                        color={'white'}/>
        </ComponentWrapper>

        <ComponentWrapper>
            <WeatherIcon type={'wi wi-day-sunny'}
                        size={[40,50,55]}
                        padding={[0]}
                        color={'white'}/>
        </ComponentWrapper>

        <ComponentWrapper gridColumn={'2/3'}>
            <WeatherDegree value={'26°'}
                        size={[40,50,55]}
                        color={'white'}/>
        </ComponentWrapper>

        <ComponentWrapper gridColumn={'3/4'}>
            <DateText value={'Wednesday'}
                        size={[40, 50,55]}
                        color={'white'}/>
        </ComponentWrapper>

    </WeatherInformationPanelWrapper>
    )
}

const WeatherInformationPanelWrapper = styled.div`
    display: grid
    ${width};
    background: rgba(0, 0, 0, 0.4);
    justify-content: center;
`

/**
* @module Component Wrapper
* @type {Object} grid
* @param grid
 */
const ComponentWrapper = styled.div`
    ${grid};
`

export default WeatherInformationPanel