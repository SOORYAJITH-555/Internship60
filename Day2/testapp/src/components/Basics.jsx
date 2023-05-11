import { Button, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const Basics = () => {
  return (
    <div>
        <h1>Sooryajith</h1>
        <br/>
        <input type="text" placeholder='name'/>
        <Typography variant='h1'color='#d50000'>Sooryajith</Typography>
        <br/><br/>
        <TextField label='name' variant='standard'/>
        <br /><br/>
        <Button variant="text" color="secondary">Text</Button>
        <br/><br/>
        <Button variant="contained" color="success" >Contained</Button>
        <br/><br/>
        <Button variant="outlined" color="error">Outlined</Button>
    </div>
    
  )
}

export default Basics