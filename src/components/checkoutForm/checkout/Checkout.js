import React, { useEffect, useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  Typography,
  CircularProgress,
  Divider,
  Button,
  StepLabel,
} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({cart}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const classes = useStyles();

  useEffect(()=>{
    const generateToken = async () =>{
      try {
        const checkoutToken = await commerce.checkout.generateToken(cart.id,{type:'cart'});
        console.log(checkoutToken);
        setCheckoutToken(checkoutToken);
      } catch (error) {
        
      }
    }
    generateToken();
  },[cart])

  const Confirmation = () => {
    return <div>confirmation</div>;
  };

  const Form = () => (activeStep === 0 ? <AddressForm checkoutToken={checkoutToken}  /> : <PaymentForm />);

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper className={classes.stepper} activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
