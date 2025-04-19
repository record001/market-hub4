import React, { useEffect, useState } from 'react'
import { API } from '../utils/url'
import '../style/hero.css'
function Hero() {
  const[hero, setHero] = useState(null)
  useEffect(()=>{
    getData()
  }, [])
  async function getData(){
    let fetchData = await fetch(API+"/headers")
    let json  = await fetchData.json()
    setHero(json.data[0])
  }
  return (
    <section className='hero' style={{backgroundImage:`url(${hero?.imageLink})`}}>
        <h1>{hero?.title}</h1>
        <button>Shop Collection</button>
    </section>
  )
}

export default Hero
