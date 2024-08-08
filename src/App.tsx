import { Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
import { LeadsPage, MainPage, ProfilePage} from './pages'
import { observer } from 'mobx-react-lite'
import { Layout } from './shared/components'
import GeneratorPage from './pages/GeneratorPage/GeneratorPage'


const App = observer(() => {
  const {} = useNavigate()

  // if (userStore.user.login === ""){
  //   return(
  //     <>
  //     <AuthLayout>
  //       <Routes>
  //         <Route path='/auth' element={<AuthPage/>}  />
  //         <Route path='/login' element={<LoginPage/>}  />
  //       </Routes>
  //     </AuthLayout>
  //     </>
  //   )
  // }
  
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/leads' element={<LeadsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/generator' element={<GeneratorPage />} />
      </Routes>
    </Layout>
    </>
  )
})

export default App
