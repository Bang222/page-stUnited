import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import images from '../../../assets/images/index';
import { menuItems } from '../../../constant';
import MenuMobile from '../../template/MenuMobile/menuMobile';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header id="header-section" className={cx('header-section__box')}>
            <div className="container d-lg-block d-none position-absolute">
                <div className={cx('houzez-header')}>
                    <div className={cx('logo-box')}>
                        <NavLink className={cx('logo-img')} to="/">
                            <img src={images.logo} alt="logo" />
                        </NavLink>
                    </div>
                    <nav className={cx('nav-menu')}>
                        <ul className={cx('main-menu')}>
                            {menuItems.map((item) => (
                                <div key={item.id}>
                                    <li className={cx('nav-item', `${item.childrens ? 'had-children' : ''}`)}>
                                        {item.childrens ? (
                                            <NavLink to={item.to} className={cx('item-content')}>
                                                {item.content}
                                            </NavLink>
                                        ) : (
                                            <NavLink to={item.to} className={cx('item-content')}>
                                                {item.content}
                                            </NavLink>
                                        )}
                                        <ul className={cx('sub-menu')}>
                                            {item.childrens ? (
                                                item.childrens.map((itemChildren) => (
                                                    <li className={cx('sub-item')} key={itemChildren.id}>
                                                        <NavLink
                                                            to={itemChildren.to}
                                                            className={cx('sub-item-content')}
                                                        >
                                                            {itemChildren.content}
                                                        </NavLink>
                                                    </li>
                                                ))
                                            ) : (
                                                <></>
                                            )}
                                        </ul>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <MenuMobile />
        </header>
    );
}

export default Header;
