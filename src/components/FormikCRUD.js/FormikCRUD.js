import React from 'react'
import "./Formik.css"
import formik from "../images/formik.jpg"
import { useFormik } from 'formik'
import { validate } from '../Schema/validate'

const initialValues = {
    username: "",
    email: "",
    password: "",
    retype_password: ""
}

const FormikCRUD = () => {

    // Using formik

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: validate,
        onSubmit: (values) => {

            console.log(values)

        }


    })


    return (
        <>
            <h1 className='main-heading'>
                CRUD App Using <br /> Formik and Yup
            </h1>
            {/* Creating flexbox */}
            <div className='parent'>
                {/* F;exbox child 1 */}
                <div className='parent-child child-1'>

                    <div className='form-grandParent'>
                        <form className='form' onSubmit={handleSubmit}>
                            <div className='input-parent parent-input-one'>
                                <input className='form-input input-one' id='name' name='username' type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Your Name Here...' />
                                <small>{errors.username}</small>
                            </div>
                            <div className='input-parent parent-input-two'>
                                <input className='form-input input-two' id='email' name='email' type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Your Email Here...' />
                                <small>{errors.email}</small>

                            </div>
                            <div className='input-parent parent-input-three'>
                                <input className='form-input input-three' id='password' name='password' type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Your Password Here...' />
                                <small>{errors.password}</small>

                            </div>
                            <div className='input-parent parent-input-four'>
                                <input className='form-input input-four' id='retype_password' name='retype_password' value={values.retype_password} type="password" onChange={handleChange} onBlur={handleBlur} placeholder='Re-Type Password...' />
                                <small>{errors.retype_password}</small>

                            </div>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>

                </div>
                {/* Flexbox child 2 */}
                <div className='parent-child child-2'>

                    <img className='formik-image' src={formik} alt="" />

                </div>
            </div>
        </>
    )
}

export default FormikCRUD