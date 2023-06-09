import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './cartItem/CartItem';


const Cart = ({ cart }) => {

    const isEmpty = !cart.total_items?.length === 0;

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            Right now you have no items in your shopping car,start adding items !
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {
                    cart.line_items?.map((item) => (
                        <>
                            <Grid item xs={12} sm={4}>
                                <CartItem item={item}/>
                            </Grid>
                        </>
                    ))
                }
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h5">
                    Subtotal:{ cart.subtotal?.formatted_with_symbol }
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Card</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4">Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart


