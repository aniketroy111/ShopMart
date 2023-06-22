import React from 'react'
import { TextField,Grid } from '@material-ui/core';

const InputForm = ({name,required ,label}) => {
  return (
    <Grid item xs={12} sm={6}>
        <TextField 
            name={name}
            label={label}
            fullWidth
            required={required}
        />
    </Grid>
  )
}

export default InputForm
