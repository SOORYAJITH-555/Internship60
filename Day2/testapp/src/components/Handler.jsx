import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Handler = () => {
    var[val,setVal] = useState({id:'',name:'',age:''});
    const inputHandler = (e)=>{
        const{name,value} = e
        .target
        setVal((val)=>({...val,[name]:value}))
    }
        
  return (
    <div>
         <br/><br/>
        <TextField label='id' variant='outlined' name='id' value={val.id} onChange={inputHandler}/>
        <br/><br/>
        <TextField label='name' variant='outlined' name='name' value={val.name} onChange={inputHandler}/>
        <br/><br/>
        <TextField label='age' variant='outlined' name='age' value={val.age} onChange={inputHandler}/>
        <br/><br/>
        {val.id}
        <br/><br/>
        {val.name}
        <br/><br/>
        {val.age}
    </div>
  )
}

export default Handler