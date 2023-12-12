// src/components/ProductCard.tsx
import React, { useContext, useEffect, useState } from 'react';

import './ProductCard.css';
import { ListadoProductos } from '../interfaces/interface';
import { useProduct } from '../hooks/useProduct';
import { ProductoContext } from '../context/ProductoContext';


const ProductCard: React.FC<ListadoProductos> = ({ detalleProducto, estado, precio, productoId }) => {

  const { InitProductos, addToCart, isAddedToCart,productosSeleccionados } = useContext(ProductoContext);

  return (
    <div className={`product-card ${isAddedToCart ? 'added-to-cart' : ''}`}>
      <h3>{detalleProducto}</h3>
      <p className="description">{productoId}</p>
      <p className="price">${precio.toFixed(2)}</p>
      <button className="add-to-cart-button" onClick={() => addToCart({
        productoId: productoId,
        precio: precio,
        estado: estado,
        detalleProducto: detalleProducto
      })}>
        {isAddedToCart }Añadir
      </button>
    </div>
  );
};

export default ProductCard;
