import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './pages/Productos';
import Navbar from './component/Navbar';
import ProductListPage from './pages/Productos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationApp from './navigation/Navigation';
import Login from './pages/Login';
import CartPage from './pages/Carrito';
import { ProductoProvider } from './context/ProductoContext';

function App() {
  return (
    <ProductoProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" Component={ProductListPage} />
            <Route path="/login" Component={Login} />
            <Route path="/carrito" Component={CartPage} />
          </Routes>
        </div>
      </Router>
    </ProductoProvider>
  );
}

export default App;
