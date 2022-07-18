import React, { useState } from 'react'
import './App.css'
import * as data from './film-data.json'
import Slideshow from './Slideshow'
import 'materialize-css/dist/css/materialize.css'


function App() {
  return (
    <div>
      <Slideshow />
    </div>
  )
}

export default App
