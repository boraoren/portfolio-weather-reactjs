//ts-check
//ts-ignore
import React from 'react'
import {render} from '@testing-library/react';
import CityName from './CityName'
// gives us the toHaveTextContent/toHaveAttribute matchers
import '@testing-library/jest-dom/extend-expect'
import {toHaveTextContent} from '@testing-library/jest-dom'
expect.extend({toHaveTextContent})

describe('city', () => {
    describe('name', () => {
        it('text is Melbourne', () => {
            const rendered = render(<CityName text={'Melbourne'}/>)
            let getByTestId = rendered.getByTestId
            expect(getByTestId('cityNameId')).toHaveTextContent(/^Melbourne$/)
        })
    })
})

