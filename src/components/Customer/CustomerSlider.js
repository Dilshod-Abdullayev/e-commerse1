import React from 'react';
import img from '../../images/user1.png'
import '../../styles/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const CustomerSlider = () => {
    return (
        <div className="customslider">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><div className='custom__box'>
                    <img src={img} />
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <h1>Sara Taylor</h1>
                    <h2>Consumer</h2>
                </div></SwiperSlide>
                <SwiperSlide style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><div className='custom__box'>
                    <img src={img} />
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <h1>Sara Taylor</h1>
                    <h2>Consumer</h2>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default CustomerSlider