import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Hero.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://picsum.photos/800/400?random=1" alt="Random 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://picsum.photos/800/400?random=2" alt="Random 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://picsum.photos/800/400?random=3" alt="Random 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Hero;