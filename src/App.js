import './App.css'
import Algolia from './components/algolia'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <main>
        <Algolia />
      </main>
    </div>
  )
}

export default App
