import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { useAppDispatch } from "../../../state/Store";
import { sendLoginSignupOtp, signin } from "../../../state/AuthSlice";
import { sellerLogin } from "../../../state/seller/SellerAuthSlice";

const SellerLoginForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      dispatch(sellerLogin(values));
    },
    validate: (values) => {
      const errors: { email?: string; otp?: string } = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email address";
      }

      if (!values.otp) {
        errors.otp = "Required";
      }
      return errors;
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  const handleLogin = () => {
    // dispatch(signin({email}))
  };

  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary-color pb-5">
        Login As Seller
      </h1>

      <div className="space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        {true && (
          <div className="space-y-2">
            <p className="font-medium text-sm opacity-60">
              Enter OTP sent to your email
            </p>
            <TextField
              fullWidth
              name="otp"
              label="Otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        )}

        <Button
          onClick={handleSendOtp}
          fullWidth
          variant="contained"
          sx={{
            py: 1.5, // Moderate vertical padding
            mt: 2, // Margin top for spacing
            textTransform: "none", // Optional: keep text as-is (not all uppercase)
            fontWeight: "bold",
          }}
          // type="submit"
        >
          Send OTP
        </Button>

        <Button
        onClick={() => formik.handleSubmit()}
          fullWidth
          variant="contained"
          sx={{
            py: 1.5, // Moderate vertical padding
            mt: 2, // Margin top for spacing
            textTransform: "none", // Optional: keep text as-is (not all uppercase)
            fontWeight: "bold",
          }}
          // type="submit"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default SellerLoginForm;
