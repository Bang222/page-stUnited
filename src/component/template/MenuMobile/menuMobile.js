import './MenuMobile.scss';
import images from '../../../assets/images/index';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuItems } from '../../../constant';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function MenuMobile() {
    const [menuMobileToggle, setMenuMobileToggle] = useState(false);
    const [subMobileToggle, setSubMobileToggle] = useState(false);

    const handleBtnMenuMobile = () => {
        setMenuMobileToggle(!menuMobileToggle);
    };

    const handleBtnSubMenuMobile = () => {
        setSubMobileToggle(!subMobileToggle);
    };

    return (
        <div className="mobile-header d-lg-none position-relative">
            <div className="container-mobile container ">
                <div className="row row-cols-4 menu-mobile">
                    <div className="col menu-mobile__menu-btn">
                        <button onClick={handleBtnMenuMobile}>
                            <i className="fa fa-navicon menu-btn__icon-mobile"></i>
                        </button>
                    </div>
                    <div className="col-6 menu-mobile__logo-box">
                        <img className="logo-box__img" src={images.logo} alt="logo" />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <div className={`nav-menu-mobile-dropdown ${menuMobileToggle ? 'nav-menu-mobile-dropdown-active' : ''}`}>
                <nav className="nav-menu-mobile">
                    <ul className="main-menu-mobile">
                        {menuItems.map((item) => (
                            <div key={item.id}>
                                <li
                                    className={`nav-item-mobile ${
                                        item.childrens && subMobileToggle ? 'nav-item-mobile-active' : ''
                                    } ${item.childrens && 'nav-item-mobile--had-children'}`}
                                >
                                    {item.childrens ? (
                                        <button className="nav-item-mobile-active-btn" onClick={handleBtnSubMenuMobile}>
                                            <NavLink className="item-content">{item.content}</NavLink>
                                            {subMobileToggle ? (
                                                <FontAwesomeIcon className="sub-menu-mobile-icon" icon={faCaretDown} />
                                            ) : (
                                                <FontAwesomeIcon className="sub-menu-mobile-icon" icon={faCaretRight} />
                                            )}
                                        </button>
                                    ) : (
                                        <NavLink to={item.to} className="item-content">
                                            {item.content}
                                        </NavLink>
                                    )}
                                </li>
                                {item.childrens && (
                                    <ul
                                        className={`sub-menu-mobile ${subMobileToggle ? 'sub-menu-mobile-active' : ''}`}
                                    >
                                        {item.childrens ? (
                                            item.childrens.map((itemChildren) => (
                                                <li className="sub-item-mobile" key={itemChildren.id}>
                                                    <NavLink to={itemChildren.to} className="item-content-mobile">
                                                        {itemChildren.content}
                                                    </NavLink>
                                                </li>
                                            ))
                                        ) : (
                                            <></>
                                        )}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MenuMobile;
