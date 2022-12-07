import React from 'react'
import './Payment.css'
import {useStateValue} from '../stateProvider/StateProvider'

import CheckoutProduct from '../checkout/CheckoutProduct';
import {Link} from 'react-router-dom'

function Payment() {

const[{basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>

    <div className='payment_container'>
      <h1 className='payment_heading'>Checkout(<Link to='/checkout'>{basket?.length} items</Link>)</h1>

        {/* Payment section - delivery address*/}
        <div className='payment_section'>
            <div className='payment_title'>
              <h3>Delivery Address</h3>
            </div>

              <div className='payment_address'>
                <p>{user?.email}</p> 
                <p>123 Bhaktapur, Nepal</p>
              </div>
        </div>


        {/* Payment section - Review Item*/}
        <div className='payment_section'>
          <div className='payment_title'>
              <h3>Review items and delivery</h3>
          </div>


              <div className='payment_items'>
                {basket.map(item =>(
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
        </div>

        {/* Payment section - Payment method*/}
        <div className='payment_section'></div>
          <div className='payment_title'>
              <h3>Payment Method</h3>


          </div>
    </div>
    </div>
  )
}

export default Payment