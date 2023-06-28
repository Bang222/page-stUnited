import './StDigital.scss';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import HeaderBanner from '../../molecules/HeaderMedia/HeaderBanner';
import { getAllDataStDigitalIcon, getAllDataStDigitalImage } from '../../../service/Apiservice';

const StDigital = () => {
    const [backgroundImageFe07, SetBackgroundImageFe07] = useState({
        id: '1',
        backGroundFe07: 'https://drive.google.com/uc?export=view&id=1txXzanwmlTUCVlBVRsBiUAQqmvWWT6Z2',
    });
    const [bannerCaption, SetBannerCaption] = useState({
        title: 'ST Digital -ST United',
        h1: 'ST DIGITAL',
        h2: 'Offshore Digital Marketing Services',
    });
    const [list, setList] = useState([]);
    const [listuser, setlistuser] = useState([]);

    useEffect(() => {
        fetchListstDigitalIcon();
    }, []);
    const fetchListstDigitalIcon = async () => {
        let res = await getAllDataStDigitalIcon();
        setList(res);
    };

    useEffect(() => {
        fetchListstDigitalImage();
    }, []);
    const fetchListstDigitalImage = async () => {
        let res = await getAllDataStDigitalImage();
        setlistuser(res);
    };
    return (
        <Row className="Stdigital-container" style={{ margin: '0' }}>
            <HeaderBanner
                backgroundImageFe07={backgroundImageFe07}
                SetBackgroundImageFe07={SetBackgroundImageFe07}
                bannerCaption={bannerCaption}
                SetBannerCaption={SetBannerCaption}
            />
            <Col className="Stdigital-container-block">
                <Row className="Stdigital-title-top">
                    <Col className="Stdigital-title-row">
                        <Col className="Stdigital-title">
                            <h1 className="Stdigital-title-head"> ST Digital</h1>
                        </Col>
                    </Col>
                </Row>
                <Row className="Stdigital-section-content">
                    <Col className="Stdigital-section">
                        <Col className="Stdigital-page-main">
                            <Col className="Stdigital-content-text">
                                <p>
                                    <strong>ST Digital</strong>
                                    "offers professional offshore digital marketing services that can make your business
                                    stand out from the digital crowd. Our digital marketing services range from search
                                    engine optimisation (SEO), social media services, email marketing services, content
                                    outsourcing, and graphic design services, which aids in creating organic engagement
                                    and direct traffic towards your website and its content. Through partnering with ST,
                                    we can help you create a good lasting impression online and give you an edge over
                                    your top competitors!"
                                </p>
                            </Col>
                            <Col className="Stdigital-module-three-columns">
                                <Row className="Stdigital-module">
                                    {list &&
                                        list.map((item, index) => {
                                            return (
                                                <Row className="module-item col-md-4">
                                                    <Col className="module-block">
                                                        <Col className="block-icon">
                                                            <img
                                                                width="60"
                                                                height="60"
                                                                src={item.image}
                                                                alt=""
                                                                srcset=""
                                                            />
                                                        </Col>
                                                        <Col className="block-content">
                                                            <h1 className="h1-content">{item.title}</h1>
                                                            <p>{item.description}</p>
                                                        </Col>
                                                    </Col>
                                                </Row>
                                            );
                                        })}
                                </Row>
                                <Row className="Stdigital-module-2">
                                    <Col className="Stdigital-meet-our-team">
                                        <Row className="Stdigital-meet-our-team-title">
                                            <h1>Meet our team</h1>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="Stdigital-module-container">
                                    <Col className="Stdigital-module-block">
                                        <Row className="Stdigital-module-3 ">
                                            {listuser &&
                                                listuser.map((item, index) => {
                                                    return (
                                                        <Row className="Stdigital-list-user col-md-3">
                                                            <Col className="Stdigital-wrapper-list">
                                                                <Row className="Stdigital-wrapper-list-user ">
                                                                    <img
                                                                        width="300"
                                                                        height="300"
                                                                        alt=""
                                                                        src={item.image}
                                                                    ></img>
                                                                    <p>
                                                                        <strong> {item.Name}</strong>
                                                                        <br /> {item.Work}
                                                                    </p>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    );
                                                })}
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
export default StDigital;
