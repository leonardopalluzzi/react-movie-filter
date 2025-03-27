export default function List({ filterList }) {
    return (
        <div className="container list mt-5">
            <ul className="movie_list row gy-4" >
                {
                    filterList.map((movie, i) => (
                        <div className="col-4">
                            <li className="card movie mx-4 p-4" key={`${movie.title}_${movie.genre}`}>
                                <h3>{movie.title}</h3>
                                <span>{movie.genre}</span>
                            </li>
                        </div>

                    ))
                }
            </ul >
        </div>

    )
}