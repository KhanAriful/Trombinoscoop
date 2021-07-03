import './App.css'
import PublicRoutes from './routes/publicRoutes'
import PrivateRoutes from './routes/privateRoutes'

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  return isLoggedIn
  ? <PrivateRoutes />
  : <PublicRoutes />
}

export default App;
