import React, { memo, useState } from "react";
import { Favoritos, IUseProduct } from "../interfaces/interface";
import { useProduct } from "../hooks/useProduct";

export const ProductoContext = React.createContext(
    {} as IUseProduct,
  );
  
  
export const ProductoProvider = memo(({children}: {children: JSX.Element | JSX.Element[]}) => {


    const {
        InitProductos,
        addToCart,
        isAddedToCart,
        productos,
        setProductos,
        setIsAddedToCart,
        setToken,
        token,
        productosSeleccionados,
        setProductosSeleccionados,
        cantidad,
        setCantidad


    } = useProduct();
  
    // useEffect(() => {}, []);
  
    return (
      <ProductoContext.Provider
        value={{
            addToCart,
            InitProductos,
            isAddedToCart,
            productos,
            productosSeleccionados,
            setIsAddedToCart,
            setProductos,
            setProductosSeleccionados,
            token,
            setToken,
            cantidad,
            setCantidad,
            
        
        }}>
        {children}
      </ProductoContext.Provider>
    );
  });
  