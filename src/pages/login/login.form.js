import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  Email: Yup.string().email().required(),
  Password: Yup.string().min(8),
});
const LoginForm = () => {
  const formik = useFormik({
    validationSchema: LoginSchema,
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: (values) => {},
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleCheck = () => {
    setShowPassword((v) => !v);
  };
  return (
    <form
      className="d-flex flex-column col-8 justify-content-center"
      onSubmit={formik.handleSubmit}
    >
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
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        id="Password"
        name="Password"
        onChange={formik.handleChange}
        value={formik.values["Password"]}
      />
      <div className="d-flex align-items-center ps-3 m-1">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={handleCheck}
          className="col p-0 m-0 col-1"
        ></input>
        <p className="col p-0 m-0">show password</p>
      </div>
      <p className="text-danger ms-4 error-text">{formik.errors["Password"]}</p>

      <button
        className="rounded-pill bg-success align-self-center bg-gradient col-6 p-2 m-3 text-light"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};

export default LoginForm;
