import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {productList} from '../mockdata/product'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function Main(props){
    const classes = props.classes;
    const addtocart = () => {

    }
    return(
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {
              productList.map((product)=>(
              <Grid item xs={12} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://source.unsplash.com/random"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" onClick={addtocart}>
                      Add to cart
                    </Button>
                    <Button size="small" color="primary">
                      Add to Wishlist
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              ))
            }
          </Grid>
        </Container>
      </main>
    )
}
