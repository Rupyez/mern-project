import React from 'react'
import './Home.css'
import Products from '../Products/Products'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''/>
              

              {/* First Row */}
            <div className='home_row'>
            <Products 
                id='100'
                title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                price={1500} 
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>
                

                <Products 
                id='101'
                title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                price={1500} 
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"/>
                
                

            </div> 


            {/* Second Row */}
            <div className='home_row'>
                <Products 
                id='102'
                title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' 
                price={1500} 
                rating={2}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
                
                <Products 
                id='103'
                title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' 
                price={1500} 
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
                

                <Products 
                id='104'
                title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                price={1500} 
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>
                


                
            </div> 
            
                {/* Third Row */}
            <div className='home_row'>
            <Products 
                title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor' 
                price={1500} 
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>
                
               
            </div> 

        </div>
    </div>
  )
}

export default Home