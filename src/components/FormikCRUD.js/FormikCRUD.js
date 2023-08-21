import React from 'react'
import "./Formik.css"
import formik from "../images/formik.jpg"

const FormikCRUD = () => {
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
                        <form className='form' action="">
                            <div className='input-parent parent-input-one'>
                                <input className='form-input input-one' id='name' name='username' type="text" placeholder='Enter Your Name Here...' />
                            </div>
                            <div className='input-parent parent-input-two'>
                                <input className='form-input input-two' id='email' name='email' type="email" placeholder='Enter Your Email Here...' />
                            </div>
                            <div className='input-parent parent-input-three'>
                                <input className='form-input input-three' id='password' name='password' type="password" placeholder='Enter Your Password Here...' />
                            </div>
                            <div className='input-parent parent-input-four'>
                                <input className='form-input input-four' id='retype_password' name='retype_password' type="password" placeholder='Re-Type Password...' />
                            </div>
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