import Card from '@mui/material/Card';

const ItemDetail = ({listProducts})  => {
  return (
   
          <Card>
          <h2>{listProducts.name}</h2>
          <img alt="product" src={listProducts.img}/>
          <h2>Precio: ${listProducts.precio}</h2> 
          <h3>{listProducts.descripcion}</h3>
          </Card>
        )
  
}
export default ItemDetail