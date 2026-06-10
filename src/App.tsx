
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Project from './pages/Project';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
// import { useEffect } from 'react';




function App() {


  // const navigate = useNavigate()


  // useEffect(() => {
  //   const hash = window.location.hash;
  
  //   console.log(hash, 'hash');
  
  //   if (!hash) return;
  
  //   const params = new URLSearchParams(hash.replace('#', ''));
  
  //   console.log(params);
    
  //   const type = params.get('type');
  //   const accessToken = params.get('access_token');
  //   console.log(type, accessToken);
  
  //   if (type === 'recovery' && accessToken) {
  //     navigate(`/reset-password?access_token=${encodeURIComponent(accessToken)}`, {
  //       replace: true,
  //     });
  //   }
  // }, [navigate]);


  return (
    <Routes>
      <Route path='/' element = {<Navigate to={'/project'} replace />}/>

      <Route path='/sign-up' element= {<SignUp/>}/>
      <Route path='/login' element= {<Login/>}/>
      <Route path='/project' element= {<Project/>}/>
      <Route path='/forgot-password' element= {<ForgotPassword/>}/>
      <Route path='/reset-password' element= {<ResetPassword/>}/>


      <Route path='*' element = {<Navigate to={'/sign-up'} replace />}/>
    </Routes>
  );
}

export default App;
