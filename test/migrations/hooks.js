import { useState, useEffect, useReducer } from 'react'

const useRef = useState({ current: initialValue })[0]

export function useFetch(uri) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error] = useState()

  useEffect(() => {
    if (!uri) return
    fetch(uri)
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
  }, [uri])

  return {
    data,
    loading,
    error,
  }
}
