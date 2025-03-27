import { useState, useEffect } from 'react'
import Filter from './Filter'
import List from './List'

export default function Main({ data }) {
    //array copy
    const [movies, setMovies] = useState(data)

    //genres array
    const [genres, setGenres] = useState(data.map(movie => movie.genre))

    //genre filters
    const [filterList, setFilterList] = useState(movies)
    const [filter, setFilter] = useState('all')

    //title filters
    const [title, setTitle] = useState('')

    useEffect(() => {

        setFilterList(movies.filter(item => {
            return (
                (item.genre.toLowerCase().includes(filter.toLowerCase()) || filter == 'all')
                &&
                item.title.toLowerCase().includes(title.toLowerCase())

            )
        }))
    }, [filter, title])

    console.log(filterList);


    return (
        <>
            {/* stampa lista  */}
            <List filterList={filterList} />
            <Filter title={title} setTitle={setTitle} setFilter={setFilter} filter={filter} genres={genres} />
        </>
    )
}