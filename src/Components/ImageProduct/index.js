import React from 'react'
import ImageProductWrapper from './ImageProductWrapper'
import { useParams } from 'react-router-dom'
import getProducts from '../../Data/products';

export default function ImageProduct() {
  const params = useParams();

  const products = getProducts();
  const product = products[params.index];

  return (<ImageProductWrapper src={product.img}/>)
}
