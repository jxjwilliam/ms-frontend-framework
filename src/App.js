import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { SiAircanada } from 'react-icons/si'
import { Home, Home1, Algolia, NewsApi, Error } from './components'
import './App.css'

const StyledLink = styled(Link)`
  display: inline-block;
  color: white;
  padding: 6px 20px 6px 20px;
  background: transparent;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

function Navbars() {
  return (
    <div>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/algolia">Algolia</StyledLink>
      <StyledLink to="/newsapi">News Api</StyledLink>
      <StyledLink to="/multi-context">Context</StyledLink>
    </div>
  )
}

function Routers() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/algolia" component={Algolia} />
      <Route path="/newsapi" component={NewsApi} />
      <Route path="/multi-context">
        <Home1 signedInUser={{ name: 'williamjxj' }} theme="originIsBlack" />
      </Route>
      <Route component={Error} />
    </Switch>
  )
}

function App() {
  return (
    <>
      <Helmet title="ms frontend framework" />
      <div className="App">
        <header className="App-header">
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React <SiAircanada fill="red" size="2rem" />
          </a>
          <nav className="App-nav">
            <Navbars />
          </nav>
        </header>
        <main>
          <Routers />
        </main>
      </div>
    </>
  )
}

export default App
