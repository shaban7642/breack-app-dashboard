import React from 'react';
import Table from '../../components/Table/Table';
import styles from './Users.module.css';
import DeleteButton from '../../components/Buttons/DeleteButton/DeleteButton';
import EditButton from '../../components/Buttons/EditButton/EditButton';
import { useNavigate } from 'react-router';

const Users = () => {
    const navigate = useNavigate();
    const updateHandler = () => {
        navigate('/users-update-form');
    };
    const deleteHandler = () => {
        console.log('data deleted');
    };
    const columns = ['Username', 'Phone', 'Role', 'edit', 'delete'];
    const data = [
        {
            s: 'sdf',
            a: 'sdf',
            ass: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            ass: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            ass: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            ass: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            ass: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdf',
            a: 'sdf',
            ass: 'sdf',
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
                    tableName='Users'
                    showDetails={true}
                    addNewButton={true}
                />
            </div>
        </div>
    );
};

export default Users;
