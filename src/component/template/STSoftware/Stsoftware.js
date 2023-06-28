import './Stsoftware.scss';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../../molecules/HeaderMedia/HeaderBanner';
import { getAllDataFE02, getAllDataFE07Div1, getAllDataFE07Div2 } from '../../../service/Apiservice';
import TypicalChild from '../../molecules/TypicalChild/TypicalChild';

const Stsoftware = (props) => {
    const [listContextFe07D1, setListContextFe07D1] = useState([]);
    const [listContextFe07D2, setListContextFe07D2] = useState([]);
    const [listFe07, setListFe07] = useState([]);
    const backgroundImageFe07 = {
        backGroundFe07: 'https://drive.google.com/uc?export=view&id=17pHRhgZBj5Uq3PV723tNz0eCuglZcorD',
    };
    const bannerCaption = {
        title: 'ST SOFTWARE – ST United',
        h1: 'ST SOFTWARE',
        h2: 'WE OFFER A WEALTH OF SERVICES TO ADDRESS YOUR TECHNOLOGY NEEDS.',
    };

    useEffect(() => {
        fetchListFE07Div1();
    }, []);
    const fetchListFE07Div1 = async () => {
        let res = await getAllDataFE07Div1();
        setListContextFe07D1(res);
    };
    useEffect(() => {
        fetchListFE02();
    }, []);
    const fetchListFE02 = async () => {
        let res = await getAllDataFE02();
        setListFe07(res);
    };
    useEffect(() => {
        fetchListFE07Div2();
    }, []);
    const fetchListFE07Div2 = async () => {
        let res = await getAllDataFE07Div2();
        setListContextFe07D2(res);
    };
    return (
        <body>
            <Row className="fe07-container" style={{ margin: '0' }}>
                <Header backgroundImageFe07={backgroundImageFe07} bannerCaption={bannerCaption} />
                <Row className="fe07-container__wpb">
                    <Col className="fe07-container__wpb__inner">
                        <Row className="fe07-blank"></Row>
                        <Col className="fe07-context__wpb">
                            <Row className="fe07-context__wpb--block ">
                                {listContextFe07D1 &&
                                    listContextFe07D1.map((item, index) => {
                                        return (
                                            <Col
                                                className="fe07-context__wpb--block--col"
                                                md={4}
                                                xs={12}
                                                key={item._id}
                                            >
                                                <Row className="fe07-context__wpb--block--item">
                                                    <Col className="fe07-context__wpb--service">
                                                        <Row className="fe07-context__wpb--block--icon">
                                                            <i className="fa-solid fa-flag" />
                                                        </Row>
                                                        <Col className="fe07-context__wpb--block--content">
                                                            <h3>{item.title}</h3>
                                                            <p>{item.content}</p>
                                                            <a href="#">{item.link}</a>
                                                        </Col>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        );
                                    })}
                            </Row>
                        </Col>
                        <Row className="fe07-context__wpb">
                            <Row className="fe07-context__wpb--block ">
                                {listContextFe07D2 &&
                                    listContextFe07D2.map((item, index) => {
                                        return (
                                            <Col
                                                className="fe07-context__wpb--block--col"
                                                md={4}
                                                xs={12}
                                                key={item._id}
                                            >
                                                <Row className="fe07-context__wpb--block--item">
                                                    <Col className="fe07-context__wpb--service">
                                                        <Row className="fe07-context__wpb--block--icon">
                                                            <i className={item.icon} />
                                                        </Row>
                                                        <Col className="fe07-context__wpb--block--content">
                                                            <h3>{item.title}</h3>
                                                            <p>{item.content}</p>
                                                            <a href="#">{item.link}</a>
                                                        </Col>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        );
                                    })}
                            </Row>
                        </Row>
                        {/*/////////////////////////////*/}
                        <Col className="fe07-wpb__wrapper">
                            <Col className="fe07-textcenter">
                                <h2>Typical successful stories</h2>
                                <h3>
                                    Meeting deadlines and ensuring high standards are our style of life. 82% of our
                                    customers have chosen our team for their 2nd project.
                                </h3>
                            </Col>
                            <Col className="fe07-emptyspace"></Col>
                            <Row
                                className="fe02-wpb__col-container"
                                style={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <TypicalChild
                                    key={props.key}
                                    listContainerFe02={listFe07}
                                    SetListContainerFe02={setListFe07}
                                />
                            </Row>
                        </Col>
                        <Row className="fe07-emptyspace" style={{ height: '120px' }}></Row>
                    </Col>
                </Row>
            </Row>
        </body>
    );
};
export default Stsoftware;
