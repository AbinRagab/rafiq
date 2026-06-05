
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/signup';
import Login from './pages/Login';

function App() {


  return (
    <Routes>
      <Route path='/' element = {<Navigate to={'/sign-up'} replace />}/>

      <Route path='/sign-up' element= {<SignUp/>}/>
      <Route path='/login' element= {<Login/>}/>


      <Route path='*' element = {<Navigate to={'/sign-up'} replace />}/>
    </Routes>
  );
}

export default App;
