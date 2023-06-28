import './Footer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { menuItems } from '../../../constant';

const NavMenuFooter = () => (
    <Col lg className="nav-menu-footer">
        <h3 className="nav-menu-footer__title">MENU</h3>
        <ul className="nav-menu-footer__list">
            {menuItems.map((item) => (
                <div key={item.id} className="nav-menu-footer__item">
                    <a
                        className={`nav-menu-footer__item-content ${
                            item.childrens && 'nav-menu-footer__item-content--had-childrens'
                        }`}
                        href={item.to}
                    >
                        {item.content}
                    </a>
                    {item.childrens &&
                        item.childrens.map((itemChildren) => (
                            <div key={itemChildren.id} className="nav-menu-footer__sub-item">
                                <a className="nav-menu-footer__sub-item-content" href={itemChildren.to}>
                                    {itemChildren.content}
                                </a>
                            </div>
                        ))}
                </div>
            ))}
        </ul>
    </Col>
);

const ContactFooter = () => (
    <Col lg className="contact-footer">
        <h3 className="contact-footer__title">CONTACT US</h3>
        <div className="contact-footer__text">Nomad Space</div>
        <ul className="contact-footer__list-contact">
            <li className="list-contact__item">
                <i className="fa fa-location-arrow"></i>
                14 An Thuong 18, Danang
            </li>
            <li className="list-contact__item">
                <i className="fa fa-phone"></i>
                Call us +84 905 610 229{' '}
            </li>
            <li className="list-contact__item">
                <i className="fa fa-envelope-o"></i>
                <a href="mailto:info@stdsoftware.com">info@stdsoftware.com</a>
            </li>
        </ul>
    </Col>
);

function Footer() {
    return (
        <footer id="footer-section">
            <div className="footer-top">
                <div className="container">
                    <Row>
                        <NavMenuFooter />
                        <ContactFooter />
                        <Col lg>
                            <div className="facebook-iframe-box">
                                <div
                                    className="fb-page"
                                    data-href="https://www.facebook.com/stunited.vn"
                                    data-tabs="timeline"
                                    data-width={340}
                                    data-height={130}
                                    data-small-header={false}
                                    data-adapt-container-width={true}
                                    data-hide-cover={false}
                                    data-show-facepile={true}
                                >
                                    <blockquote
                                        cite="https://www.facebook.com/stunited.vn"
                                        className="fb-xfbml-parse-ignore"
                                    >
                                        <a href="https://www.facebook.com/stunited.vn">ST United</a>
                                    </blockquote>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <Row>
                        <Col md={3}>
                            <p>Copyright © 2019 by ST United.</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
