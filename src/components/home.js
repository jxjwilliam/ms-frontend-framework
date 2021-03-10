import React from 'react'
import styled from 'styled-components'
import { useFetch, MyTheme, ThemeContext, themes } from '../react-use'

const Button = styled('button')`
  margin: 2rem;
  padding: 2rem;
  color: white;
  background: rebeccapurple;
`

const Ul = styled('ul')`
  margin: 2rem 0;
`
const Li = styled('li')`
  list-style: none;
  line-height: 2;
`

export default function () {
  return (
    <MyTheme>
      <ShowData />
      <ThemeSwitch />
    </MyTheme>
  )
}

function ShowData() {
  const { loading, error, data = [] } = useFetch('https://hn.algolia.com/api/v1/search?query=react')

  if (error) return <p>Error!</p>
  if (loading) return <p>Loading...</p>

  const [themeName] = React.useContext(ThemeContext)

  return (
    <div style={{ backgroundColor: themes[themeName].background }}>
      <Ul>
        {data?.hits?.map(item => (
          <Li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </Li>
        ))}
      </Ul>
    </div>
  )
}

function ThemeSwitch() {
  const [themeName, setThemeName] = React.useContext(ThemeContext)
  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light')
  }
  return (
    <div>
      <Button type="button" value={themeName} onClick={toggleTheme}>
        Toggle Theme ({themeName})
      </Button>
    </div>
  )
}
