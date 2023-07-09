import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { category } from '../data/data';
import '../styles/style.css'
import { StyledBtntitle } from '../styles/TextStyles/ButtonStyled';
import { StyledPath } from '../styles/TextStyles/TextItem';
export default function Categories() {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className='category__boxs'>
                    {
                        category.map((item) => (
                            <SwiperSlide perSlide key={item.id}>
                                <div className='category__box'>
                                    <StyledBtntitle>{item.text}</StyledBtntitle>
                                    <img src={item.img} />
                                    <StyledPath>{item.id}</StyledPath>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </div>

            </Swiper>
        </div>
    );
}
