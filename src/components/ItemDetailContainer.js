import Item from "./Item";
import ItemDetail from "./ItemDetail"
import { productos } from "../assets/productos"
import React, { useState, useEffect } from 'react';
import CustomFetch from "../assets/CustomFetch";
import { LinearProgress } from '@mui/material'
import {useParams} from "react-router-dom"
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {

const[listProducts, setListProducts] = useState([])
const[loading, setLoading] = useState(true)     
const{id}= useParams()
  
          useEffect(() => {
            CustomFetch (productos)
            .then (data => {
                  setListProducts(data.find (Item => Item.id===id))
                  setLoading(false)
            })
      }, [id]);   
return (
      <>
        { 
        loading?
        <ItemDetail listProducts= {listProducts} />
        :
        <div><LinearProgress/></div>
      
        }
      </>  
      )
              
}
export default ItemDetailContainer   