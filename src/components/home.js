import React, { useState } from 'react'
import { useFetch, MyReducer, MyRef } from '../react-use'
import MyTheme, { themes, ThemeContext } from '../react-use/use-context-theme'

export default function () {
  const [theme, setTheme] = useState(themes.light)
  const { loading, error, data = [] } = useFetch('https://hn.algolia.com/api/v1/search?query=react')

  if (error) return <p>Error!</p>
  if (loading) return <p>Loading...</p>

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ backgroundColor: theme.background }}>
        <ul>
          {data?.hits?.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ display: 'block' }}>
        <MyTheme />
        <MyReducer />
        <MyRef />
      </div>
    </ThemeContext.Provider>
  )
}
