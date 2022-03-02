import React, { useContext, useEffect } from 'react';
import BackButton from '../../../components/Buttons/BackButton/BackButton';
import Form, { FormContext } from '../../../components/Form/Form';
import Input from '../../../components/Form/Input/Input';
import Select from '../../../components/Form/Select/Select';
import styles from './RoomsForm.module.css';

const initialState = {
    name: undefined,
    announcement: undefined,
    room_BG: undefined,
    room_avatar: undefined,
    room_admins: undefined,
    room_members: undefined,
    room_generas: undefined,
    private: undefined,
    room_password: undefined,
};

const RoomsForm = ({ isNew }) => {
    const { form } = useContext(FormContext);

    const submitHandler = (e, form) => {
        e.preventDefault();
        console.log(form.private);
    };

    useEffect(() => {
        console.log(form.private);
    }, [form]);
    return (
        <>
            <div className={styles.back}>
                <BackButton />
            </div>
            <div className={styles.RoomsFormContainer}>
                <Form
                    initialState={initialState}
                    submitHandler={submitHandler}
                    isNew={isNew}
                    formName='Room'
                >
                    <Input label='Name' name='name' />
                    <Input label='Announcement' name='announcement' />
                    <Select
                        label='Private'
                        name='private'
                        options={[true, false]}
                    />
                    <Input label='Password' type='password' name='password' />

                    {!isNew && (
                        <>
                            <Select
                                label='Room Admins'
                                name='room_admins'
                                options={['1', '2', '3']}
                            />
                            <Select
                                label='Room Members'
                                name='room_members'
                                options={['1', '2', '3']}
                            />
                            <Select
                                label='Room_Generas'
                                name='drinks'
                                options={['1', '2', '3']}
                            />
                            <Select
                                label='Drinks'
                                name='drinks'
                                options={['1', '2', '3']}
                            />
                        </>
                    )}
                </Form>
            </div>
        </>
    );
};

export default RoomsForm;
