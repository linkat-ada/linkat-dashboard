import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
// import { Form, FormikProvider, useFormik } from "formik";
// import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { signinAction } from "../../redux/actions/auth";

import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm = ({ }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userData, setUserData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // const LoginSchema = Yup.object().shape({
  //   email: Yup.string().required("Email  or Username is required"),
  //   password: Yup.string().required("Password is required"),
  // });

  const handleInputChange = (e) => {
    userData[e.target.name] = e.target.value;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("I AM GOING TO SIGN IN")
    await dispatch(signinAction(userData))
      .then(() => navigate("/"))
      .catch((e) => console.error(e));
  };

  // const handleOnSignin = async (data) => {
  //   console.log(data);
  //   await dispatch(
  //     signinAction({ usernameOrEmail: data.email, password: data.password })
  //   )
  //     .then((res) => {
  //       console.log("signin action------------- ", res);
  //     })
  //     .catch((e) => console.error("-----------", e));
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     remember: true,
  //   },
  //   validationSchema: LoginSchema,
  //   onSubmit: async () => {
  //     await dispatch(
  //       signinAction({ usernameOrEmail: formik?.values?.email, password: formik?.values?.password })
  //     )
  //       .then((res) => {
  //         console.log("signin action------------- ", res);
  //       })
  //       .catch((e) => console.error("-----------", e));
  //   },
  // });
  // const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
  //   formik;

  return (
    // <FormikProvider value={formik}>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleLogin}
      >
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="string"
              label="Email or Username "
              name="usernameOrEmail"
              helperText="Enter your username or email"
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              name="password"
              helperText="Enter your password"
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <FormControlLabel
                control={
                  <Checkbox/>
                }
                label="Remember me"
              />

              <Link
                component={RouterLink}
                variant="subtitle2"
                to="#"
                underline="hover"
              >
                Forgot password?
              </Link>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              {isSubmitting ? "loading..." : "Login"}
            </LoadingButton>
          </Box>
        </Box>
      </form>
    // </FormikProvider>
  );
};

export default LoginForm;
