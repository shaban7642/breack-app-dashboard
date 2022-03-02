import React, { createContext, useState } from 'react';
import styles from './Form.module.css';

export const FormContext = createContext({
    form: {},
});

const Form = ({ children, initialState, submitHandler, isNew, formName }) => {
    const [form, setForm] = useState(initialState);

    const handleFormChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        console.log(form);
    };

    return (
        <div className={styles.formContainer}>
            <h2>
                {isNew ? 'Create' : isNew === null ? '' : 'Update'} {formName}
            </h2>
            <FormContext.Provider value={{ form, handleFormChange }}>
                <form className={styles.form}>
                    {children}
                    <button
                        type='button'
                        onClick={(e) => submitHandler(e, form)}
                    >
                        Submit
                    </button>
                </form>
            </FormContext.Provider>
        </div>
    );
};

export default Form;
