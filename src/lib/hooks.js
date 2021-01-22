import { useState, useEffect, useReducer } from 'react'

const useRef = useState({ current: initialValue })[0]

export function useFetch(url) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error] = useState()

  useEffect(() => {
    if (!url) return
    fetch(url)
      .then(result => result.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(console.log)
  }, [url])

  return {
    data,
    loading,
    error,
  }
}
