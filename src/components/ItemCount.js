import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useState } from 'react';
const ItemCount = ({initial, stock, onAdd})=> {

          const [counter, setCounter] = useState(initial)

          const add = () => {

                    if (counter < stock){
                        setCounter(counter+1)
                    }
          }

          const substract = () => {
                    if (counter > 0 ){
                        setCounter(counter-1)
                    }
          }    
          const resetCounter = () => {
                    setCounter(1)
                }

          const addToCart = () => {
                    onAdd(counter)
                }      
          return (
                    <div className='counterContainer'>
                    <ButtonGroup aria-label="Basic example">
                    <Button  variant="primary" size="sm" active onClick={substract}>-</Button><br/>
                    <input value={counter}></input>
                    <Button variant="primary" size="sm" active onClick={add}>+</Button>
                    <Button variant="primary" size="sm" onClick={resetCounter}>Reset</Button>
                    </ButtonGroup>
                    <Button className='agregar' variant="primary" size="lg" onClick={addToCart}>AGREGAR</Button>
                    </div> 
                    
          ) 

}
export default ItemCount