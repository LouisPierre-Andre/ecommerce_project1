import React from 'react'
import './categorie.css'
import img1 from './images/catego5.jpg'
import img2 from './images/catego12.webp'
import img3 from './images/catego10.jpg'
import img4 from './images/catego6.jfif'

function Categorie() {
  return (
    
<div id='Categorie'>
          
        < section class="top_categorie" >
            <h2>Shop our top categories</h2>
            <div>
                <div>
                    <img src={img1} alt="This is a shoes" />
                    <h3>Addidas</h3>
                </div>
                <div>
                    <img src={img2} alt="This is a shoes" />
                    <h3>Nike</h3>
                </div>
                <div>
                    <img src={img3} alt="This is a shoes" />
                    <h3>Vans</h3>
                </div>
                <div>
                    <img src={img4} alt="This is a shoes" />
                    <h3>Converse</h3>
                </div>
                {/* <div>
                    <img src={img5} alt="This is a shoes" />
                    <h3>Nike</h3>
              </div>
              <div>
                  <img src={img1} alt="This is a shoes" />
                  <h3>Addidas</h3>
              </div> */}


            </div>
          </section >
</div>


  )
}

export default Categorie