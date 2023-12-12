export interface ListadoProductos {
    productoId: number;
    detalleProducto: string;
    estado: boolean;
    precio: number;
}


export interface Favoritos {
    productoId: number;
    detalleProducto: string;
    precio: number;
}

export const products = [
    {productoId:1,detalleProducto: 'Product 1', precio: 19.99, estado: true },
    {productoId:2,detalleProducto: 'Product 2', precio: 29.99, estado: true },
    // Add more products as needed
    // Add more products as needed
];

export interface IUseProduct{
    productos: ListadoProductos[],
    setProductos: React.Dispatch<React.SetStateAction<ListadoProductos[]>>,
    isAddedToCart: boolean,
    setIsAddedToCart: React.Dispatch<React.SetStateAction<boolean>>,
    productosSeleccionados: Favoritos[],
    setProductosSeleccionados: React.Dispatch<React.SetStateAction<Favoritos[]>>,
    InitProductos: () => void,
    addToCart: (producto: ListadoProductos) => void,
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>,
    cantidad: number,
    setCantidad: React.Dispatch<React.SetStateAction<number>>



}