import './App.css'
import PublicRoutes from './routes/publicRoutes'
import PrivateRoutes from './routes/privateRoutes'

function App() {
  // Demo
  const isLoggedIn = false

  return isLoggedIn
  ? <PrivateRoutes />
  : <PublicRoutes />
}

export default App;
