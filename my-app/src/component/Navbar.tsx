// src/components/Navbar.tsx
import React, { useState } from 'react';

import './Navbar.css';

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">Mi Tienda</div>
      <div className="navbar-links">
        <a href="/">Inicio</a>
        <a href="/carrito">Carrito</a>
        <div className="cart-icon" onClick={toggleCart}>
       
        </div>
      </div>
      {isCartOpen && (
        <div className="cart-summary">
          {/* Aquí puedes mostrar el resumen del carrito */}
          Carrito de compras: ¡Aquí va el resumen!
        </div>
      )}
    </nav>
  );
};

export default Navbar;
