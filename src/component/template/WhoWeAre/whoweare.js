import './whoweare.scss';
import { React, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import HeaderBanner from '../../molecules/HeaderMedia/HeaderBanner';
import Container from 'react-bootstrap/Container';
import { getAllDataDescription, getAllDataDescription2, getAllDataWhoWeAreUser } from '../../../service/Apiservice';
const WhoWeAre = () => {
    const [description, setDescription] = useState([]);
    const [description2, setDescription2] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchListdescription();
    }, []);
    const fetchListdescription = async () => {
        let res = await getAllDataDescription();
        setDescription(res);
    };
    useEffect(() => {
        fetchListWhoWeAreD();
    }, []);
    const fetchListWhoWeAreD = async () => {
        let res = await getAllDataDescription2();
        setDescription2(res);
    };
    useEffect(() => {
        fetchListWhoWeUser();
    }, []);
    const fetchListWhoWeUser = async () => {
        let res = await getAllDataWhoWeAreUser();
        setUsers(res);
    };

    const backgroundImageFe07 = {
        id: '1',
        backGroundFe07: 'https://drive.google.com/uc?export=view&id=199NbLzJqj92MK2FtDUKKOiwpEbl_uNK7',
    };
    const bannerCaption = {
        title: 'WHO WE ARE – ST United',
        h1: 'United to grow up together',
        h2: '"No one can do everything, but everyone can do something"',
    };
    return (
        <>
            <HeaderBanner backgroundImageFe07={backgroundImageFe07} bannerCaption={bannerCaption} />
            <section className="section__whoweare">
                <Container className="section__container">
                    <Row className="section__container__title--block">
                        <Row className="let-talk__blank">
                            <Col></Col>
                        </Row>
                        <Col className="section__container__title">
                            <Row className="section__container__title__description">
                                <Col className="let-talk__Title">
                                    <p>
                                        Established on the early of 2016 and known as STD Software serves diverse global
                                        clients (Japanese, Australian, US) by offering mainstream services: IT
                                        outsourcing, software & website development, mobile applications.
                                    </p>
                                    <p>
                                        In 2019, STD Software was acquired to become ST Software division in ST United
                                        beside other divisions: ST Digital and ST Incubator.
                                    </p>
                                    <p>
                                        <strong>Our vision</strong>:Be the premier enterprise solutions provider and
                                        software product innovator in the Asia Pacific region{' '}
                                    </p>
                                    <p>
                                        <strong>Our mission</strong>:
                                    </p>
                                    <ul>
                                        <li>
                                            To empower our business partners to gain competitive advantage by providing
                                            innovative solutions.
                                        </li>
                                        <li>
                                            To continuously enhance our expertise in cutting-edge technologies and
                                            processes.
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="container--line">
                        <Col className="whoweare--line"></Col>
                    </Row>
                    <Row className="container--__let-talk--description--block">
                        <Col className="container--__let-talk--description">
                            <Row className="block--inner--let-talk__description">
                                <Col className="let-talk__description">
                                    <h1>WE ARE ST UNITED</h1>
                                </Col>
                            </Row>
                            <Row className="space--2"></Row>
                            <Row className="let-talk__inner--description">
                                {description &&
                                    description.map((item, index) => {
                                        return (
                                            <Col className="let-talk__inner" md={6} key={item._id}>
                                                <p>
                                                    <strong>{item.title}</strong>
                                                </p>
                                                <p>{item.text}</p>
                                            </Col>
                                        );
                                    })}
                                {description2 &&
                                    description2.map((item, index) => {
                                        return (
                                            <Col className="let-talk__inner" md={6} key={item._id}>
                                                <p>
                                                    <strong>{item.title}</strong>
                                                </p>
                                                <p>{item.text}</p>
                                            </Col>
                                        );
                                    })}
                            </Row>
                            <Row className="blank--3">
                                <Col className="blank--3--inner"></Col>
                            </Row>
                            <Row className="let-talk__title--blank--block">
                                <Col className="let-talk__title--blank">
                                    <h4>…and many other cool stories..</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="container--title--user ">
                        <Row className="inner__title--user">
                            <Col className="title--user">
                                <h1> Meet Our Team </h1>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="container--user">
                        {users &&
                            users.map((item, index) => {
                                return (
                                    <Col key={index} className="info--user" xs={12} sm={6} md={3}>
                                        <Row className="service--icon">
                                            <img src={item.image} alt="image" />
                                        </Row>
                                        <Row className="service--content">
                                            <a className="service--link" href="#">
                                                {item.name}
                                            </a>
                                            <h3 className="service--title"> {item.position}</h3>
                                        </Row>
                                    </Col>
                                );
                            })}
                    </Row>
                    <Row className="container--join-us">
                        <Col className="join-us">
                            <a href="http://dev.stunited.vn/careers/" title="JOIN US">
                                Wanna join us?
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};
export default WhoWeAre;
