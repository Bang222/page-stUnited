import { useEffect, useRef } from 'react';
import './partner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { getAllDataPartner } from '../../../service/Apiservice';

const Partner = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const [list, setList] = useState([]);
    useEffect(() => {
        fetchListPartner();
    }, []);
    const fetchListPartner = async () => {
        let res = await getAllDataPartner();
        setList(res);
    };

    return (
        <section className="fe04-container">
            <div className="fe04-container_partner">
                <Col className="fe04-container_partner_title">
                    <h2>Trusted by the Clients & Partners</h2>
                    <Row className="fe04-swiper_navigation">
                        <Col ref={navigationPrevRef} className="swiper_button swiper_prev">
                            Prev
                        </Col>
                        <Col ref={navigationNextRef} className="swiper_button swiper_next">
                            Next
                        </Col>
                    </Row>
                </Col>
                <div className="fe04-container_partner swiper">
                    <Swiper
                        speed={500}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3500,
                            stopOnLastSlide: true,
                        }}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            480: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            },
                            720: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                            1024: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                            1400: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                        }}
                        className="mySwiper"
                    >
                        {list.map((item) => {
                            return (
                                <SwiperSlide key={item._id}>
                                    <div className="partner-item">
                                        <a href={item.link}>
                                            {' '}
                                            <img src={item.image} alt="" />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
export default Partner;
