
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Project from './pages/Project';

function App() {


  return (
    <Routes>
      <Route path='/' element = {<Navigate to={'/sign-up'} replace />}/>

      <Route path='/sign-up' element= {<SignUp/>}/>
      <Route path='/login' element= {<Login/>}/>
      <Route path='/project' element= {<Project/>}/>


      <Route path='*' element = {<Navigate to={'/sign-up'} replace />}/>
    </Routes>
  );
}

export default App;
