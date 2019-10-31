// @flow
import React from 'react'

type Props = {
    src: string,
};


const CityImage = (props: Props) => {
    return(
        <img data-testid={'cityImageId'} src={props.src} alt={'City Image'}/>
    )
}

export default CityImage