import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

//Imágenes
import Img1 from '../../assets/product/p-1.jpg';
import Img2 from '../../assets/product/p-2.jpg';
import Img3 from '../../assets/product/p-3.jpg';
import Img4 from '../../assets/product/p-4.jpg';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Googles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
]

const Products = () => {
  return (
    <div>
        <div className="container">
            <div className="grid">
                {/* Sección del header */}
                <Heading title="Nuestros productos" subtitle={"Explorar productos"}/>
                {/* Sección del body */}
                <ProductCard data={ProductsData}/>
                <ProductCard data={ProductsData}/>
            </div>
        </div>
    </div>
  )
}

export default Products