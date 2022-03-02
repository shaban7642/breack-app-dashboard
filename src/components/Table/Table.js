import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Pagination from './Pagination/Pagination';

import styles from './Table.module.css';

let PageSize = 10;
const Table = ({
    data = [],
    columns = [],
    tableName = 'No Name',
    addNewButton,
    showDetails,
}) => {
    const history = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);

    const AddNewHandler = (e) => {
        e.preventDefault();
        history(`/${tableName}-create-form`);
    };

    const pageChangeHandler = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
        console.log(currentPage);
    };

    const detailsHandler = () => {
        history(`/${tableName}-details`);
    };

    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableName}>
                <h2>{tableName}</h2>
                {!addNewButton ? null : (
                    <button
                        onClick={AddNewHandler}
                        className={styles.addNewBtn}
                    >
                        Add New
                    </button>
                )}
            </div>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr>
                        {columns.map((h, idx) => (
                            <td key={idx}>{h}</td>
                        ))}
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {data.map((field, idx) => {
                        if (idx >= 10) return null;
                        else {
                            const fields = Object.values(field);
                            return (
                                <tr key={idx}>
                                    {fields.map((f, idx) => (
                                        <td
                                            key={idx}
                                            onClick={
                                                showDetails &&
                                                idx !== fields.length - 2 &&
                                                idx !== fields.length - 1
                                                    ? detailsHandler
                                                    : undefined
                                            }
                                            className={
                                                showDetails &&
                                                idx !== fields.length - 2 &&
                                                idx !== fields.length - 1
                                                    ? styles.clickedTr
                                                    : ''
                                            }
                                            title={
                                                showDetails &&
                                                idx !== fields.length - 2 &&
                                                idx !== fields.length - 1
                                                    ? 'View Details'
                                                    : ''
                                            }
                                        >
                                            {f}
                                        </td>
                                    ))}
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={(e, page) => pageChangeHandler(e, page)}
            />
        </div>
    );
};

export default Table;
