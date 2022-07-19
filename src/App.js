import React, { useEffect, useState } from 'react'
import './App.css'
// import * as data from './film-data.json'
import Slideshow from './Slideshow'
import 'materialize-css/dist/css/materialize.css'


function App() {
  const [data, setData] =useState(null);
  const getData=()=>{
    fetch('film-data.json'
    ,{
      headers : {
        'Content-Type': 'appliation/json',
        'Accept': 'application/json'
      }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      })
  }

  useEffect(() =>{
    getData()
  }, [])

  return (  
    <div>
      {/* <Slideshow /> */}
      {data? <Slideshow FILMS={data}/> : <h3>Loading...</h3> }
    </div>
  )
}

export default App
