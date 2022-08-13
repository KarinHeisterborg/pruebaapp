import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import Navbar from './NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from './Cart';


const App = () => {
  return (
          <>
          <Navbar/>
          <ItemListContainer greeting="Producto x"/>
          <ItemDetailContainer/>
          <Cart/>
          <Route path='/' element={<ItemListContainer greeting={"Producto x"}/>}/>
          <Route path='/categoria/:id' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element = {<ItemDetailContainer/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <footer>
               <p>footer</p>
          </footer>
          </>
  )
}
export default App;
