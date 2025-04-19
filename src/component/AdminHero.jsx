import React, { useEffect, useRef, useState } from 'react'
import { API } from '../utils/url'

function AdminHero() {
 
  const[hero, setHero] = useState(null)
    useEffect(()=>{
      getData()
    }, [])
    async function getData(){
      let fetchData = await fetch(API+"/headers")
      let json  = await fetchData.json()
      setHero(json.data[0])
    }

    let nomi = useRef()
    let rasm = useRef()

    function handleSubmit(e) {
      e.preventDefault()
      let ready = {
        title:nomi.current.value,
        imageLink:rasm.current.value
      }

      fetch(API+"/headers/66b59e7bf1aebf64ce6b0eb4", {
        method:"PUT", 
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(ready)
        // https://i.postimg.cc/qv8ZGgKS/Background-Image-1-1-1.png
      })
    }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} className='form'>
        <h2>Admin Hero</h2>
        <input ref={nomi} type="text" defaultValue={hero?.title} />
        <input ref={rasm} type="text" defaultValue={hero?.imageLink} />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default AdminHero
