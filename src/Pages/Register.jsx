import {
  EmailOutlined,
  Lock,
  Password,
  PersonOutlineOutlined,
  PersonOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Container,
  IconButton,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const pass = useRef();
  const navigate = useNavigate();

  const {register, handleSubmit,errors}=useForm()

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  function passwordValidation() {}
  function handleCountry(event) {}
  const onSubmit = (data) => {
    console.log(data);
    // console.log(gender,country)
  };
  // function handleSubmit() {
  //   const val=Object.values(user).every(value=>value!=='')

  //   // setIsFormValid(val)
  //   if(isPasswordValid){
  //     console.log(user)
  //   }
  // }
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom marginTop="5%">
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <TextField
            required
            //  error={user.email? false:true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              ),
              // error:{isFormValid},
              placeholder: "Email",
            }}

            {...register('email')}
            error={!!errors.email}
            helperText={errors.Email?.message}
            variant="standard"
          />
          <TextField
            type={showPassword ? "text" : "password"}
            required
            // error={user.password? false:true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              // error:{isFormValid},
              placeholder: "Password",
            }}
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            variant="standard"
          />
          <TextField
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Password />
                </InputAdornment>
              ),
              // error:{isFormValid},
              inputRef: pass,
              color: !isPasswordValid ? "error" : "primary",
              placeholder: "Re-Enter Password",
              onChange: () => {
                passwordValidation();
              },
            }}
            variant="standard"
          />
          <TextField
            required
            //  error={user.fName? false:true}

            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlined />
                </InputAdornment>
              ),
              // error:{isFormValid},
              placeholder: "First Name",
            }}
            name="fName"
            inputRef={register({ required: true })}
            error={!!errors.fName}
            helperText={errors.fName?.message}
            variant="standard"
          />
          <TextField
            required
            //  error={user.lName? false:true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlined />
                </InputAdornment>
              ),
              // error:{isFormValid},
              placeholder: "Last Name",
              
            }}
            name="lName"
            inputRef={register({ required: true })}
            error={!!errors.lName}
            helperText={errors.lName?.message}
            variant="standard"
          />

          <FormLabel style={{ marginTop: "5%" }}>Gender</FormLabel>
          <RadioGroup
            // error={isFormValid}
            required
            name="gender"
            inputRef={register({ required: true })}

            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <FormControl
            variant="standard"
            // error={isFormValid}
          >
            <InputLabel>Country</InputLabel>
            <Select
              // value={country}
              placeholder="Country"
              onChange={handleCountry}
              name="country"
              required
    defaultValue="india"
    inputRef={register({ required: true })}
            >
              <MenuItem value={"india"}>India</MenuItem>
              <MenuItem value={"usa"}>USA</MenuItem>
              <MenuItem value={"canada"}>Canada</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="success"
            style={{ margin: "5%" }}
            type="submit"
          >
            Register
          </Button>
        </FormControl>
      </form>
      <p style={{ textAlign: "center" }}>
        Already a user? Click{" "}
        <span
          onClick={() => {
            navigate("/");
          }}
          style={{
            color: "red",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          here
        </span>
      </p>
    </Container>
  );
};

export default Register;
