import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="text-red-500">Hello World</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App