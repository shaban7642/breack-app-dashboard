import React from 'react';
import styles from './NewsDetails.module.css';
import profilePic from '../../../utils/images/profilePic.jpg';
import List from '../../../components/List/List';
import Image from '../../../components/Image/Image';

const NewsDetails = () => {
    const data = [
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
        { name: 'userName', value: 'ahmed' },
    ];

    return (
        <div className={styles.container}>
            <h3>News Details</h3>
            <div className={styles.detailsContainer}>
                <Image
                    className={styles.detailsImg}
                    img={profilePic}
                    alt='profilePic'
                />
                <List data={data} className={styles.detailsList} />
            </div>
        </div>
    );
};

export default NewsDetails;
