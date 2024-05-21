import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetOneProductQuery } from '../../services/productApi';

const Detail = () => {
    const {id}=useParams()
    const{data:product}=useGetOneProductQuery(id);
    const navigate=useNavigate();
  return (
    <div style={{marginTop:"200px",justifyContent:'center',display:'flex'}}>
        {product && (
              <Card sx={{ maxWidth: 345  }}>
              <CardMedia
                sx={{ height: 240 }}
                image={product.data.img}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.data.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.data.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"  onClick={() => navigate(-1)}>Go Back</Button>
              </CardActions>
            </Card>
        )}
    </div>
  )
}

export default Detail