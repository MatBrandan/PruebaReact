import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        // <nav className="navbar navbar-expand-lg  mb-5" style={{backgroundColor: "#A90015"}}>
            
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#A90015"}}>
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mt-3 align-self-center">
                        <li className='nav-item'>
                        <Link to={'/'}><h1 className='mx-2' style={{color: "#F2F5FA"}} >Tienda Online</h1></Link>
                        </li>
                        <li className='nav-item'>
                        <Link to={`/category/termotanque`}>
                            <button className='btn btn-secondary mx-sm-2 mx-lg-5'>Termotanques</button>
                        </Link>
                            
                        </li>    
                        <li className='nav-item'>
                        <Link to={`/category/calefactor`}>
                            <button className='btn btn-secondary mx-sm-2 mx-lg-5'>Estufas</button>
                        </Link>
                            
                        </li>
                        <li>
                        <Link to={`/category/cocina`}>
                            <button className='btn btn-secondary mx-sm-2 mx-lg-5'>Cocinas</button>
                        </Link>
                        </li>
                    
                    
                    </ul>
                    <div>
                        <CartWidget />
                    </div>
                </div>
        </nav>
    )
}

export default NavBar