import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import styles from './Resellers.module.css';
import DeleteButton from '../../components/Buttons/DeleteButton/DeleteButton';
import EditButton from '../../components/Buttons/EditButton/EditButton';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers } from '../../actions/users';
import Error from '../../components/Error/Error';
import { getAllResellers } from '../../actions/resellers';
import Users from '../Users/Users';
import Success from '../../components/Success/Success';

const Resellers = () => {
    let limit = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const updateHandler = (id) => {
        navigate(`/users-update-form/${id}`);
    };
    const deleteHandler = (id) => {
        dispatch(deleteUser(id));
    };

    const { resellers, loading, error } = useSelector(
        (state) => state.allResellers
    );
    const {
        room: deletedRoom,
        loading: deleteLoading,
        success: deleteSuccess,
        error: deleteError,
    } = useSelector((state) => state.deleteUser);

    useEffect(() => {
        dispatch(getAllResellers(currentPage, limit));
    }, [dispatch, currentPage, limit]);

    const columns = [
        'ID',
        'First Name',
        'Last Name',
        'email',
        'gender',
        'isActive',
        'edit',
        'delete',
    ];

    const data = [];

    for (let u in resellers?.users) {
        if (resellers.users?.length !== 0) {
            data.push({
                _id: resellers?.users[u]?._id,
                ID: resellers?.users[u]?._id || 'no data',
                'First Name': resellers?.users[u]?.first_name || 'no data',
                'Last Name': resellers?.users[u]?.last_name || 'no data',
                email: resellers?.users[u]?.email || 'no data',
                gender: resellers?.users[u]?.gender || 'no data',
                isActive:
                    resellers?.users[u]?.isActive?.toString() || 'no data',
                edit: (
                    <EditButton
                        updateHandler={() =>
                            updateHandler(resellers?.users[u]?._id)
                        }
                    />
                ),
                delete: (
                    <DeleteButton
                        deleteHandler={() =>
                            deleteHandler(resellers?.users[u]?._id)
                        }
                    />
                ),
            });
        }
    }

    const pageChangeHandler = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    return (
        <div className={styles.sessionsContainer}>
            {error &&
                (Array.isArray(error) ? (
                    error.map((e) => <Error>{e.msg}</Error>)
                ) : (
                    <Error>{error}</Error>
                ))}
            {deleteError && <Error>{deleteError || 'server error'}</Error>}
            {deleteSuccess && <Success>User deleted successfully</Success>}
            <div className={styles.sessionsTable}>
                {loading ? (
                    <p>loading...</p>
                ) : (
                    <Table
                        data={data}
                        columns={columns}
                        tableName='Resellers'
                        showDetails={true}
                        addNewButton={true}
                        pageChangeHandler={pageChangeHandler}
                        currentPage={currentPage}
                        dataCount={resellers?.usersCount}
                        limit={limit}
                    />
                )}
            </div>
        </div>
    );
};

export default Resellers;
