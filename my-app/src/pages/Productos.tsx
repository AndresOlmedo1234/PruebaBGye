// src/pages/ProductListPage.tsx
import React from 'react';

import './ProductListPage.css';
import ProductList from '../component/ProductList';
import Navbar from '../component/Navbar';
import { products } from '../interfaces/interface';

const ProductListPage: React.FC = () => {
  

    return (
        <div>
            <Navbar />
            <div className="page-content">
                <h1 className="page-title">Descubre Nuestros Productos</h1>
                <ProductList  />
            </div>
        </div>

    );
};

export default ProductListPage;
