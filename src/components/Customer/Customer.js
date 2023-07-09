import React from 'react'
import CustomerSlider from './CustomerSlider'
import CustomerStatistic from './CustomerStatistic'
import { StyledTitlemini, StyledTitle } from '../../styles/TextStyles/TextItem'
import '../../styles/style.css'
export default function Customer() {
    return (
        <div className='customer__section'>
            <StyledTitlemini>Testimonial</StyledTitlemini>
            <StyledTitle>What Our Customer Saying?</StyledTitle>
            <CustomerSlider />
            <CustomerStatistic />
        </div>
    )
}
