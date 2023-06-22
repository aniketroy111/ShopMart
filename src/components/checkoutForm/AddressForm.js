import React, { useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Paper } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import InputForm from './InputForm';
import { useState, } from 'react';

import {commerce} from '../../lib/commerce';

const AddressForm =  ({checkoutToken}) => {

    const [shippingCountries,setShippingCountries] = useState([]);
    const [shippingCountry,setShippingCountry] = useState('');
    const [shippingStates,setShippingStates] = useState([]);
    const [shippingState,setShippingState] = useState('');
    const [shippingOptions,setShippingOptions] = useState([]);
    const [shippingOption,setShippingOption] = useState('');

    const fetchShippingCountries = async (checkoutToken) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutToken);
        console.log(countries);
        setShippingCountries(countries);
    }

    useEffect(()=>{
        fetchShippingCountries(checkoutToken.id);
    },[]);


    return (
        <>
            <FormProvider>
                <Typography variant="h6" gutterBottom>Shipping Address</Typography>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <InputForm required name='firstname' label='First Name' />
                        <InputForm required name='lastname' label='Last Name' />
                        <InputForm required name='address' label='Address' />
                        <InputForm required name='email' label='Email' />
                        <InputForm required name='city' label='City' />
                        <InputForm required name='Pincode' label='Pincode' />

                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={}>
                                    Select Country
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping State</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Country
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={}>
                                    Select Country
                                </MenuItem>
                            </Select>
                        </Grid> */}
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
