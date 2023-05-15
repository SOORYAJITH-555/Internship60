import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigator = () => {
  return (
    <div>
       <AppBar>
            <Toolbar>
                <Typography align='left' sx={{flexGrow: 1}}>StudentApp </Typography>
                <Button ><Link to={'/'} style={{color:'white'}}> Home </Link></Button>
                <Button ><Link to={'/enter'} style={{color:'white'}}> Add </Link></Button>
                <Button ><Link to={'/see'} style={{color:'white'}}> View </Link></Button>
            </Toolbar>
        </AppBar>
        <Typography variant='h2'> About Student</Typography>
        
    </div>
  )
}

export default Navigator