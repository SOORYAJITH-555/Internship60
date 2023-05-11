import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [ pname,setPname ] = useState("Class"); 
    var [ data,setData ] = useState()
    const changeName = ()=>{
        console.log("Clicked");
        setPname(data)
    }
    const readValue = (e)=>{
        setData(e.target.value);
        console.log(data)
    }
  return (
    <div>
        <Typography variant='h3'>Welcome {pname}</Typography>
        <br/><br/>
        <TextField label='name' variant='outlined' onChange={readValue}/>
        <br/><br/>
        <Button variant='contained' onClick={changeName}> Change </Button>
        <br/><br/>
    </div>
  )
}

export default StateBasics