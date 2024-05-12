import './App.css'
import RecordsComponent from './component/flashcarddata'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Demo from './component/demo'
// import 
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/" element={<RecordsComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
