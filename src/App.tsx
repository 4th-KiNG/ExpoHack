import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthPage, LeadsPage, LoginPage, MainPage } from './pages'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/leads' element={<LeadsPage />} />
      <Route path='/auth' element={<AuthPage/>}  />
      <Route path='/login' element={<LoginPage/>}  />
    </Routes>
    </>
  )
}

export default App
