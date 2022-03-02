import React from 'react';
import BackButton from '../../../components/Buttons/BackButton/BackButton';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Form/Input/Input';
import Select from '../../../components/Form/Select/Select';
import styles from './StoreForm.module.css';

const StoreForm = ({ isNew }) => {
    const initialState = {
        name: undefined,
        description: undefined,
        price: undefined,
        category: undefined,
        avatar: undefined,
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
            <div className={styles.StoreFormContainer}>
                <Form
                    initialState={initialState}
                    submitHandler={submitHandler}
                    isNew={isNew}
                    formName='Store'
                >
                    <Input label='Name' name='name' />
                    <Input label='Dscription' name='description' />
                    <Input label='Price' type='number' name='price' />
                    <Select
                        label='Category'
                        name='category'
                        options={[0, 1, 2]}
                    />
                    <Input label='Avatar' type='file' name='avatar' />
                </Form>
            </div>
        </>
    );
};

export default StoreForm;
