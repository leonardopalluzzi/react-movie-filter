import { useState, useEffect } from 'react'
import Filter from './Filter'
import List from './List'
import Add from './Add'

export default function Main({ data }) {
    //array copy
    const [movies, setMovies] = useState(data)

    const genresList = []

    function updateGenres() {

        movies.forEach(item => {
            if (!genresList.includes(item.genre)) {
                genresList.push(item.genre)
            }
        })
    }

    updateGenres()


    //genres array
    const [genres, setGenres] = useState(genresList)

    //genre filters
    const [filterList, setFilterList] = useState(movies)
    const [filter, setFilter] = useState('all')

    //title filters
    const [title, setTitle] = useState('')

    //add new movie
    const [newMovieTitle, setNewMovieTitle] = useState('')
    const [newMovieGenre, setNewMovieGenre] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if (newMovieGenre && newMovieTitle) {
            setMovies([...movies, {
                title: newMovieTitle,
                genre: newMovieGenre
            }])

            if (!genresList.includes(newMovieGenre)) {
                genresList.push(newMovieGenre)
            }
            setNewMovieTitle('')
            setNewMovieGenre('')

            setGenres(genresList)
            console.log(movies);
            console.log(genres);
        } else {
            alert('Per favore compialre i campi richesti')
        }



    }

    useEffect(() => {

        setFilterList(movies.filter(item => {
            return (
                (item.genre.toLowerCase().includes(filter.toLowerCase()) || filter == 'all')
                &&
                item.title.toLowerCase().includes(title.toLowerCase())

            )
        }))
    }, [filter, title, movies])

    return (
        <>
            <Add handleSubmit={handleSubmit} newMovieGenre={newMovieGenre} setNewMovieGenre={setNewMovieGenre} newMovieTitle={newMovieTitle} setNewMovieTitle={setNewMovieTitle} />
            {/* stampa lista  */}
            <Filter title={title} setTitle={setTitle} setFilter={setFilter} filter={filter} genres={genres} />
            <List filterList={filterList} />
        </>
    )
}