import React from 'react'

const ProductCard = ({name,price,description}) => {
  return (
    <div>
      <h1> Product name:- {name}</h1>
      <h1>Product price:- {price}</h1>
      <p>Description:- {description}</p>
    </div>
  )
}

export default ProductCard
