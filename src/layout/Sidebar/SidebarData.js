import {
    FaRestroom,
    FaUserFriends,
    FaChartLine,
    FaStore,
    FaSlidersH,
    FaClipboardList,
    FaCubes,
} from 'react-icons/fa';

const links = [
    {
        name: 'Overview',
        path: '/',
        icon: <FaChartLine />,
    },
    {
        name: 'Settings',
        path: '/settings',
        icon: <FaSlidersH />,
    },
    {
        listName: 'Users',
        links: [
            { text: 'Users', to: '/users' },
            { text: 'Users Statistics', to: '/users-statistics' },
        ],
        icon: <FaUserFriends />,
    },
    {
        listName: 'Resellers',
        links: [
            { text: 'Resellers', to: '/resellers' },
            { text: 'Resellers Statistics', to: '/resellers-statistics' },
        ],
        icon: <FaUserFriends />,
    },
    {
        listName: 'Agencys',
        links: [
            { text: 'Agencys', to: '/agencys' },
            { text: 'Agencys Statistics', to: '/agencys-statistics' },
        ],
        icon: <FaUserFriends />,
    },
    {
        listName: 'Rooms',
        links: [{ text: 'Rooms', to: '/rooms' }],
        icon: <FaRestroom />,
    },
    {
        listName: 'Store',
        links: [{ text: 'Store', to: '/store' }],
        icon: <FaStore />,
    },
    {
        listName: 'Product Categorys',
        links: [{ text: 'Product-Categorys', to: '/product-categorys' }],
        icon: <FaCubes />,
    },
    {
        listName: 'News',
        links: [{ text: 'News', to: '/news' }],
        icon: <FaClipboardList />,
    },
    {
        name: 'Reports',
        path: '/reports',
        icon: <FaChartLine />,
    },
];

export default links;
