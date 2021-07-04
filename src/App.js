import './App.css'
import PublicRoutes from './routes/publicRoutes'
import PrivateRoutes from './routes/privateRoutes'
import { useEffect, useState } from 'react'

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
    setisLoggedIn(localStorage.getItem('isLoggedIn'))
  }, [])

  return isLoggedIn === true
  ? <PrivateRoutes />
  : <PublicRoutes />
}

export default App;
