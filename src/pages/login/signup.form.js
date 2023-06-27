import React from "react";
import {useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  "Full Name": Yup.string().required().min(8),
  "Email": Yup.string().email().required(),
  "Password": Yup.string().min(8),
  "Confirm Password": Yup.string()
    .min(8)
    .oneOf([Yup.ref("Password"),null], "Passwords must match"),
});
const SignupForm = () => {
  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
      "Full Name": "",
      "Email": "",
      "Password": "",
      "Confirm Password": "",
    },
    onSubmit: (values) => {},
  });

  return (
    <form
      className="d-flex flex-column col-8 justify-content-center"
      onSubmit={formik.handleSubmit}
    >
      <input
        className="input rounded-pill p-2 ps-4 m-2 border border-light"
        placeholder="Full Name"
        type="text"
        name="Full Name"
        id="Full Name"
        onChange={formik.handleChange}
        value={formik.values["Full Name"]}
      />
      <p className="text-danger ms-4 error-text">
        {formik.errors["Full Name"]}
      </p>
      <input
        className="input rounded-pill p-2 ps-4 m-2 border border-light"
        placeholder="Email"
        type="text"
        name="Email"
        id="Email"
        onChange={formik.handleChange}
        value={formik.values["Email"]}
      />
      <p className="text-danger ms-4 error-text">{formik.errors["Email"]}</p>
      <input
        className="input rounded-pill p-2 ps-4 m-1 border border-light"
        type="password"
        placeholder="Password"
        id="Password"
        name="Password"
        onChange={formik.handleChange}
        value={formik.values["Password"]}
      />
      <p className="text-danger ms-4 error-text">
        {formik.errors["Password"]}
      </p>
      <input
        className="input rounded-pill p-2 ps-4 m-1 border border-light"
        type="password"
        placeholder="Confirm Password"
        id="Confim Password"
        name="Confirm Password"
        onChange={formik.handleChange}
        value={formik.values["Confirm Password"]}
      />
      <p className="text-danger ms-4 error-text">
        {formik.errors['Confirm Password']}
      </p>
      <button
        className="rounded-pill bg-success align-self-center bg-gradient col-6 p-2 m-3 text-light"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
