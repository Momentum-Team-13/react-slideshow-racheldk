import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.css'


function Slideshow (props) {
    const {FILMS} = props

    const [film, setFilm] = useState(FILMS[0])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setFilm(FILMS[index])
    }, [FILMS, index])

    return (
        <div>

        <div className='card'>
            <h1>{ film.title }</h1>
            <div className='card horizontal'>
                <div className='card-image'>
                    <img src={ film.image } alt="movie poster"></img>
                </div>
                <div className='card-content'>
                    <h2>{ film.original_title }</h2>
                    <p>{ film.release_date }</p>
                    <p>{ film.description }</p>
                </div>
            </div>
        </div>

        <div> 
            <button onClick={() => {setFilm(FILMS[0])}}>Start Over</button>   
            <button onClick={() => {setIndex(index - 1)}}>Back</button>    
            {/* Need to increase the number of the index by 1 */}
            <button onClick={() => {setIndex(index + 1)}}>Next</button>    
        </div>

        </div>
    )
}

export default Slideshow