import React from 'react'
import Hero from './Hero/Hero'
import Categorie from './Categorie/Categorie'
import SpecialProduct from './SpecialProduct/SpecialProduct'
import NikeShoes from './NikeShoes/NikeShoes'
import OffPrice from './OffPrice/OffPrice'

function Home() {
  return (
      <div>
      <Hero />
      <Categorie />
      <SpecialProduct />
      <NikeShoes />
      <OffPrice />
      
       </div>
  )
}

export default Home