import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../stateProvider/StateProvider';
import { getBasketTotal } from '../reducer/reducer';
import {useNavigate} from 'react-router-dom'

function Subtotal() {

  const history = useNavigate()
  const handleClick= ()=>{
    history('/payment')
  }
  const [{basket}, dispatch] = useStateValue()
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value)=>(

          <>
            <p>Subtotal ({basket.length} items):<strong>{value}</strong></p>
            <small className='subtotal_gift'>
              <input type="checkbox"/>This order contains a gift
            </small>
           </>
            )}  
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
      />

      <button onClick={handleClick} className='subtotal_button'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal