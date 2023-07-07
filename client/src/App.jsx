import { useState } from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import { AuthProvider } from './context/authContext';

function App() {



  return (
    <>
    {/* Creaando el router */}
    <AuthProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<>HomePage</>}></Route>
    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
    <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
    <Route path='/tasks' element={<>HomePage</>}></Route>
    <Route path='/add-task' element={<>HomePage</>}></Route>
    <Route path='/task/:id' element={<>HomePage</>}></Route>
    <Route path='/profile' element={<>HomePage</>}></Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>


    </>
  )
}

export default App
