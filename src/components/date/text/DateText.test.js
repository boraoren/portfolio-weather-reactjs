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

        const renderedDateText = () => {
            const rendered = render(<DateText value={'Monday'} color={'white'}/>)
            const getByTestId = rendered.getByTestId
            return {getByTestId}
        }

        it('value is Monday',()=>{
            const {getByTestId} = renderedDateText()
            expect(getByTestId('dateTextId'))
            .toHaveTextContent(/^Monday$/)
        })

        it('size is 62', ()=> {
            const {getByTestId} = renderedDateText()
            expect(getByTestId('dateTextId'))
            .toHaveStyle(`
                font-size: 62px;
            `)
        })

        it('color is white',()=>{
            const {getByTestId} = renderedDateText()
            expect(getByTestId('dateTextId'))
            .toHaveStyle(`
                color: white;
            `)
        })
    })
})

export default DateText