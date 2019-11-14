// @ts-check
// @ts-ignore
import React from 'react'
import WeatherIcon from '../../../weather/icon/WeatherIcon'
import WeatherDegree from '../../../weather/degree/WeatherDegree'
import DateText from '../../text/DateText'
import styled from 'styled-components'
import { color, width, flexbox, display, height} from 'styled-system'

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
        <DateWeatherPanelWrapper data-testid={'dateWeatherPanelId'}
                                    backgroundColor={props.backgroundColor}
                                    display={'flex'}
                                    height={["14.2vh"]}
                                    flexDirection={'row'}>

            <WeatherIcon type={props.weatherIconType}
            color={'white'}
            size={[ 50,40 ]}/>

            <WeatherDegree value={props.weatherDegreeValue}
            color={'white'}
            position={'relative'}
            marginLeft={-20}
            size={[ 30,30 ]}/>

            <DateText value={props.dateTextValue}
            color={'white'}
            size={[ 38,45 ]}/>

        </DateWeatherPanelWrapper>
    )
}

const DateWeatherPanelWrapper = styled.div`
  ${display};
  ${color};
  ${width};
  ${flexbox};
  ${height}
`

export default DateWeatherPanel