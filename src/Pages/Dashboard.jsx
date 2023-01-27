import React,{useEffect} from 'react'
import { Container,Typography,Button, CircularProgress } from '@mui/material'
import {auth,logOut} from '../config/fire'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
const Dashboard = () => {
    const [user,loading,error]= useAuthState(auth)
    const navigate=useNavigate()
    useEffect(() => {
        if(loading) <CircularProgress/>
        if(!user) navigate('/')
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
        Welcome {user?.displayName}
      </Typography>    
          <Button
            variant="contained"
            color="error"
            style={{ margin: "5%" }}
            type="submit"
            onClick={logOut}
          >
            LogOut
          </Button>
    </Container>
  )
}

export default Dashboard