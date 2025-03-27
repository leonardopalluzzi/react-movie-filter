import { useState, useEffect } from 'react'
import Filter from './Filter'

export default function Main({ data }) {
    //genres array
    const [genres, setGenres] = useState(data.map(movie => movie.genre))
    const [filterList, setFilterList] = useState(data)
    const [filter, setFilter] = useState('all')
    console.log(genres);
    console.log(filter);

    console.log(data);

    useEffect(() => {
        if (filter !== 'all') {
            setFilterList(data.filter(item => item.genre == filter))
        } else {
            setFilterList(data)
        }
    }, [filter])

    console.log(filterList);



    return (
        <>
            <div>main</div>
            <Filter setFilter={setFilter} filter={filter} genres={genres} />
            {/* <div className="mb-3">
                <label htmlFor="" className="form-label">Select a genre</label>
                <select
                    className="form-select form-select-lg"
                    name=""
                    id=""
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}
                >
                    <option value="all">Select a genre</option>
                    {genres.map((item, i) =>
                        <option key={i} value={item}>{item}</option>
                    )}

                </select>

            </div > */}



            {/* stampa lista  */}
            <ul >
                {
                    filterList.map((movie, i) => (
                        <li key={`${movie.title}_${movie.genre}`}>{movie.title}</li>
                    ))
                }
            </ul >
        </>



    )
}