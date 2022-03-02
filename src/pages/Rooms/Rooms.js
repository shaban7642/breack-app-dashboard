import React from 'react';
import { useNavigate } from 'react-router';
import DeleteButton from '../../components/Buttons/DeleteButton/DeleteButton';
import EditButton from '../../components/Buttons/EditButton/EditButton';
import Table from '../../components/Table/Table';

import styles from './Rooms.module.css';

const Rooms = () => {
    const navigate = useNavigate();
    const updateHandler = () => {
        navigate('/rooms-update-form');
    };
    const deleteHandler = () => {
        console.log('data deleted');
    };
    const columns = ['Id', 'Name', 'Owner', 'Private', 'edit', 'delete'];
    const data = [
        {
            s: 'sdf',
            a: 'sdf',
            as: 'sdf',
            aa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            as: 'sdf',
            aa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            as: 'sdf',
            aa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            as: 'sdf',
            aa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            as: 'sdf',
            aa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            as: 'sdf',
            aa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            as: 'sdf',
            aa: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
    ];

    return (
        <div className={styles.RoomsContainer}>
            <div className={styles.RoomsTable}>
                <Table
                    data={data}
                    columns={columns}
                    tableName='Rooms'
                    showDetails={true}
                    addNewButton={true}
                />
            </div>
        </div>
    );
};

export default Rooms;
