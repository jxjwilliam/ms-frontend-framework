import React from 'react'
import { useFetch, MyTheme, ThemeContext, themes } from '../react-use'

export default function () {
  return (
    <MyTheme>
      <div className="grid2">
        <ShowData />
        <ThemeSwitch />
      </div>
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
      <ul>
        {data?.hits?.map(item => (
          <li key={item.objectID}>
            <a href={item.url} style={{ color: themes[themeName].foreground }}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ThemeSwitch() {
  const [themeName, toggleTheme] = React.useContext(ThemeContext)

  return (
    <div>
      <button type="button" value={themeName} onClick={toggleTheme}>
        Toggle Theme ({themeName})
      </button>
    </div>
  )
}
