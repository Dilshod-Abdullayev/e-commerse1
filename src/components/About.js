import React from 'react'
import img from '../images/about.png'
import { StyledTitle, Textp } from '../styles/TextStyles/TextItem'
import img1 from '../images/vegan1.png'
import img2 from '../images/vegan2.png'
import { StyledYellow } from '../styles/TextStyles/ButtonStyled'
import '../styles/style.css'
export default function About() {
    return (
        <div className='aboutSection'>
            <img className='about__img' src={img} />
            <div className='about__text'>
                <h1 className='title'>About Us</h1>
                <StyledTitle>We Believe in Working
                    Accredited Farmers</StyledTitle>
                <Textp>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Textp>
                <div className='about__bottom'>
                    <div className='about__box'>
                        <img src={img1} />
                        <div>
                            <StyledTitle style={{ fontSize: '20px' }}>Organic Foods Only</StyledTitle>
                            <Textp>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Textp>
                        </div>
                    </div>
                    <div className='about__box'>
                        <img src={img2} />
                        <div>
                            <StyledTitle style={{ fontSize: '25px' }}>Quality Standards</StyledTitle>
                            <Textp>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Textp>
                        </div>
                    </div>
                </div>
                <StyledYellow style={{ background: '#274C5B', color: 'white' }}>Shop Now</StyledYellow>
            </div>
        </div>
    )
}
