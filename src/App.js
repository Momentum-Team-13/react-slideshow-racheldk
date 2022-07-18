import './App.css'
import * as data from './film-data.json'
import './Slideshow'
import Slideshow from './Slideshow'
import 'materialize-css/dist/css/materialize.css'


function App() {
  return (
    <div className="slides-app">
      <Slideshow />
    </div>
  )
}

export default App
