import './App.css'
import Algolia from './components/algolia'
import GihubJobs from './components/github'
import LoadComponent from './components/LoadContent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <main>
        {/* <Algolia /> */}
        {/* <GihubJobs /> */}
        <LoadComponent />
      </main>
    </div>
  )
}

export default App
