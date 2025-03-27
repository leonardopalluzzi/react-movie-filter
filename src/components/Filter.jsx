export default function Filter({ setFilter, filter, genres }) {
    return (
        <div className="mb-3">
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

        </div >
    )
}