import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthPage, LoginPage, MainPage, SalesPage } from './pages'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/sales' element={<SalesPage />} />
      <Route path='/auth' element={<AuthPage/>}  />
      <Route path='/login' element={<LoginPage/>}  />
    </Routes>
    </>
  )
}

export default App
