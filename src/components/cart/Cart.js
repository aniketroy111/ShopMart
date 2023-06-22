import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './cartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQty ,handleRemoveFromCart,handleEmptyCart}) => {
   

    const isEmpty = !cart?.line_items?.length === 0;

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            Right now you have no items in your shopping car,
            <Link to='/' className={classes.link}>start adding some</Link>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {
                    cart?.line_items?.map((item) => (
                        <>
                            <Grid item xs={12} sm={4} key={item.id}>
                                <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                            </Grid>
                        </>
                    ))
                }
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h5">
                    Subtotal:{ cart?.subtotal?.formatted_with_symbol }
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Card</Button>
                    <Button component ={Link} to='/checkout' className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )
    if(!cart) return 'Loading...'

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4">Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart;


