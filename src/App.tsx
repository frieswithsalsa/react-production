import { Routes } from 'react-router-dom'
import './index.scss'
import MainPage from './pages/MainPage/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'


const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={'/about'} element={<AboutPage />}/>
        <Route path={'/'} element={<MainPage />}/>
      </Routes>
    </div>
  )
}

export default App