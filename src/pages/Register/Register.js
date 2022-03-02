import React from 'react';
import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input/Input';
import styles from './Register.module.css';

const Register = ({ isNew }) => {
    const initialState = {
        name: undefined,
        email: undefined,
        password: undefined,
    };

    const submitHandler = (e, form) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className={styles.RegisterContainer}>
            <Form
                initialState={initialState}
                submitHandler={submitHandler}
                isNew={isNew}
                formName='Register'
            >
                <Input label='Name' name='name' />
                <Input label='Email' name='email' type='email' />
                <Input label='Password' name='password' type='password' />
            </Form>
        </div>
    );
};

export default Register;
