import { LockOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";

const RegisterForm = () => {
    const navigate = useNavigate()
  const registerSubmit = (values) => {
    console.log(values);
    navigate('/login')
  };
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "600px",
        backdropFilter: "blur(10px)",
        p: 2,
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
          }}
          onSubmit={registerSubmit}
          validationSchema={yup.object({
            first_name: yup.string().max(26).required("first name is required"),
            last_name: yup.string().max(26).required("last name is required"),
            email: yup.string().email().required("email is required"),
            password: yup
              .string()
              .min(7)
              .max(26)
              .required("password is required"),
            confirm_password: yup
              .string()
              .min(7)
              .max(26)
              .required("confirm password is required"),
          })}
        >
          {({
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth margin="dense" color="primary">
                <InputLabel>First Name</InputLabel>
                <OutlinedInput
                  label="First Name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.first_name && !!touched.first_name}
                  value={values.first_name}
                  name="first_name"
                />
                {!!errors.first_name && !!touched.first_name && (
                  <FormHelperText error>{errors.first_name}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth margin="dense" color="primary">
                <InputLabel>Last Name</InputLabel>
                <OutlinedInput
                  label="Last Name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.last_name && !!touched.last_name}
                  value={values.last_name}
                  name="last_name"
                />
                {!!errors.last_name && !!touched.last_name && (
                  <FormHelperText error>{errors.last_name}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth margin="dense" color="primary">
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                  label="Email"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.email && !!touched.email}
                  value={values.email}
                  name="email"
                />
                {!!errors.email && !!touched.email && (
                  <FormHelperText error>{errors.email}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth margin="dense" color="primary">
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  label="Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.password && !!touched.password}
                  value={values.password}
                  name="password"
                />
                {!!errors.password && !!touched.password && (
                  <FormHelperText error>{errors.password}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth margin="dense" color="primary">
                <InputLabel>Confirm Password</InputLabel>
                <OutlinedInput
                  label="Confirm Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    !!errors.confirm_password && !!touched.confirm_password
                  }
                  value={values.confirm_password}
                  name="confirm_password"
                />
                {!!errors.confirm_password && !!touched.confirm_password && (
                  <FormHelperText error>
                    {errors.confirm_password}
                  </FormHelperText>
                )}
              </FormControl>

              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loadingPosition="start"
                // loading
                disabled={values.password !== values.confirm_password}
              >
                Sign Up
              </LoadingButton>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default RegisterForm;
