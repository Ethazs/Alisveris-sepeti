import { useState } from 'react'
import Basket from './components/Basket/Basket'
import Header from './components/Header/Header'
import Products from './components/Products/Products'


function App() {
  const [basket, setBasket] = useState ([])
  const emptyBasket = () => {
    setBasket([])
  }

  return (
    <div className='container mx-auto p-4'>
        <Header basket={basket}/>
        <Products basket={basket} setBasket={setBasket}/>
        <Basket basket={basket} emptyBasket={emptyBasket}/>
    </div>
  )
}

export default App
