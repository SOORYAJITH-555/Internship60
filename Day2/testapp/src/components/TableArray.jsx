import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const TableArray = () => {
    var [names,setNames] = useState (['Soorya','Sreehari','Edu','Sijil'])
  return (
    <div>
        <Typography variant='h3'>Table and Array</Typography> 
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red"}}>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index) => {
                        return(
                            <TableRow key={index}>
                                <TableCell>{value}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default TableArray