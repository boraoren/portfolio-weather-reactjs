// @ts-check
// @ts-ignore
import React from 'react'
import WeatherIcon from '../../../weather/icon/WeatherIcon'
import WeatherDegree from '../../../weather/degree/WeatherDegree'
import DateText from '../../text/DateText'
import styled from 'styled-components'
import { color, width, flexbox, display, height} from 'styled-system'
import _ from 'underscore'

/**
* @typedef {Object} WeatherHour
* @property {String} weatherIconType - weather icon type, example: wi wi-day-sunny
* @property {String} weatherDegreeValue - weather degree value, example: 26°
* @property {String} dateTextValue - date text value, example: Wednesday

* @typedef {Object} Props
* @property {WeatherHour[]} weatherHours 
* @property {String} backgroundColor - date weather panel background color
 */

/**
* Date Weather Panel (includes: Weather Icon, Weather Degree, Date Text)
* @module DateWeatherPanel
* @param {Props} props
 */
const DateWeatherPanel = (props) => {

    const {weatherHours,backgroundColor} = props

    const averageDegreeBy = (weatherHours) => {
            const result = _.reduce(weatherHours, function(memo, v) {
                return memo + v.weatherDegreeValue;
            }, 0) / weatherHours.length
            return Math.floor(result)
    }

    const mostFrequentlyUseWord = (array) => {
        return _.chain(array).countBy('weatherIconType').pairs().max(_.last).head().value()
    }

    return(
        // @ts-ignore
        <DateWeatherPanelWrapper data-testid={'dateWeatherPanelId'}
                                    backgroundColor={props.backgroundColor}
                                    display={'flex'}
                                    height={["14.2vh"]}
                                    flexDirection={'row'}>

            <WeatherIcon type={mostFrequentlyUseWord(weatherHours)}
            color={'white'}
            size={[ 50,40 ]}/>

            <WeatherDegree value={""+averageDegreeBy(weatherHours)}
            color={'white'}
            position={'relative'}
            marginLeft={-20}
            size={[ 30,30 ]}/>

            <DateText value={weatherHours[0].dateTextValue}
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