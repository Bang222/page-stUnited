import Header from '../component/template/Header/header';
import Footer from '../component/template/Footer/footer';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import ButtonBackToTop from '../component/template/ButtonBackToTop/ButtonBackToTop';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-section')}>
                <Header />
            </div>
            <div className={cx('body-section')}>{children}</div>
            <div className={cx('footer-section')}>
                <Footer />
            </div>
            <ButtonBackToTop />
        </div>
    );
}

export default DefaultLayout;
