export default function Add({ setNewMovieTitle, newMovieTitle, setNewMovieGenre, newMovieGenre, handleSubmit }) {
    return (
        <>
            <div className="container">
                <p className="d-inline-flex gap-1">
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Add a new movie
                    </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <form onSubmit={e => handleSubmit(e)}>
                            <input
                                className="form-control mb-4"
                                type="text"
                                placeholder="insert film title"
                                onChange={e => setNewMovieTitle(e.target.value)}
                                value={newMovieTitle}
                                required
                            />
                            <input
                                className="form-control mb-4"
                                type="text"
                                placeholder="insert film genre"
                                onChange={e => setNewMovieGenre(e.target.value)}
                                value={newMovieGenre}
                                required
                            />
                            <button type="submit" className="btn btn-success">Add</button>
                        </form>

                    </div>
                </div>
            </div>

        </>

    )
}