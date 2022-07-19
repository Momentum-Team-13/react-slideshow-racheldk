import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.css'
import SlideSortDate from './SlideSortDate'
import SlideSortMisc from './SlideSortMisc'

function Slideshow (props) {
    const {FILMS} = props
    let FILMSBYDATE = FILMS.slice()

    FILMSBYDATE.sort(function (a, b) {
        return a.release_date - b.release_date;
        })
    
    console.log(FILMSBYDATE)    

    console.log(FILMS)

    const [film, setFilm] = useState(FILMS[0])
    const [index, setIndex] = useState(0)
    const [sortByDate, setSortByDate] = useState(false)

    useEffect(() => {
        setFilm(FILMS[index])
    }, [FILMS, index])



    return (
        <div>

            { sortByDate ? (
                 <button className="btn-small" onClick={() => setSortByDate(!sortByDate)}
                 >Sort in random order</button> 
                ) : (
                <button className="btn-small" onClick={() => setSortByDate(!sortByDate)}
                >Sort by release date: older to newer</button> )}

            { sortByDate ? (
                <SlideSortDate FILMS={FILMSBYDATE}/>
            ) : (
               <SlideSortMisc FILMS={FILMS}/>
            )}
        </div>
    )
}

export default Slideshow