import React from 'react'
import "./nike-shoes.css"
import img1 from './images/nike (10).png'
import img3 from './images/nike (12).png'
import img4 from './images/nike (13).png'
import img5 from './images/nike (14).png'

function NikeShoes() {
  return (

      <div id='nike'>
      <section class="products nike">
          <h2>Our Nike shoes !</h2>
          <div class="product_list">
              <div>
                  <div class="img_box">
                      <img src={img1} alt="This is a shoes"/>
                  </div>
                  <h3>Nike Shoes, Original</h3>
                  <p>Organic cotton, good quality</p>
                  <p>⭐⭐⭐⭐⭐ (811)</p>
                  <div>
                      <button>Acheter</button>
                      <p>$ 788<sup>.99</sup></p>
                  </div>
              </div>

              <div>
                  <div class="img_box">
                      <img src={img3} alt="This is a shoes"/>
                  </div>
                  <h3>Nike Shoes, Original</h3>
                  <p>Organic cotton, good quality</p>
                  <p>⭐⭐⭐⭐⭐ (121)</p>
                  <div>
                      <button>Acheter</button>
                      <p>$ 689<sup>.99</sup></p>
                  </div>
              </div>

              <div>
                  <div class="img_box">
                        <img src={img4} alt="This is a shoes" />
                  </div>
                  <h3>Nike Shoes, Original</h3>
                  <p>Organic cotton, good quality</p>
                  <p>⭐⭐⭐⭐⭐ (211)</p>
                  <div>
                      <button>Acheter</button>
                      <p>$ 795<sup>.99</sup></p>
                  </div>
              </div>

              <div>
                  <div class="img_box">
                          <img src={img5} alt="This is a shoes" />
                  </div>
                  <h3>Nike Shoes, Original</h3>
                  <p>Organic cotton, good quality</p>
                  <p>⭐⭐⭐⭐⭐ (423)</p>
                  <div>
                      <button>Acheter</button>
                      <p>$ 685<sup>.99</sup></p>
                  </div>
              </div>
          </div>
          </section>
      </div>



  )
}

export default NikeShoes