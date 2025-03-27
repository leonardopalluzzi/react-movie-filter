export default function Filter({ setFilter, filter, genres, title, handleSearch }) {
    return (
        <div className="container my-3">

            <div className="title_filter">
                <input
                    className="form-control"
                    onChange={(e) => handleSearch(e.target.value, title)}
                    type="text" value={title}
                    placeholder="Search by title" />
            </div>

            <div className="genre_filter">
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
            </div>


        </div >
    )
}