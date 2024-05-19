import './App.css'
import RecordsComponent from './component/flashcarddata'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Demo from './component/demo'
import Login from './component/login'
import MyAlxCards from './component/myAlxCards'
import RegistrationForm from './component/register'
// import 
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/" element={<RecordsComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myalxcards" element={<MyAlxCards />} />
        {/* <Route path="/register" element={<RegistrationForm />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
