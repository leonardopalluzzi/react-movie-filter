import { useState, useEffect } from 'react'
import Filter from './Filter'
import List from './List'

export default function Main({ data }) {
    //genres array
    const [genres, setGenres] = useState(data.map(movie => movie.genre))

    //genre filters
    const [filterList, setFilterList] = useState(data)
    const [filter, setFilter] = useState('all')

    //title filters
    const [title, setTitle] = useState('')

    function handleSearch(query) {
        console.log('bella chicco');
        console.log(query);
        setTitle(query)
        setFilterList(data.filter(item => {
            if (item.title.toLowerCase().includes(query.toLowerCase())) {
                return {
                    ...item
                }
            }
        }))

    }

    useEffect(() => {
        if (filter !== 'all') {
            setFilterList(data.filter(item => item.genre == filter))
        } else {
            setFilterList(data)
        }
    }, [filter])

    return (
        <>
            {/* stampa lista  */}
            <List filterList={filterList} />
            <Filter title={title} handleSearch={handleSearch} setFilter={setFilter} filter={filter} genres={genres} />
        </>
    )
}