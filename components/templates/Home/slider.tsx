import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import styles from '@/styles/Slider.module.css'
// import required modules
import { Navigation } from 'swiper/modules';


function Carousel() {
    return (

        <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
            <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: 'url("/img/carousel-1.jpg")' }}>

                <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
                    <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                    <h1 className="display-1 text-white m-0">COFFEE</h1>
                    <h2 className="text-white m-0">* SINCE 1950 *</h2>
                </div>

            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: 'url("/img/carousel-2.jpg")' }}>

                <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
                    <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                    <h1 className="display-1 text-white m-0">COFFEE</h1>
                    <h2 className="text-white m-0">* SINCE 1977 *</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: 'url("/img/carousel-1.jpg")' }}>
                <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
                    <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                    <h1 className="display-1 text-white m-0">COFFEE</h1>
                    <h2 className="text-white m-0">* SINCE 1960 *</h2>
                </div>

            </SwiperSlide>
            {/* <div className="container-fluid p-0 mb-5">
                <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
                    <div className="carousel-inner">
                      
                      
                    </div>
                    <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div> */}
        </Swiper>


    )
}

export default Carousel