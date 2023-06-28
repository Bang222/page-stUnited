import './letstalk.scss';
import { React, useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BiChevronRight } from 'react-icons/bi';
import Header from '../../molecules/HeaderMedia/HeaderBanner';

const LetsTalk = () => {
    /* form validate handle */
    const initialValue = { name: '', email: '', phone: '', subject: '', message: '' };
    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, [500]);
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const validate = (values) => {
        const errors = {};
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
        if (!values.name) {
            errors.name = 'The field is required.';
        }

        if (!values.email) {
            errors.email = 'The field is required.';
        } else if (!regexEmail.test(values.email)) {
            errors.email = 'The e-mail address entered is invalid.';
        }

        if (!values.phone) {
            errors.phone = 'The field is required.';
        } else if (!regexPhone.test(values.phone)) {
            errors.phone = 'The telephone number is invalid.';
        }

        if (!values.subject) {
            errors.subject = 'The field is required.';
        }

        if (!values.message) {
            errors.message = 'The field is required.';
        }

        return errors;
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);

    /* render variable */
    const backgroundImageFe07 = {
        backGroundFe07: 'https://drive.google.com/uc?export=view&id=1cTwRlqdvez1xoHdrcM7PSO15csH3Nb5y',
    };
    const bannerCaption = {
        title: 'Let’s talk – ST United',
        h1: "Let's talk",
        h2: 'Stay in touch with us',
    };
    return (
        <div className="letstalk-area" style={{ margin: '0' }}>
            <Header
                className="fe07-header-banner"
                backgroundImageFe07={backgroundImageFe07}
                bannerCaption={bannerCaption}
            />
            <div className="letstalk-container">
                <div className="container">
                    <div className="page-title-breadscrumb-top ">
                        <Row className="letstalk-title">
                            <Col sm={12} className="letstalk-sm-12">
                                <Breadcrumb className="letstalk-breadcrumb">
                                    <Breadcrumb.Item
                                        className="letstalk-breadcrumb__unactive"
                                        href="https://stunited.vn/"
                                    >
                                        Home
                                    </Breadcrumb.Item>
                                    <BiChevronRight className="breadcrumb-icon" />
                                    <Breadcrumb.Item className="letstalk-breadcrumb__active" active>
                                        Let’s talk
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </Row>
                        <div className="page-title-breadscrumb-title">
                            <h1>Let’s talk</h1>
                        </div>
                    </div>
                    <section className="section-detail-content-houzez-page-template">
                        <div className="letstalk-block">
                            <div className="letstalk-box">
                                <div className="letstalk-main-page">
                                    <div className="letstalk-white-block">
                                        <Row className="letstalk-entry-content">
                                            <Col md={8} className="letstalk-input">
                                                <div className="letstalk-column-text">
                                                    <div className="letstalk-wrapper">
                                                        <p className="noob">
                                                            <strong>ST United</strong> is always glad to hear your
                                                            comments regarding our services. Whether you have any
                                                            questions, or wish to get a quote for your project, or
                                                            require further information about what we can offer you,
                                                            please do not hesitate to contact us
                                                        </p>
                                                    </div>
                                                </div>
                                                <form onSubmit={handleSubmit} size="sm" className="letstalk-form">
                                                    <div className="letstalk-column-inner">
                                                        <label
                                                            id="inputGroup-sizing-sm"
                                                            className="letstalk-form__input-label"
                                                        >
                                                            Your Name
                                                        </label>

                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formValues.name}
                                                            onChange={handleChange}
                                                            className="letstalk-form__input-box"
                                                        />
                                                        <span
                                                            role="alert"
                                                            className="letstalk-form__input-validate-error"
                                                        >
                                                            {formErrors.name}
                                                        </span>

                                                        <label
                                                            id="inputGroup-sizing-sm"
                                                            className="letstalk-form__input-label"
                                                        >
                                                            Your Email
                                                        </label>

                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formValues.email}
                                                            onChange={handleChange}
                                                            className="letstalk-form__input-box"
                                                        />
                                                        <span
                                                            role="alert"
                                                            className="letstalk-form__input-validate-error"
                                                        >
                                                            {formErrors.email}
                                                        </span>

                                                        <label
                                                            id="inputGroup-sizing-sm"
                                                            className="letstalk-form__input-label"
                                                        >
                                                            Your Phone
                                                        </label>

                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            value={formValues.phone}
                                                            onChange={handleChange}
                                                            className="letstalk-form__input-box"
                                                        />
                                                        <span
                                                            role="alert"
                                                            className="letstalk-form__input-validate-error"
                                                        >
                                                            {formErrors.phone}
                                                        </span>

                                                        <label
                                                            id="inputGroup-sizing-sm"
                                                            className="letstalk-form__input-label"
                                                        >
                                                            Subject
                                                        </label>

                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            value={formValues.subject}
                                                            onChange={handleChange}
                                                            className="letstalk-form__input-box"
                                                        />
                                                        <span
                                                            role="alert"
                                                            className="letstalk-form__input-validate-error"
                                                        >
                                                            {formErrors.subject}
                                                        </span>

                                                        <div className="mb-4">
                                                            <label className="letstalk-form__input-label">
                                                                Your Message
                                                            </label>

                                                            <textarea
                                                                type="text"
                                                                name="message"
                                                                value={formValues.message}
                                                                onChange={handleChange}
                                                                className="letstalk-form__text-area"
                                                            ></textarea>
                                                            <span
                                                                role="alert"
                                                                className="letstalk-form__input-validate-error"
                                                            >
                                                                {formErrors.message}
                                                            </span>
                                                        </div>

                                                        <button type="submit" className="letstalk-form__submit-button">
                                                            Send
                                                        </button>
                                                    </div>
                                                    {isSubmit &&
                                                        (Object.keys(formErrors).length === 0 ? (
                                                            <div className="submit-form__result">
                                                                {loading ? (
                                                                    <div className="submit-form__loading">
                                                                        <i className="fas fa-sync fa-spin" />
                                                                    </div>
                                                                ) : (
                                                                    <div className="submit-form__result-success">
                                                                        Success.
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <div className="submit-form__result">
                                                                {loading ? (
                                                                    <div className="submit-form__loading">
                                                                        <i className="fas fa-sync fa-spin" />
                                                                    </div>
                                                                ) : (
                                                                    <div className="submit-form__result-fail">
                                                                        One or more fields have an error. Please check
                                                                        and try again.
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                </form>
                                            </Col>
                                            <Col md={4} className="letstalk-information">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="wpb_text_column">
                                                            <h4 className="contact">Office</h4>
                                                            <p className="">
                                                                Address: Nomad Space, No.14 An Thuong 18, Danang,
                                                                Vietnam
                                                            </p>
                                                            <p>Hotline: (+84) 777 463 183</p>
                                                            <p className="guest-email">Email: hello(at)stunited.vn</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
export default LetsTalk;
