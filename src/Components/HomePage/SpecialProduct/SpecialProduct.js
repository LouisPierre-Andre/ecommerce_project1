import React from 'react'
import "./special-product.css"

import img1 from "./images/apple-iphone.jpg"

function SpecialProduct() {
  return (
      <section id='SpecialProduct'>
          <h1>Special Products</h1>
          <div className='spacial_containt'>
              
        
              

              
              <div className='single_product ' >
                  <div className='img-box'>
                      <img className='img-fluid' src={img1} alt='this is a product' />
                  </div>
                  <div className='special'>
                      <h6>This is the name </h6>
                      {/* <p>{description}</p> */}
                      <star>⭐⭐⭐⭐</star>
                      <div className="off ">Acheter</div>
                      <p>$33 -- <span>  999 $</span></p>
                      <p><span>93</span> days <span>3J:</span> <span>21h:</span><span>10min</span></p>
                      <div>Product Quantity : <span>34</span></div>
                  </div>
              </div>

              <div className='single_product ' >
                  <div className='img-box'>
                      <img className='img-fluid' src={img1} alt='this is a product' />
                  </div>
                  <div className='special'>
                      <h6>This is the name </h6>
                      {/* <p>{description}</p> */}
                      <star>⭐⭐⭐⭐</star>
                      <div className="off ">Acheter</div>
                      <p>$33 -- <span>  999 $</span></p>
                      <p><span>93</span> days <span>3J:</span> <span>21h:</span><span>10min</span></p>
                      <div>Product Quantity : <span>34</span></div>
                  </div>
              </div>

              <div className='single_product ' >
                  <div className='img-box'>
                      <img className='img-fluid' src={img1} alt='this is a product' />
                  </div>
                  <div className='special'>
                      <h6>This is the name </h6>
                      {/* <p>{description}</p> */}
                      <star>⭐⭐⭐⭐</star>
                      <div className="off ">Acheter</div>
                      <p>$33 -- <span>  999 $</span></p>
                      <p><span>93</span> days <span>3J:</span> <span>21h:</span><span>10min</span></p>
                      <div>Product Quantity : <span>34</span></div>
                  </div>
              </div>
              
              <div className='single_product ' >
                  <div className='img-box'>
                      <img className='img-fluid' src={img1} alt='this is a product' />
                  </div>
                  <div className='special'>
                      <h6>This is the name </h6>
                      {/* <p>{description}</p> */}
                      <star>⭐⭐⭐⭐</star>
                      <div className="off ">Acheter</div>
                      <p>$33 -- <span>  999 $</span></p>
                      <p><span>93</span> days <span>3J:</span> <span>21h:</span><span>10min</span></p>
                      <div>Product Quantity : <span>34</span></div>
                  </div>
              </div>
              
              <div className='single_product ' >
                  <div className='img-box'>
                      <img className='img-fluid' src={img1} alt='this is a product' />
                  </div>
                  <div className='special'>
                      <h6>This is the name </h6>
                      {/* <p>{description}</p> */}
                      <star>⭐⭐⭐⭐</star>
                      <div className="off ">Acheter</div>
                      <p>$33 -- <span>  999 $</span></p>
                      <p><span>93</span> days <span>3J:</span> <span>21h:</span><span>10min</span></p>
                      <div>Product Quantity : <span>34</span></div>
                  </div>
              </div>

              <div className='single_product ' >
                  <div className='img-box'>
                      <img className='img-fluid' src={img1} alt='this is a product' />
                  </div>
                  <div className='special'>
                      <h6>This is the name </h6>
                      {/* <p>{description}</p> */}
                      <star>⭐⭐⭐⭐</star>
                      <div className="off ">Acheter</div>
                      <p>$33 -- <span>  999 $</span></p>
                      <p><span>93</span> days <span>3J:</span> <span>21h:</span><span>10min</span></p>
                      <div>Product Quantity : <span>34</span></div>
                  </div>
              </div>
                            


          </div>
      </section>
  )
}

export default SpecialProduct