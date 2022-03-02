import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NestedLink from '../../components/NestedLink/NestedLink';
import styles from './Sidebar.module.css';
import profilePic from '../../utils/images/profilePic.jpg';
import {
    FaRestroom,
    FaUserFriends,
    FaChartLine,
    FaStore,
    FaSlidersH,
    FaClipboardList,
    FaCubes,
} from 'react-icons/fa';
import MenuLink from '../../components/MenuLink/MenuLink';
import classnames from 'classnames';

const Sidebar = ({ showSidebar }) => {
    const [parentShow, setParentShow] = useState('');

    const navigate = useNavigate();

    const userList = [
        { text: 'all user', to: '/users' },
        { text: 'add user', to: '/users-create-form' },
        { text: 'update user', to: '/users-update-form' },
    ];
    const newsList = [
        { text: 'all news', to: '/news' },
        { text: 'add news', to: '/news-create-form' },
        { text: 'update news', to: '/news-update-form' },
    ];
    const roomList = [
        { text: 'all Rooms', to: '/rooms' },
        { text: 'add Rooms', to: '/rooms-create-form' },
        { text: 'update Rooms', to: '/rooms-update-form' },
    ];
    const storeList = [
        { text: 'all store', to: '/store' },
        { text: 'add store', to: '/store-create-form' },
        { text: 'update store', to: '/store-update-form' },
    ];
    const settingsList = [
        { text: 'all settings', to: '/settings' },
        { text: 'add settings', to: '/settings-create-form' },
        { text: 'update settings', to: '/settings-update-form' },
    ];
    const productCategorysList = [
        { text: 'all product-categorys', to: '/product-categorys' },
        { text: 'add product-categorys', to: '/product-categorys-create-form' },
        {
            text: 'update product-categorys',
            to: '/product-categorys-update-form',
        },
    ];
    return (
        <>
            <div
                className={classnames(
                    styles.sidebarContainer,
                    !showSidebar ? styles.sidebarDisable : ''
                )}
            >
                <div className={styles.sidebarLogo}>
                    <h2>logo</h2>
                </div>
                <ul className={styles.sidebarList}>
                    <li>
                        <MenuLink
                            path='/'
                            icon={<FaChartLine />}
                            name='Overview'
                        />
                    </li>
                    <li>
                        <NestedLink
                            parentShow={parentShow}
                            setParentShow={setParentShow}
                            listName='Users'
                            links={userList}
                            icon={<FaUserFriends />}
                        />
                    </li>
                    <li>
                        <NestedLink
                            parentShow={parentShow}
                            setParentShow={setParentShow}
                            listName='Rooms'
                            links={roomList}
                            icon={<FaRestroom />}
                        />
                    </li>
                    <li>
                        <NestedLink
                            parentShow={parentShow}
                            setParentShow={setParentShow}
                            listName='Store'
                            links={storeList}
                            icon={<FaStore />}
                        />
                    </li>
                    <li>
                        <NestedLink
                            parentShow={parentShow}
                            setParentShow={setParentShow}
                            listName='Product Category'
                            links={productCategorysList}
                            icon={<FaCubes />}
                        />
                    </li>
                    <li>
                        <NestedLink
                            parentShow={parentShow}
                            setParentShow={setParentShow}
                            listName='Settings'
                            links={settingsList}
                            icon={<FaSlidersH />}
                        />
                    </li>
                    <li>
                        <NestedLink
                            parentShow={parentShow}
                            setParentShow={setParentShow}
                            listName='News'
                            links={newsList}
                            icon={<FaClipboardList />}
                        />
                    </li>
                </ul>
                <div className={styles.PersonalInfo}>
                    <div
                        className={styles.profile}
                        onClick={() => navigate('/profile')}
                    >
                        <img src={profilePic} alt='personal avatar' />
                        <div className={styles.profileName}>
                            <p className={styles.name}>username</p>
                            <p className={styles.role}>role</p>
                        </div>
                    </div>
                    <div className={styles.logout}>
                        <button>Log out</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
