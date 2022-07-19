import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.css'
import SlideSortDate from './SlideSortDate'
import SlideSortMisc from './SlideSortMisc'

function Slideshow ({FILMS}) {
    let FILMSBYDATE = FILMS.slice()

    FILMSBYDATE.sort(function (a, b) {
        return a.release_date - b.release_date;
        })
    
    const [sortByDate, setSortByDate] = useState(false)

    return (
        <div>

            { sortByDate ? (
                <div>
                <button className="btn-small" onClick={() => setSortByDate(!sortByDate)}
                >Sort in random order</button> 
                <button className="btn-small disabled" onClick={() => setSortByDate(!sortByDate)}
                >Sort by release date: older to newer</button> 
                </div>
            ) : (
                <div>
                <button className="btn-small disabled" onClick={() => setSortByDate(!sortByDate)}
                >Sort in random order</button> 
                <button className="btn-small" onClick={() => setSortByDate(!sortByDate)}
                >Sort by release date: older to newer</button> 
                </div>
            )}

            { sortByDate ? (
                <SlideSortDate FILMS={FILMSBYDATE}/>
            ) : (
                <SlideSortMisc FILMS={FILMS}/>
            )}
        </div>
    )
}

export default Slideshow