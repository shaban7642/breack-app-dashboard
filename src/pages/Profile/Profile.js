import React from 'react';
import Form from '../../components/Form/Form';
import Image from '../../components/Image/Image';
import styles from './Profile.module.css';
import profilePic from '../../utils/images/profilePic.jpg';
import Input from '../../components/Form/Input/Input';
import Select from '../../components/Form/Select/Select';

const Profile = ({ isNew }) => {
    const initialState = {
        username: undefined,
        password: undefined,
        phone: undefined,
        role: undefined,
    };

    const submitHandler = (e, form) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className={styles.detailsContainer}>
            <div className={styles.image}>
                <h3>Name</h3>
                <Image
                    className={styles.detailsImg}
                    img={profilePic}
                    alt='profilePic'
                />
            </div>
            <div className={styles.form}>
                <Form
                    initialState={initialState}
                    submitHandler={submitHandler}
                    formName='Your Info'
                    isNew={isNew}
                >
                    <Input label='Username' name='username' />
                    <Input label='Password' name='password' type='password' />
                    <Input label='Phone' name='phone' />
                    <Select
                        label='Role'
                        name='role'
                        options={['1', '2', '3']}
                    />
                </Form>
            </div>
        </div>
    );
};

export default Profile;
