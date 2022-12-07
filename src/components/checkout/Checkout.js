import React from 'react'
import './Checkout.css'
import Subtotal from '../subtotal/Subtotal'
import { useStateValue } from '../stateProvider/StateProvider'
import CheckoutProduct from './CheckoutProduct'


function Checkout() {
  const[{basket}, dispatch] = useStateValue()
  return (
    <div>
<div className='checkout'>
  <div className='checkout_left'>
      <img className='checkout_add' src='https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>

        <div>
          <h2 className='checkout_title'>
          Your Shopping Basket
          </h2>


              
            {basket.map(item=>(
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

          {/* Checkout Product*/}
          {/* Checkout Product*/}
          {/* Checkout Product*/}
          {/* Checkout Product*/}
          {/* Checkout Product*/}
         



      </div>
    </div>
    <div className='checkout_right'>
        <Subtotal/>
    </div>
</div>

    </div>
  )
}

export default Checkout