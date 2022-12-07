import React from 'react'
import './Products.css'
import {useStateValue} from '../stateProvider/StateProvider'
function Products({id, title, image, price, rating}) {

const [{basket}, dispatch] = useStateValue();
console.log('this is basket', basket)
  //function for button
const addToBasket =()=>{
  //dispatch the item into the data layer
   dispatch({
    type:'ADD_TO_BASKET',
    item:{
      title:title,
      image:image,
      price:price,
      rating:rating,
    }
   })

}

  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
                <div className='product_rating'>
                {Array(rating).fill().map((_, i)=>(
                  <p>*</p> 
                ))}
                   
                   
                </div>
                
                <img className='product_image' src={image} alt=''/>
                <button className='product_button' onClick={addToBasket}>Add To Basket</button>
        </div>
    </div>
  )
}

export default Products