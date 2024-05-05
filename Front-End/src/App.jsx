import './App.css'
import RecordsComponent from './component/flashcarddata'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecordsComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
