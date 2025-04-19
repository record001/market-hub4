import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import ProductFeature from '../component/ProductFeature'

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ProductFeature />
      </main>
    </div>
  )
}

export default HomePage
