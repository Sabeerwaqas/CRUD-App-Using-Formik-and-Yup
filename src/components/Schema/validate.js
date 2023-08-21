import * as Yup from "yup";

export const validate = Yup.object({
        username: Yup.string().min(2).max(25).required("Please Enter Your Name"),
        email: Yup.string().email().required("Please Enter Your Email"),
        password: Yup.string().min(6).required("Please Enter Your Password"),
        retype_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password Must Be Match")
})