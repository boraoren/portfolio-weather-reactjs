// @ts-check
// @ts-ignore
import React from 'react'
import WeatherIcon from '../../../weather/icon/WeatherIcon'
import WeatherDegree from '../../../weather/degree/WeatherDegree'
import DateText from '../../text/DateText'
import styled from 'styled-components'
import { background, width, flexbox, display} from 'styled-system'

/**
* @typedef {Object} Props
* @property {String} weatherIconType - weather icon type, example: wi wi-day-sunny
* @property {String} weatherDegreeValue - weather degree value, example: 26°
* @property {String} dateTextValue - date text value, example: Wednesday
* @property {String} backgroundColor - date weather panel background color
 */

/**
* Date Weather Panel (includes: Weather Icon, Weather Degree, Date Text)
* @module DateWeatherPanel
* @param {Props} props
 */
const DateWeatherPanel = (props) => {
    return(
        // @ts-ignore
        <DateWeatherPanelWrapper data-testid={'dateWeatherPanel'}
                                    background={props.backgroundColor}
                                    display={'flex'}
                                    flexDirection={'row'}
                                    width={[1, 1/2]}>

            <WeatherIcon type={props.weatherIconType}
            color={'white'}
            size={[ 50,60 ]}/>

            <WeatherDegree value={props.weatherDegreeValue}
            color={'white'}
            position={'relative'}
            marginLeft={-20}
            size={[ 30,35 ]}/>

            <DateText value={props.dateTextValue}
            color={'white'}
            size={[ 38,55 ]}/>

        </DateWeatherPanelWrapper>
    )
}

const DateWeatherPanelWrapper = styled.div`
  ${display};
  ${background};
  ${width};
  ${flexbox};
`

export default DateWeatherPanel