import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from '../stateProvider/StateProvider';
 function Header() {
  
  const [{basket}, dispatch] = useStateValue()
  return (
    <>
    <div className='header'>
    
    <Link to="/">
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG8.png' alt=''/>

    </Link>

        <div className='header_search'>
            <input type='text' className='header_searchInput'/>
            <SearchIcon className='header_searchIcon'/>
        </div>


        <div className='header_nav'>
        <Link to ='/login'>
        <div className='header_option'>
                <span className='header_optionLineOne'>Hello</span>

                <span className='header_optionLineTwo'>Sign in</span>
            </div>
        </Link>
           


            <div className='header_option'>
                <span className='header_optionLineOne'>Return</span> 
                <span className='header_optionLineTwo'>&& Orders</span> 

            </div>


            <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span> 
            </div>

            <Link to="/checkout">
              <div className='header_optionBasket'> 
              <ShoppingBasketIcon />
                <span className='header_optionalLineTwo header_baseketCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>

    </div>
    </>
)}

export default Header