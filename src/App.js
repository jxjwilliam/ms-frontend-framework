import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { SiAircanada } from 'react-icons/si'
import { Home, About, Algolia, GihubJobs, LoadComponent, Error } from './components'

function navbars() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About Us </Link>
      <Link to="/menu1">Menu1</Link>
      <Link to="/menu2">Menu2</Link>
      <Link to="/menu3">Menu3</Link>
    </div>
  )
}

function routers() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/menu1" component={Algolia} />
      <Route path="/menu2" component={GihubJobs} />
      <Route path="/menu3" component={LoadComponent} />
      <Route component={Error} />
    </Switch>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

function App() {
  return (
    <>
      <Helmet title="ms frontend framework" />
      <div className="App">
        <header className="App-header">
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React <SiAircanada />
          </a>
          <StyledLink>
            <nav className="App-nav">{navbars()}</nav>
          </StyledLink>
        </header>
        <main>{routers()}</main>
      </div>
    </>
  )
}

export default App
