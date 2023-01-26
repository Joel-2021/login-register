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
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const pass = useRef();
  const re_pass = useRef();
  const navigate = useNavigate();
const [isPasswordValid, setIsPasswordValid] = useState(true);

function passwordValidation(){
  console.log("triggered")
 if(pass.current.value===re_pass.current.value) setIsPasswordValid(true)
 else setIsPasswordValid(false)
}
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
   if(isPasswordValid) {
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
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            error={errors.email ? true : false}
            helperText={errors.email && "Enter Valid Email"}
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
              inputRef: re_pass,
              // error:{isFormValid},
              placeholder: "Password",
            }}
            {...register("password", { required: true, minLength: 6 })}
            error={errors.password ? true : false}
            helperText={errors.password && "Set a Strong Password"}
            onChange={passwordValidation}            
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
              placeholder: "Re-Enter Password",
            }}
            error={!isPasswordValid? true :false}
            helperText={!isPasswordValid &&'Re-entered password is not matching'}
            onChange={passwordValidation}
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
            {...register("fName", { required: true })}
            error={errors.fName ? true : false}
            helperText={errors.fName && "Valid Name please"}
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
            {...register("lName", { required: true })}
            error={errors.lName ? true : false}
            helperText={errors.lName && "Valid Last Name please"}
            variant="standard"
          />

          <FormLabel style={{ marginTop: "5%" }}>Gender</FormLabel>
          <RadioGroup
            required
            style={{ display: "flex", flexDirection: "row" }}
            {...register("gender",{required:true})}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              {...register("gender", { required: true })}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              {...register("gender", { required: true })}
            />
          </RadioGroup>
          <FormControl variant="standard">
            <InputLabel>Country</InputLabel>
            <Select
              placeholder="Country"
              name="country"
              {...register("country",{required:true})}
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
