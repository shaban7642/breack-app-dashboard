import Login from '../pages/Login/Login';
import News from '../pages/News/News';
import NewsDetails from '../pages/News/NewsDetails/NewsDetails';
import NewsForm from '../pages/News/NewsForm/NewsForm';
import ProductCategorys from '../pages/ProductCategorys/ProductCategorys';
import ProductCategorysDetails from '../pages/ProductCategorys/ProductCategorysDetails/ProductCategorysDetails';
import ProductCategorysForm from '../pages/ProductCategorys/ProductCategorysForm/ProductCategorysForm';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
import Rooms from '../pages/Rooms/Rooms';
import RoomsDetails from '../pages/Rooms/RoomsDetails/RoomsDetails';
import RoomsForm from '../pages/Rooms/RoomsForm/RoomsForm';
import Settings from '../pages/Settings/Settings';
import SettingsForm from '../pages/Settings/SettingsForm/SettingsForm';
import Statistics from '../pages/Statistics/Statistics';
import Store from '../pages/Store/Store';
import StoreDetails from '../pages/Store/StoreDetails/StoreDetails';
import StoreForm from '../pages/Store/StoreForm/StoreForm';
import Users from '../pages/Users/Users';
import UsersDetails from '../pages/Users/UsersDetails/UsersDetails';
import UsersForm from '../pages/Users/UsersForm/UsersForm';

const routes = [
    {
        path: '/',
        element: <Statistics />,
    },
    {
        path: '/login',
        element: <Login isNew={null} />,
    },
    {
        path: '/register',
        element: <Register isNew={null} />,
    },
    {
        path: '/profile',
        element: <Profile isNew={null} />,
    },
    {
        path: '/news',
        element: <News />,
    },
    {
        path: '/news-create-form',
        element: <NewsForm isNew={true} />,
    },
    {
        path: '/news-update-form',
        element: <NewsForm isNew={false} />,
    },
    {
        path: '/news-Details',
        element: <NewsDetails />,
    },
    {
        path: '/users',
        element: <Users />,
    },
    {
        path: '/users-create-form',
        element: <UsersForm isNew={true} />,
    },
    {
        path: '/users-update-form',
        element: <UsersForm isNew={false} />,
    },
    {
        path: '/users-details',
        element: <UsersDetails />,
    },
    {
        path: '/product-categorys',
        element: <ProductCategorys />,
    },
    {
        path: '/product-categorys-create-form',
        element: <ProductCategorysForm isNew={true} />,
    },
    {
        path: '/product-categorys-update-form',
        element: <ProductCategorysForm isNew={false} />,
    },
    {
        path: '/product-categorys-details',
        element: <ProductCategorysDetails />,
    },
    {
        path: '/rooms',
        element: <Rooms />,
    },
    {
        path: '/rooms-create-form',
        element: <RoomsForm isNew={true} />,
    },
    {
        path: '/rooms-update-form',
        element: <RoomsForm isNew={false} />,
    },
    {
        path: '/rooms-details',
        element: <RoomsDetails />,
    },
    {
        path: '/store',
        element: <Store />,
    },
    {
        path: '/store-create-form',
        element: <StoreForm isNew={true} />,
    },
    {
        path: '/store-update-form',
        element: <StoreForm isNew={false} />,
    },
    {
        path: '/store-details',
        element: <StoreDetails />,
    },
    {
        path: '/settings',
        element: <Settings />,
    },
    {
        path: '/settings-create-form',
        element: <SettingsForm isNew={true} />,
    },
    {
        path: '/settings-update-form',
        element: <SettingsForm isNew={false} />,
    },
];

export default routes;
