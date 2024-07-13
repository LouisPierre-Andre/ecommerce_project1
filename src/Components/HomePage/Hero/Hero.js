import React from 'react'
import "./hero.css"
import shoes1 from "./images/air1.png"
import shoes2 from "./images/img (5).png"
import shoes3 from "./images/img (3).png"
import shoes4 from "./images/nike.png"
import shoes5 from "./images/img (12).png"


function Hero() {
  return (



      <section class="Welcom">
          <div>
              <div class="text_section">
                  <h5>Best-shoes-offer</h5>
                  <h1>Super value deals</h1>
                  <h2>On All Products</h2>
                  <p>Save more with coupons & up to <span>70%</span> off</p>
                  <button>Shop now</button>
              </div>
              <div class="image_section">
                  <div>
                      <div>
                          <div class="img_box"></div>
                          <img src={shoes1} alt="This is a shoes" />
                              <button>Buy Now</button>
                              <p>$149</p>
                              <div class="background"></div>
                      </div>

                      <div>
                          <div class="img_box"></div>
                          <img src={shoes2} alt="This is a shoes"/>
                              <button>Buy Now</button>
                              <p>$149</p>
                              <div class="background"></div>
                      </div>

                      <div>
                          <div class="img_box"></div>
                          <img src={shoes3} alt="This is a shoes"/>
                              <button>Buy Now</button>
                              <p>$149</p>
                              <div class="background"></div>
                      </div>

                      <div>
                          <div class="img_box"></div>
                          <img src={shoes4} alt="This is a shoes"/>
                              <button>Buy Now</button>
                              <p>$149</p>
                              <div class="background"></div>
                      </div>

                      <div>
                          <div class="img_box"></div>
                          <img src={shoes5} alt="This is a shoes"/>
                              <button>Buy Now</button>
                              <p>$149</p>
                              <div class="background"></div>
                      </div>

                      <div>
                          <div class="img_box"></div>
                          <img src={shoes1} alt="This is a shoes"/>
                              <button>Buy Now</button>
                              <p>$149</p>
                              <div class="background"></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>




  )
}

export default Hero