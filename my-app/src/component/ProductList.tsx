// src/components/ProductList.tsx
import React, { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import { ListadoProductos } from '../interfaces/interface';
import { useProduct } from '../hooks/useProduct';
import { ProductoContext } from '../context/ProductoContext';



const ProductList = () => {
  const {productos, InitProductos} = useContext(ProductoContext);

  useEffect(() => {
    InitProductos();
  }, [])

  useEffect(() => {
    console.log("productos",productos)
  }, [productos])
  
  

  return (
    <div className="product-list">
      {productos.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
