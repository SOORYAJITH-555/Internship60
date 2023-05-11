import { Typography,TextField} from '@mui/material'
import React, { useState } from 'react'

const TextBasics = () => {
    var [ fname,setFname ] = useState()
    var [ lname,setLname ] = useState()
    const readValue1 = (e)=>{
        setFname(e.target.value);
    }
    const readValue2 = (e)=>{
        setLname(e.target.value);
    }
  return (
    <div>
        <Typography variant='h3'>Your name is {fname} {lname}</Typography>
        <br/><br/>
        <TextField label='First Name' variant='outlined' onChange={readValue1}/>
        <br/><br/>
        <TextField label='Last Name' variant='outlined' onChange={readValue2}/>
        <br/><br/>
    </div>
  )
}

export default TextBasics