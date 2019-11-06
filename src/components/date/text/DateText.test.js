// @ts-check
// @ts-ignore
import React from 'react'
import { render } from '@testing-library/react'
import DateText from './DateText'
import '@testing-library/jest-dom/extend-expect'
import {toHaveTextContent} from '@testing-library/jest-dom'
expect.extend({toHaveTextContent})

describe('date', ()=>{
    describe('text', ()=>{
        it('value is Monday',()=>{
            const rendered = render(<DateText value={'Monday'}/>)
            const getByTestId = rendered.getByTestId
            expect(getByTestId('dateTextId'))
            .toHaveTextContent(/^Monday$/)
        })
    })
})

export default DateText