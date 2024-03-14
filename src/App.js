
import './App.css';
import SignUp from './components/sign-up/SignUp';
import LogIn from './components/log-in/LogIn';
import { Route, Routes } from 'react-router-dom'
import Account from './components/account/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from "./protected/ProtectedRoute"

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
