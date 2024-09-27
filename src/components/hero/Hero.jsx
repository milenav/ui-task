import {Swiper, SwiperSlide} from 'swiper/react';
import './Hero.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation} from 'swiper/modules';
import sliderData from "../../slider.json";
import youTube from "../../assets/images/you-tube.png";
import fb from "../../assets/images/fb.png";

const Hero = () => {
    return (
        <div className="container-fluid">
            <h1 className="hero-title">
                <span className="pre"><span className="first-word">Your</span> Best</span>Gaming Experience
            </h1>
            <Swiper
                pagination={{clickable: true}}
                modules={[Pagination, Navigation]}
                navigation={true}
                className="mySwiper">
                {sliderData.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image.src} alt={image.alt}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="social">
                <img src={youTube} alt="YouTube"/>
                <span className="divider"></span>
                <img src={fb} alt="Facebook"/>
            </div>
        </div>
    );
}

export default Hero;