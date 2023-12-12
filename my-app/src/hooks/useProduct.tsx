import React, { useContext, useEffect, useState } from 'react'
import { Favoritos, ListadoProductos, products } from '../interfaces/interface'
import { ProductoContext } from '../context/ProductoContext';

export const useProduct = () => {
    const [productos, setProductos] = useState<ListadoProductos[]>([])
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [cantidad, setCantidad] = useState<number>(0)

    const [productosSeleccionados, setProductosSeleccionados] = useState<Favoritos[]>([])


    const [token, setToken] = useState<string>("")

    const InitProductos = () => {
        try {
            fetch("http://localhost:50452/api/Productoes", {
                method: "GET",
            })
                .then((response) => response.json())
                .then((data) => {
                    setProductos(data);
                    console.log("data", data);
                })
                .catch((error) => console.log(error));

        } catch (error) {
            console.log("Error", error)

        }

    }

    useEffect(() => {
        console.log("Productos Seleccionados en useProduct", productosSeleccionados)
    }, [productosSeleccionados])


    const addToCart = (producto: Favoritos) => {
        // Lógica para agregar al carrito (puedes implementar tu propia lógica aquí)
        console.log("Entra en la funcion", producto)

   


        setProductosSeleccionados([...productosSeleccionados, producto])

        const Data = JSON.stringify(productosSeleccionados)
        localStorage.setItem("Productos", Data)
        // const isExist = productosSeleccionados.some(e => e.productoId === producto.productoId)
        // console.log("isExist", isExist)
        // if (!isExist) {
        // Si el producto ya existe en el carrito, no hacemos nada
        /*   console.log("Entra en no hay coincidencias", producto)
          setProductosSeleccionados([producto]); */



        //} else {
        // Si el producto no existe en el carrito, lo añadimos
        /*     console.log("Entra aqui es existe")
            setProductosSeleccionados(productosSeleccionados)
            console.log("El producto ya está en el carrito", productosSeleccionados); */
        //    }

       
    };

    return {
        setProductos,
        InitProductos,
        addToCart,
        setProductosSeleccionados,
        isAddedToCart,
        productos,
        setIsAddedToCart,
        productosSeleccionados,
        token,
        cantidad,
        setCantidad,
        setToken
    }
}

