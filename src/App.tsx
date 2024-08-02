import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthPage, MainPage } from './pages'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}  />
      <Route path='/main' element={<MainPage/>}  />
    </Routes>
    </>
  )
}

export default App
