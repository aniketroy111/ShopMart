import React, { useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Paper } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import InputForm from './InputForm';
import { useState, } from 'react';

import { commerce } from '../../lib/commerce';


const AddressForm = ({ checkoutToken,next }) => {
    
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingStates, setShippingStates] = useState([]);
    const [shippingState, setShippingState] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();
    
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const states = Object.entries(shippingStates).map(([code, name]) => ({ id: code, label: name }));
    // const countryyy = ["India","America","Austaliya","Nepal"];

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        console.log(countries);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);

    }
    const fetchShippingStates = async (countryCode) => {
        const { States } = await commerce.services.localeListShippingSubdivisions(countryCode);
        console.log(States);
        setShippingStates(States);
        setShippingState(Object.keys(States)[0]);

    }
    
    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);

    useEffect(() => {
        if(shippingCountry)fetchShippingStates(shippingCountry);
    }, [shippingCountry]);


    return (
        <>
            <FormProvider {...methods}>
                <Typography variant="h6" gutterBottom>Shipping Address</Typography>
                <form onSubmit={methods.handleSubmit((data)=> next({...data}))}>
                    <Grid container spacing={3}>
                        <InputForm required name='firstname' label='First Name' />
                        <InputForm required name='lastname' label='Last Name' />
                        <InputForm required name='address' label='Address' />
                        <InputForm required name='email' label='Email' />
                        <InputForm required name='city' label='City' />
                        <InputForm required name='Pincode' label='Pincode' />

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)} >
                                {countries.map((country) => {
                                    <MenuItem key={country.id } value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                })}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping State</InputLabel>
                            <Select value={shippingState} fullWidth onChange={(e) => setShippingState(e.target.value)} >
                                {states.map((state) => {
                                    <MenuItem key={state.id } value={state.id}>
                                        {state.label}
                                    </MenuItem>
                                })}
                            </Select>
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={}>
                                    Select Country
                                </MenuItem>
                            </Select>
                        </Grid> */}
                    </Grid>
                    <br/>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Button component={Link} to='/cart' variant="outlined">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>

                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
