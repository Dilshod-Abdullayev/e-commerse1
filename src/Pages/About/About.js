import React from 'react'
import aboutimg1 from '../../images/about1.png'
import aboutimg2 from '../../images/about2.jpg'
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import '../../styles/style.css'
import { StyledTitle, Textp, StyledTitlemini } from '../../styles/TextStyles/TextItem'
import { StyledBtntitle, StyledButtonGrey } from '../../styles/TextStyles/ButtonStyled'
export default function About() {
  return (
    <div className='about'>
      <div className='about__top'></div>
      <div className='about__wrapper'>
        <div className='about__wrapper-box'>
          <img src={aboutimg1} />
          <div>
            <StyledTitlemini>About Us</StyledTitlemini>
            <StyledTitle style={{ fontSize: '30px' }}>We do Creative
              Things for Success</StyledTitle>
            <Textp>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              <br />
              <br />
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Textp>
            <StyledBtntitle>StyledBtntitle</StyledBtntitle>
          </div>
        </div>
        <div className='about__wrapper-box'>
          <div>
            <StyledTitlemini>Why Choose us?</StyledTitlemini>
            <StyledTitle style={{ fontSize: '30px' }}>We do not buy from the
              open market & traders.</StyledTitle>
            <Textp>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</Textp>
            <StyledButtonGrey>100% Natural Product</StyledButtonGrey>
            <Textp>Simply dummy text of the printing and typesetting industry Lorem Ipsum</Textp>
          </div>
          <img src={aboutimg2} />
        </div>
      </div>
      <div className='about__icons'>
        <div className='about__icon-box'>
          <img src={icon1} />
          <h1>Return Policy</h1>
          <p>Simply dummy text of the printintypesetting industry.</p>
        </div>
        <div className='about__icon-box'>
          <img src={icon2} />
          <h1>Return Policy</h1>
          <p>Simply dummy text of the printintypesetting industry.</p>
        </div>
        <div className='about__icon-box'>
          <img src={icon3} />
          <h1>Support 24/7</h1>
          <p>Simply dummy text of the printintypesetting industry.</p>
        </div>
        <div className='about__icon-box'>
          <img src={icon4} />
          <h1>Secured Payment</h1>
          <p>Simply dummy text of the printintypesetting industry.</p>
        </div>
      </div>
    </div>
  )
}
