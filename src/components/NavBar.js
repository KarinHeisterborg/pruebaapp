import CartWidget from "./CartWidget"
import {Link, NavLink} from 'react-router-dom'

function NavBar() {
          return (

              <NavBar>
                  <CartWidget/>
                  <h1 className="titulo" >Mi Feria Home</h1>
                  <nav>
                  <NavLink to= "/categoria/Electronics">Electronics</NavLink>
                  <NavLink to= "/categoria/Jewelry">Jewelry</NavLink>
                  <NavLink to= "/cart">Sopping Cart</NavLink>
                  </nav>
              </NavBar>
          )
}
      
export default NavBar