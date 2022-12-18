import { Link } from "react-router-dom"

const Navbar = () => {

 
  return (
    <>
      <header className='header'>
       
            <div className='navlink'>
            <ul className="link f_flex capitalize">
              
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>pages</Link>
              </li>
              <li>
                <Link to='/user'>Profile</Link>
              </li>
              <li>
                <Link to='/login'>Seller Account</Link>
              </li>
              <li>
                <Link to='/track'>My order</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>

            
          </div>
      
      </header>
    </>
  )
}

export default Navbar
