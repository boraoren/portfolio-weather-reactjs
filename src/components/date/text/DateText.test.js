// @ts-check
// @ts-ignore
import React from 'react'
import { render } from '@testing-library/react'
import DateText from './DateText'
import '@testing-library/jest-dom/extend-expect'
import {toHaveTextContent,toHaveStyle} from '@testing-library/jest-dom'
expect.extend({toHaveTextContent,toHaveStyle})

describe('date', ()=>{
    describe('text', ()=>{
        it('value is Monday',()=>{
            const rendered = render(<DateText value={'Monday'}/>)
            const getByTestId = rendered.getByTestId
            expect(getByTestId('dateTextId'))
            .toHaveTextContent(/^Monday$/)
        })
        it('size is 62', ()=> {
            const rendered = render(<DateText value={'Monday'}/>)
            const getByTestId = rendered.getByTestId
            expect(getByTestId('dateTextId'))
            .toHaveStyle(`
                font-size: 62px;
            `)
        })
    })
})

export default DateText