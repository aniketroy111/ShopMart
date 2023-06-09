import React from 'react'
import { Card, CardMedia, CardActions, Typography, IconButton, CardContent } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';


const Product = ({ product }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={Product.title} />
            <CardContent>
                <div>
                    <Typography variant="h6" >{product.name}</Typography>
                    <Typography variant="h6" >{product.price.formatted_with_symbol}</Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
