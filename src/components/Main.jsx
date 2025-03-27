import { useState, useEffect } from 'react'
import Filter from './Filter'
import List from './List'

export default function Main({ data }) {
    //genres array
    const [genres, setGenres] = useState(data.map(movie => movie.genre))

    const [filterList, setFilterList] = useState(data)
    const [filter, setFilter] = useState('all')

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
            {/* stampa lista  */}
            <List filterList={filterList} />
            <Filter setFilter={setFilter} filter={filter} genres={genres} />
        </>
    )
}