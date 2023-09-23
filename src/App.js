import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CheckoutSuccess from './components/CheckoutSuccess';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<NotFound />} />  
          <Route path='/' exact element={<Home />} />
          <Route path='/checkout-success' exact element={<CheckoutSuccess />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
