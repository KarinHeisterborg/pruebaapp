import Item from "./Item"


const ItemList = ({listProducts}) => {
  console.log(listProducts)
  return (

    <section className="items">
    
    {listProducts.map((producto)=>{
      return <Item key={producto.id} producto={producto}/>
      
    })}
    </section>
  )
}

 export default ItemList