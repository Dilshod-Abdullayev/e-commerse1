import React from 'react';
import img from '../../images/user1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const CustomerSlider = () => {
    return (

        <div className='customslider'>
            <Swiper 
    
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><div className='custom__box'>
                    <img src={img} />
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <h1>Sara Taylor</h1>
                    <h2>Consumer</h2>
                </div></SwiperSlide>
                <SwiperSlide><div className='custom__box'>
                    <img src={img} />
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <h1>Sara Taylor</h1>
                    <h2>Consumer</h2>
                </div></SwiperSlide>
            </Swiper>
        </div>

    );
}
export default CustomerSlider