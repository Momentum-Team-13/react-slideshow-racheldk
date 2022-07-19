import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.css'


function SlideSortDate (props) {
    const {FILMS} = props
    // let FILMSBYDATE = FILMS.slice()

    // FILMSBYDATE.sort(function (a, b) {
    //     return a.release_date - b.release_date;
    //     })
    
    // console.log(FILMSBYDATE)    

    // console.log(FILMS)

    const [film, setFilm] = useState(FILMS[0])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setFilm(FILMS[index])
    }, [FILMS, index])



    return (
        <div>
        <div className='card'>
            <h1 className='center-align'>{ film.title }</h1>
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
        {/* <div>
            index: {index}
            date: {film.release_date}
        </div> */}

        <div className='center-align'> 

            { index !== 0 ?
            (<button className='btn-small' onClick={() => {setIndex(0)}}>Start Over</button>
            ): (<button className='btn-small disabled'>Start Over</button> )}

            { index !== 0 ?
            (<button className='btn-small' onClick={() => {setIndex(index - 1)}}>Back</button>
            ): (<button className='btn-small disabled'>Back</button> )}

            { index < 8 ?
            (<button className='btn-small' onClick={() => {setIndex(index + 1)}}>Next</button>
            ): (<button className='btn-small disabled'>Next</button>)} 
        </div>

        </div>
    )
}

export default SlideSortDate