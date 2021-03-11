import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
  const linkElement = screen.getByText(/React Playground/i)
  expect(linkElement).toBeInTheDocument()
})

function sum(a, b) {
  return a + b
}
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
