import React from 'react'
import "./navbar.css"
import favorit from "./logo/nav_heart.png"
import cart from './logo/nav_cart.png'
import filtre_icon from "./logo/filtre_icon.png"

function NavBar() {
  return (
    <header>
      <section id="NavBar">
        <div class="nav1">
          <div class="logo">Pedro<span>Store</span></div>

          <div class="search">
            <input type="text" placeholder="recherche de chaussure"/>
              <button>Search</button>
          </div>
          <div class="icons">
            <div class="icon">
              <a href="">
                <img src={favorit}
                  alt="this is an item favorit " />
                  <p>2</p>
              </a>
            </div>
            <div class="icon">
              <a href="">
                <img src={cart}
                  alt="this is a cart "/>
                  <p>4</p>
              </a>
            </div>
          </div>
        </div>



      </section>
      <section id="Navbar2">
        <div class="nav2">
          <div></div>

          <div class="links">
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Contact</a>
          </div>
          <div class="filter">
            <img src={filtre_icon}
              alt="this is a filter icon"/>
              <p>Filter</p>
          </div>
       
          {/* <div class="login">
            <img class="login_icon" src="../images/logo/login_icon.png"
              alt="this is a login icom"/>
              <a href="">Deconnecter</a>
          </div> */}
        </div>
      </section>
    </header>
  )
}

export default NavBar