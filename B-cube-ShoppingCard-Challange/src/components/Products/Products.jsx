import ProductItem from './ProductItem'
import ProductData from '../ProductData'

function Products(props) {
  
  return (
    <div className='grid grid-cols-3 gap-5 mb-5'> 
      {ProductData.map((Product)=> (
        <ProductItem 
          key={Product.id} Product={Product} 
          basket={props.basket} setBasket={props.setBasket}
        />
      ))}
    </div>
  )
}

export default Products