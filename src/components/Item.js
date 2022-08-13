const Item = ({producto}) => {

  return (

    <article className="item">
    <h2>{producto.name}</h2>
    <img alt="product" src={producto.img}/>
    <h2>Precio: ${producto.precio}</h2> 
    </article>
  )
}
export default Item
