import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './joinus.scss';
import { getAllDataJoinUs } from '../../../service/Apiservice';
import Header from '../../molecules/HeaderMedia/HeaderBanner';

const Joinus = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchListJoinUs();
    }, []);
    const fetchListJoinUs = async () => {
        const res = await getAllDataJoinUs();
        setList(res);
    };

    const backgroundImageFe07 = {
        backGroundFe07: 'https://drive.google.com/uc?export=view&id=1CQ0SnYjUMPNycUUw0dFY90lxQf3S_4s6',
    };

    const bannerCaption = {
        title:"Join Us -ST United",
        h1: 'JOIN ST TEAM NOW',
        h2: '...to get the shit done',
    };
    return (
        <>
            <Header backgroundImageFe07={backgroundImageFe07} bannerCaption={bannerCaption} />
            <div className="fe11-container">
                <div className="fe11-cover--container">
                    <div className="fe11-children--container">
                        <div className="fe11-children--cover">
                            <div className="fe11-children--cover__col ">
                                <div className="fe11-vc_column-innder">
                                    <div className="fe11-wpb-wrapper">
                                        <div className="fe11-title">
                                            <h2></h2>
                                            <h3 className="fe11-sub-heading">
                                                Building a startup is hard, so we build a family to make it more
                                                enjoyable.
                                            </h3>
                                        </div>
                                        <Row className="fe11-service--container">
                                            <Row className="fe11-no-margin">
                                                {list &&
                                                    list.map((item, index) => {
                                                        return (
                                                            <Col
                                                                className="fe11-service--block"
                                                                xl={3}
                                                                md={6}
                                                                xs={12}
                                                                key={item._id}
                                                            >
                                                                <Row className="fe11-service--icon">
                                                                    <img src={item.img} alt="" />
                                                                </Row>
                                                                <Row className="fe11-service--content">
                                                                    <h3 className="fe11-service--title">
                                                                        {' '}
                                                                        {item.title}
                                                                    </h3>
                                                                    <p className="fe11-service--desc">
                                                                        {' '}
                                                                        {item.description}
                                                                    </p>
                                                                    <a className="fe11-service--link" href=".">
                                                                        {' '}
                                                                        {item.link}
                                                                    </a>
                                                                </Row>
                                                            </Col>
                                                        );
                                                    })}
                                            </Row>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Joinus;
