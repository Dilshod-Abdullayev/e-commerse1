import React from 'react'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import { Image } from 'antd'
import '../styles/style.css'
export const ImgTop = () => {
    return (
        <div className='imgtop'>
            <Image style={{width:'400px'}} src={img1} />
            <Image style={{width:'400px'}} src={img2} />
        </div>
    )
}
