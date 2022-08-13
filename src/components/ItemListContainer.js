import ItemCount from "./ItemCount"
import React, { useState, useEffect } from 'react';
import {productos} from '../assets/productos';
import ItemList from "./ItemList";
import CustomFetch from "../assets/CustomFetch";
import {useParams} from "react-router-dom"
import { LinearProgress } from '@mui/material'
import item from "./Item"

const ItemListContainer = ({ greeting }) => {
     
     // const [counter, setCounter] = useState(1)
     // let [cantSeleccionada,setCantSeleccionada] = useState(0)
const[listProducts, setListProducts] = useState([])
const[loading, setLoading] = useState(true)
const {id} = useParams()

//const onAdd = () => {
  //          console.log("On Add")
            


useEffect(() => {
      
      CustomFetch (productos)
      .then(data=>{
              setLoading(false)
              if (id){
                  setListProducts(data.filter(item.category===id))
              }
              else {
                  setListProducts(data)
              }
      })
   
   },[id])

      return(
                <div className="divtarjetas"> 
                <p className="greetingStyle">{greeting}</p>
                {!loading && <LinearProgress/>}
                {loading && <ItemList listProducts={listProducts}/>}

                </div>
          )
}
              

//   <ItemCount stock="5" initial="1" onAdd={onAdd}/>

export default ItemListContainer 