import React from 'react'
import { Typography,Button,Divider } from '@material-ui/core'
import {Elements,CardElement,ElementsConsumer} from '@stripe/react-stripe-js';
import Review from '../checkoutForm/Review';
const PaymentForm = ({checkoutToken,cart}) => {
  return (
    <>
      <Review cart={cart} checkoutToken={checkoutToken}/>
    </>
  )
}

export default PaymentForm
