import { useState, useEffect } from 'react'

const URL = 'https://jobs.github.com/positions.json?search='

// https://github.com/public-apis/public-apis
function GihubJobs() {
  const [query, setQuery] = useState('node')
  const [list, updateList] = useState([])

  useEffect(() => {
    // TODO: CORS policy: No 'Access-Control-Allow-Origin' header
    async function getGihubJobs() {
      const res = await fetch(`${URL}${query}`)
      const json = await res.json()
      updateList(json)
    }
    getGihubJobs()
  }, [query])

  const handleChange = event => {
    const updateUrl = `${URL}${event.target.value}`
    setQuery(updateUrl)
  }

  return (
    <>
      <form>
        <input type="text" value={query} onChange={handleChange} />
      </form>
      <ul>
        {list.map(({ id, url, type, company, location, title, created_at: createAt }) => (
          <li key={id}>
            <h4 className="App-link" href={url}>
              {title} - {createAt.split(' ').slice(0, 3).join(' ')}
            </h4>
            <p>
              {company} - {type}, {location}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default GihubJobs
