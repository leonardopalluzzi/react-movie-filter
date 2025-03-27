export default function Main({ data }) {
    return (
        <>
            <div>main</div>

            <div class="mb-3">
                <label for="" class="form-label">City</label>
                <select
                    class="form-select form-select-lg"
                    name=""
                    id=""
                >
                    <option value="" selected>Select one</option>
                    <option value="">New Delhi</option>
                    <option value="">Istanbul</option>
                    <option value="">Jakarta</option>
                </select>
            </div>



            {/* stampa lista  */}
            <ul>
                {
                    data.map(movie => (
                        <li key={movie.title}>{movie.title}</li>
                    ))
                }
            </ul>
        </>



    )
}