import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import './TypicalChild.scss';
import { Col, Row } from 'react-bootstrap';

const TypicalChild = (props) => {
    return (
        <>
            {props.listContainerFe02 &&
                props.listContainerFe02.map((item) => {
                    return (
                        <Col key={item._id} className="fe02-wpb__col-context" md={3} xs={12}>
                            <Row className="fe02-wpb__col-context__inner">
                                <Col className="fe02-wpb__col-context__inner__context">
                                    <Col className="fe02-wpb__col-context__inner__context__block">
                                        <img src={item.image} alt="fe02-img" />
                                        <Col className="fe02-wpb__caption--before">
                                            <Row className="fe02-wpb__caption__inner">
                                                <h4 className="fe02-wpb__caption__team--name">
                                                    <a className="fe02-wpb__caption__teamCaption" href="#">
                                                        {item.teamCaption}
                                                    </a>
                                                </h4>
                                                <p className="fe02-wpb__caption__team-designation">
                                                    <a href="#">{item.teamDesigner}</a>
                                                </p>
                                                <ul
                                                    className="fe02-wpb__caption__team-social"
                                                    style={{ padding: '0 0' }}
                                                >
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://www.facebook.com/stunited.vn"
                                                            className="btn-facebook"
                                                        >
                                                            <FaFacebookSquare style={{ borderRadius: '7px' }} />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="btn-FaLinkedin">
                                                            <FaLinkedin style={{ borderRadius: '7px' }} />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Row>
                                        </Col>
                                        <Col className="fe02-wpb__caption--after" key={item.id} md={3} xs={12}>
                                            <Row className="fe02-wpb__caption__inner">
                                                <h4 className="fe02-wpb__caption__team--name">
                                                    <a className="fe02-wpb__caption__teamCaption" href="#">
                                                        {item.teamCaption}
                                                    </a>
                                                </h4>
                                                <a className="fe02-wpb__caption__team-designation" href="#">
                                                    {item.teamDesigner}
                                                </a>
                                                <p className="fe02-wpb__caption__team-descriptions">
                                                    {item.teamCaptionHide}
                                                </p>
                                                <ul
                                                    className="fe02-wpb__caption__team-social"
                                                    style={{ padding: '0 0' }}
                                                >
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://www.facebook.com/stunited.vn"
                                                            className="btn-facebook"
                                                        >
                                                            <FaFacebookSquare style={{ borderRadius: '7px' }} />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="btn-FaLinkedin">
                                                            <FaLinkedin style={{ borderRadius: '7px' }} />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    );
                })}
        </>
    );
};
export default TypicalChild;
