import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { SiAircanada } from 'react-icons/si'
import { Home, About, Contact, Algolia, NewsApi, Error } from './components'
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
      <StyledLink to="/about">About Us</StyledLink>
      <StyledLink to="/contact">Contact Us</StyledLink>
      <StyledLink to="/algolia">Algolia</StyledLink>
      <StyledLink to="/newsapi">News Api</StyledLink>
    </div>
  )
}

function Routers() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/algolia" component={Algolia} />
      <Route path="/newsapi" component={NewsApi} />
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
            Learn React <SiAircanada />
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
