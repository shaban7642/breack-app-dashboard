import React from 'react';
import { useNavigate } from 'react-router';
import DeleteButton from '../../components/Buttons/DeleteButton/DeleteButton';
import EditButton from '../../components/Buttons/EditButton/EditButton';
import Table from '../../components/Table/Table';
import styles from './News.module.css';

const News = () => {
    const history = useNavigate();

    const updateHandler = (e) => {
        e.preventDefault();
        history(`/news-update-form`);
    };
    const deleteHandler = () => {
        console.log('data deleted');
    };
    const columns = ['Title', 'Description', 'edit', 'delete'];
    const data = [
        {
            s: 'sdf',
            a: 'sdf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: 'sdssssf',
            a: 'sdasssssssssf',
            edit: <EditButton updateHandler={updateHandler} />,
            delete: <DeleteButton deleteHandler={deleteHandler} />,
        },
        {
            s: '141',
            a: '54545',
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
                    tableName='News'
                    showDetails={true}
                    addNewButton={true}
                />
            </div>
        </div>
    );
};

export default News;
