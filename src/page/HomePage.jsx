import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import ProductFeature from '../component/ProductFeature'
import Banner from '../component/Banner'
import Editoril from '../component/Editoril'

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ProductFeature />
        <Banner />
        <Editoril />
      </main>
    </div>
  )
}

export default HomePage
