import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
// import { BsChevronLeft } from 'react-icons/bs';
import { FaAngleLeft, FaBars } from 'react-icons/fa';

const Navbar = ({ showSidebar, setShowSidebar }) => {
    const navigate = useNavigate();
    const closeMenuHandler = () => {
        // navigate(-1);
        setShowSidebar(false);
    };

    const openMenuHandler = () => {
        // navigate(-1);
        setShowSidebar(true);
    };

    return (
        <>
            <div className={styles.navContainer}>
                <nav>
                    <div className={styles.headerLogo}>
                        {showSidebar ? (
                            <div
                                className={styles.backBtn}
                                onClick={closeMenuHandler}
                            >
                                <FaAngleLeft />
                            </div>
                        ) : (
                            <div
                                className={styles.burger}
                                onClick={openMenuHandler}
                            >
                                <FaBars />
                            </div>
                        )}

                        <h1>Break App</h1>
                    </div>
                    <div className={styles.headerNav}>
                        <ul>
                            <li>username</li>
                            {/* <li>
                                <NavLink to='/' className={styles.navHomeLink}>
                                    HOME
                                </NavLink>
                            </li> */}
                            <li>
                                <button
                                    className={styles.navBtn}
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
