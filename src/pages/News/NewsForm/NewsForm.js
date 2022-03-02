import React from 'react';
import BackButton from '../../../components/Buttons/BackButton/BackButton';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Form/Input/Input';
import Select from '../../../components/Form/Select/Select';
import styles from './NewsForm.module.css';

const NewsForm = ({ isNew }) => {
    const initialState = {
        title: undefined,
        description: undefined,
    };

    const submitHandler = (e, form) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <>
            <div className={styles.back}>
                <BackButton />
            </div>
            <div className={styles.NewsFormContainer}>
                <Form
                    initialState={initialState}
                    submitHandler={submitHandler}
                    isNew={isNew}
                    formName='News'
                >
                    <Input label='Title' name='title' />
                    <Input label='Description' name='description' />
                </Form>
            </div>
        </>
    );
};

export default NewsForm;
