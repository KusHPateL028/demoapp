import React from 'react'
import Card from './Card'
import ProductItem from './ProductItem'

export default function Products(props) {
    console.log(props.items[0].title)
  return (
    <Card className="products">
        <ProductItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
        />
        <ProductItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
        />
        <ProductItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
        />
        <ProductItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
        />
    </Card>
  )
}