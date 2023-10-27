import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Movie from "./page/Moive"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
