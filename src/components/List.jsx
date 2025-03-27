export default function List({ filterList }) {
    return (
        <ul >
            {
                filterList.map((movie, i) => (
                    <li key={`${movie.title}_${movie.genre}`}>{movie.title}</li>
                ))
            }
        </ul >
    )
}