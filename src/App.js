import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {CartContextProvider} from './context/CartContext'


function App() {


  return (
    <div className='App'>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenido a Calefacción Oeste'}/>} />  
              <Route path='/item/:id' element={<ItemDetailContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/cart' element={<Cart/>} /> 
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
