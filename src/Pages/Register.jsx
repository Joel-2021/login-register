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

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  function passwordValidation() {
    if (pass.current.value === getValues("password")) setIsPasswordValid(true);
    else setIsPasswordValid(false);
  }
  function handleCountry(event) {}
  const onSubmit = (data) => {
    if(isPasswordValid)
     {
      console.log(data);
     }
  };

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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              ),
              // error:{isFormValid},
              placeholder: "Email",
              
            }}
            {...register("email",{required:true,pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})}
            error={errors.email? true :false}
          helperText= {errors.email && "Enter Valid Email" }
            // name="email"
            // {...register('email')}
            // error={!!errors.email}
            // helperText={errors.email?.message}
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
            {...register("password",{required:true,minLength:6})}
            error={errors.password? true :false}
            helperText= {errors.password && "Set a Strong Password" }
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlined />
                </InputAdornment>
              ),
              placeholder: "First Name",
            }}
            name="fName"
            {...register("fName",{required:true})}
            error={errors.fName? true :false}
            helperText= {errors.fName && "Valid Name please" }
            variant="standard"
          />
          <TextField
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlined />
                </InputAdornment>
              ),

              placeholder: "Last Name",
            }}
            {...register("lName",{required:true})}
            error={errors.lName? true :false}
            helperText= {errors.lName && "Valid Last Name please" }
            variant="standard"
          />

          <FormLabel style={{ marginTop: "5%" }}>Gender</FormLabel>
          <RadioGroup
            required
            style={{ display: "flex", flexDirection: "row" }}
            // {...register("gender")}
          >
            <FormControlLabel
              value="female"
              control={<Radio/>}
              label="Female"
              {...register('gender', { required: true })}
            />
            <FormControlLabel value="male" control={<Radio/>} label="Male"  {...register('gender', { required: true })}/>
          </RadioGroup>
          <FormControl variant="standard">
            <InputLabel>Country</InputLabel>
            <Select
              placeholder="Country"
              onChange={handleCountry}
              name="country"
              required
              {...register('country')}
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
