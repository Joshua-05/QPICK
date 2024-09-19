import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./components/main/index"
import BusketPage from "./components/busket"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<MainPage/>} />
        <Route path="/busket" element={<BusketPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
