import React from 'react'
import "./off-price.css"
import img1 from "./images/off_light (5).jpg"
import img2 from "./images/off_light (6).jpg"
import img3 from "./images/off_light (7).jpg"
import img4 from "./images/off_light (8).jpg"

function OffPrice() {
  return (

      <div id='off_price'>
      <section class="off_price">
          <h2>Get Up To 70% Off</h2>
          <div>
              <div>
                  <div class="desc">
                      <h3>Save</h3>
                      <h1><sup>$</sup>132</h1>
                      <p>Explore Our Furures & Home </p>
                      <p>Fursnishing Range</p>
                  </div>
                  <div class="img_box">
                      <img src={img1} alt="This is a shoes"/>
                  </div>
              </div>

              <div>
                  <div class="desc">
                      <h3>Save</h3>
                      <h1><sup>$</sup>123</h1>
                      <p>Explore Our Furures & Home </p>
                      <p>Fursnishing Range</p>
                  </div>
                  <div class="img_box">
                      <img src={img2} alt="This is a shoes"/>
                  </div>
              </div>

              <div>
                  <div class="desc">
                      <h3>Save</h3>
                      <h1><sup>$</sup>141</h1>
                      <p>Explore Our Furures & Home </p>
                      <p>Fursnishing Range</p>
                  </div>
                  <div class="img_box">
                      <img src={img3} alt="This is a shoes"/>
                  </div>
              </div>

              <div>
                  <div class="desc">
                      <h3>Save</h3>
                      <h1><sup>$</sup>129</h1>
                      <p>Explore Our Furures & Home </p>
                      <p>Fursnishing Range</p>
                  </div>
                  <div class="img_box">
                      <img src={img4} alt="This is a shoes"/>
                  </div>
              </div>

          </div>
      </section>

      </div>

  )
}

export default OffPrice