// src/pages/CartPage.tsx
import React, { useContext, useEffect, useState } from 'react';
import { Link, redirect } from 'react-router-dom';

import './CartPage.css';
import Navbar from '../component/Navbar';
import { useProduct } from '../hooks/useProduct';
import { ProductoContext } from '../context/ProductoContext';
import { Favoritos, products } from '../interfaces/interface';

const CartPage: React.FC = () => {
  const [productosSeleccionados, setProductosSeleccionados] = useState<Favoritos[]>([])

  const {cantidad,setCantidad} = useContext(ProductoContext)

  if (productosSeleccionados.length > 0) {
    const Conteoproductos = productosSeleccionados.map(e => e.productoId).reduce((call, item) => {

      
    return item + call
    })
    setCantidad(Conteoproductos);

    console.log("Conteoproductos", Conteoproductos)
  }

  useEffect(() => {
    console.log("productosSeleccionados en carrito ", productosSeleccionados)

    const Data = localStorage.getItem("Productos");
    console.log("Data", Data)
    setProductosSeleccionados(JSON.parse(Data as unknown as any));


  }, [])


  

  
  useEffect(() => {

    
  }, [productosSeleccionados])






  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h2>Carrito de Compras</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>

              {productosSeleccionados.map((item) => (
                <tr key={item.productoId}>
                  <td>{item.detalleProducto}</td>
                  <td>{cantidad}</td>
                  <td>${item.precio.toFixed(2)}</td>
                  <td>${(item.precio * 2).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CartPage;
