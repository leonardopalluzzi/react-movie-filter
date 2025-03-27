import data from './data/movies'
import Main from './components/Main'
function App() {

  return (
    <>
      <header>
        <h1 className='p-4'>Movies</h1>
      </header>
      <Main data={data} />
    </>
  )
}

export default App
