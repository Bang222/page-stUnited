import { bannerItems } from '../../../constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import './Banner.scss';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

function Banner() {
    const handleOnChangeSlider = () => {
        var animationLoadingBannerElements = document.getElementsByClassName('main-banner__loading');
        for (let i = 0; i < animationLoadingBannerElements.length; i++) {
            animationLoadingBannerElements[i].classList.remove('main-banner__loading-animation');
            void animationLoadingBannerElements[i].offsetWidth;
            animationLoadingBannerElements[i].classList.add('main-banner__loading-animation');
        }
        var animationContentFadeInElements = document.getElementsByClassName('main-banner__item-content-box');
        for (let i = 0; i < animationContentFadeInElements.length; i++) {
            animationContentFadeInElements[i].classList.remove('main-banner__item-content-box--active');
            void animationContentFadeInElements[i].offsetWidth;
            animationContentFadeInElements[i].classList.add('main-banner__item-content-box--active');
        }
    };

    return (
        <div className="main-banner-swiper-area">
            <Swiper
                speed={2000}
                spaceBetween={30}
                onSlideChange={handleOnChangeSlider}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                effect={'fade'}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                navigation={true}
                loop={true}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index) {
                        return (
                            '<span class="swiper-pagination-bullet"><span class="render-bullet-inside"></span><span class="tp-bullet"><span class="tp-bullet-hover-area"></span> <img class="tp-bullet-image" src=' +
                            bannerItems[index].img +
                            ' alt="banner2" /> <span class="tp-bullet-title">Slide</span></span></span>'
                        );
                    },
                }}
                className="mySwiper"
            >
                {bannerItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div>
                            <img className="main-banner__img" src={item.img} alt="banner1" />
                        </div>
                        <div className="main-banner__layer"></div>

                        <div className="main-banner__item-content-box main-banner__item-content-box--active">
                            <p className="main-banner__item-content">{item.content}</p>
                        </div>

                        <span className="main-banner__loading main-banner__loading-animation"></span>
                    </SwiperSlide>
                ))}

                <div className="swiper-pagination"></div>
            </Swiper>
        </div>
    );
}

export default Banner;
