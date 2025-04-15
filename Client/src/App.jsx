
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Collection from './Pages/Shop'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar'
import Frames from './Pages/Frames'
import Acrylic from './Pages/Acrylic'
import WoodenCutouts from './Pages/WoodenCutouts'
import Canvas from './Pages/Canvas'
import BacklightPhoto from './Pages/BacklightPhoto'
import Customize from './Pages/Customize'
import Shop from './Pages/Shop'



function App() {


  return (
  <>
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/Shop" element={<Shop/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
   <Route path='/customize' element={<Customize/>}/>
    <Route path="/product/:productId" element={<Product/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/login" element={<Login/>} />
    <Route path='/frames' element={<Frames/>}/>
    <Route path='/acrylic' element={<Acrylic/>}/>
    <Route path='/Wooden-cutouts' element={<WoodenCutouts/>}/>
    <Route path='/canvas' element={<Canvas/>}/>
    <Route path='/backlight-photo' element={<BacklightPhoto/>}/>
    <Route path="/place-order" element={<PlaceOrder/>} />
    <Route path="/orders" element={<Orders/>} />
    </Routes>
    </BrowserRouter>
  </div>
  </>
  )
}

export default App
