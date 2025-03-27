import data from './data/movies'
import Main from './components/Main'
function App() {

  return (
    <>
      <h1>Movies</h1>
      <Main data={data} />
    </>
  )
}

export default App
