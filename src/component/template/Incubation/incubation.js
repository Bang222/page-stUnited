import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './incubation.scss';
import Stincubation from './stincubation/stincubation';
import Header from '../../molecules/HeaderMedia/HeaderBanner';
import { getAllDataIncubation, getAllDataIncubationText } from '../../../service/Apiservice';

const Incubation = () => {
    const [list2, setList2] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchListIncubation();
    }, []);
    const fetchListIncubation = async () => {
        let res = await getAllDataIncubation();
        setList2(res);
    };

    useEffect(() => {
        fetchListIncubationText();
    }, []);
    const fetchListIncubationText = async () => {
        let res = await getAllDataIncubationText();
        setList(res);
    };
    const backgroundImageFe07={
        backGroundFe07: 'https://drive.google.com/uc?export=view&id=1I3GbJcwLbDj0NJlnO0FgGomTEBk8erE1',
    }
    const bannerCaption= {
        title: 'ST INCUBATION -ST United',
        h1: 'ST INCUBATION',
        h2: "We're not a mentor, expert or coach whatsoever. We are a founder and fight together",
    }
    return (
        <div className="incubation--container">
            <Row className="banner--container" style={{ margin: '0' }}>
                {' '}
                <Header
                    backgroundImageFe07={backgroundImageFe07}
                    bannerCaption={bannerCaption}
                />
            </Row>
            <Container className="st--incubation--container">
                <Row className="st--incubation--cover--container">
                    <Col className="st--incubation">
                        <Row className="incubation--content">
                            <Col className="incubation--title" md={12} sm={12} xs={12}>
                                <h1 className="incubation--title--h1">ST INCUBATION</h1>
                            </Col>
                            <Col className="incubation--description" md={12} sm={12} xs={12}>
                                <Row className="incubation--cover--description">
                                    <Col className="incubation--des">
                                        <p className="p1">
                                            <span className="s1">
                                                After long time working in software development outsourcing industry,
                                                founders of
                                                <strong className="s1--strong"> ST United </strong>
                                                still keep intense aspiration how to apply the high technologies to
                                                solve the society problem in Vietnam.
                                            </span>
                                        </p>
                                        <p className="p1">
                                            <span className="s1">
                                                Beginning as a provider of co-working spaces with
                                                <strong className="s1--strong"> IoT Space </strong>
                                                and Nomad Space in Danang,
                                                <strong className="s1--strong"> ST United </strong>
                                                would like to support the startup and ICT community. Moreover,
                                                <strong className="s1--strong"> ST United </strong>
                                                provides incubator programs for budding entrepreneurs. The program
                                                focuses on providing resources and support for startups in terms of
                                                business modeling, market penetration and even product development.
                                            </span>
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="service--container">
                                    {list &&
                                        list.map((item, index) => {
                                            return (
                                                <Col className="service--block" xs={12} md={4}>
                                                    <Row className="service--icon">
                                                        <img src={item.img} alt="" />
                                                    </Row>
                                                    <Row className="service--content">
                                                        <h3 className="service--title"> {item.title}</h3>
                                                        <p className="service--desc"> {item.description}</p>
                                                    </Row>
                                                </Col>
                                            );
                                        })}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="ourincubation--background">
                <Container className="ourincubation--container">
                    <Row className="ourincubation--cover">
                        <Col className="ourincubation" sm={12}>
                            <Row className="ourincubation--content">
                                <h2 className="ourincubation--title"> Our incubating projects</h2>
                                <h3 className="ourincubation--covertitle">We are supporting for these cool teams</h3>
                            </Row>
                            <Row className="fe02-wpb__col-container" style={{ padding: '0', margin: '0' }}>
                                <Stincubation listStIncubation={list2} SetListStIncubation={setList2} />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};
export default Incubation;
