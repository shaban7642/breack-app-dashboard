import React from 'react';
import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input/Input';
import styles from './Login.module.css';

const Login = ({ isNew }) => {
    const initialState = {
        email: undefined,
        password: undefined,
    };

    const submitHandler = (e, form) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className={styles.LoginContainer}>
            <Form
                initialState={initialState}
                submitHandler={submitHandler}
                isNew={isNew}
                formName='Login'
            >
                <Input label='Email' name='email' type='email' />
                <Input label='Password' name='password' type='password' />
            </Form>
        </div>
    );
};

export default Login;
