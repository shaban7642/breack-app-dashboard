import React from 'react';
import Table from '../../components/Table/Table';
import styles from './Store.module.css';
import EditButton from '../../components/Buttons/EditButton/EditButton';
import DeleteButton from '../../components/Buttons/DeleteButton/DeleteButton';
import { useNavigate } from 'react-router';

const Store = () => {
    const navigate = useNavigate();
    const updateHandler = () => {
        navigate('/store-update-form');
    };
    const deleteHandler = () => {
        console.log('data deleted');
    };
    const columns = [
        'Name',
        'Description',
        'Price',
        'Category',
        'Avatar',
        'edit',
        'delete',
    ];
    const data = [
        {
            s: 'sdf',
            ass: 'sdf',
            asss: 'sdf',
            assss: 'sdf',
            aaa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            ass: 'sdf',
            asss: 'sdf',
            assss: 'sdf',
            aaa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            ass: 'sdf',
            asss: 'sdf',
            assss: 'sdf',
            aaa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            ass: 'sdf',
            asss: 'sdf',
            assss: 'sdf',
            aaa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            ass: 'sdf',
            asss: 'sdf',
            assss: 'sdf',
            aaa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            ass: 'sdf',
            asss: 'sdf',
            assss: 'sdf',
            aaa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            ass: 'sdf',
            asss: 'sdf',
            assss: 'sdf',
            aaa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
    ];

    return (
        <div className={styles.sessionsContainer}>
            <div className={styles.sessionsTable}>
                <Table
                    data={data}
                    columns={columns}
                    tableName='Store'
                    showDetails={true}
                    addNewButton={true}
                />
            </div>
        </div>
    );
};

export default Store;
