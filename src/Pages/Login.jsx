import { EmailOutlined, Password } from "@mui/icons-material";
import {
  Button,
  FormControl,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'column'
      }}
    >
     
          <Typography variant="h4" align="center" gutterBottom marginTop="5%">
            Login
          </Typography>
      
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
            variant="standard"
          />
          <Button variant="contained" color="success" style={{ margin: "5%" }}>
            Login
          </Button>
        </FormControl>
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
