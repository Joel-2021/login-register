import { EmailOutlined, Password } from "@mui/icons-material";
import {
  Button,
  FormControl,
  TextField,
  InputAdornment,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Container } from "@mui/system";
import { useForm } from "react-hook-form";
import React ,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword} from "../config/fire";
import {useAuthState} from 'react-firebase-hooks/auth'
const Login = () => {
  const navigate = useNavigate();
  const [user,loading,error]=useAuthState(auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logInWithEmailAndPassword(data.email, data.password);
  };
useEffect(() => {
  if(loading) <CircularProgress/>
  if(user) navigate('/dashboard')
  return
}, [user,loading]);
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom marginTop="5%">
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              ),
              placeholder: "Email",
            }}
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            error={errors.email ? true : false}
            helperText={errors.email && "Enter Valid Email"}
            variant="standard"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Password />
                </InputAdornment>
              ),
              placeholder: "Password",
            }}
            {...register("password", { required: true, minLength: 6 })}
            error={errors.password ? true : false}
            helperText={errors.password && "Enter Valid Password"}
            variant="standard"
          />
          <Button
            variant="contained"
            color="success"
            style={{ margin: "5%" }}
            type="submit"
          >
            Login
          </Button>
        </FormControl>
      </form>
      <p
        onClick={() => {
          navigate("/register");
        }}
        style={{ textAlign: "center", cursor: "pointer", color: "red" }}
      >
        Sign In?
      </p>
    </Container>
  );
};

export default Login;

