import React from 'react'
import Card from './Card'
import ProductDate from './ProductDate'

export default function ProductItem(props) {
  return (
    <Card className="product-item">
        <ProductDate date={props.date}/>
        <div className="product-item_description">
            <h2>{props.title}</h2>
        </div>
    </Card>
  )
}
