import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Proctedroute from './components/auth/Proctedroute';
import { LayoutLoader } from './components/layout/Loaders';

const Home=lazy(()=>import("./pages/Home"))
const Login=lazy(()=>import("./pages/Login"))
const Groups=lazy(()=>import("./pages/Group"))
const Chart=lazy(()=>import("./pages/Chart"))
const NotFound=lazy(()=>import("./pages/NotFounds"))
const Profile=lazy(()=>import("./components/specific/Profile"))


let user=false
;

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Suspense fallback={<div><LayoutLoader/></div>}>

   <Routes>
    <Route element={<Proctedroute user={user}/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/Groups' element={<Groups/>}/>
    <Route path="/chart/:id" element={<Chart/>}/>
    <Route path="/profile" element={<Profile/>}/>
    </Route>
    
    
    <Route path="/login" element={<Proctedroute user={!user} redirect='/'>
      <Login/>
    </Proctedroute>
    }/>
    
    <Route path='*' element={<NotFound/>}/>
   </Routes>
   </Suspense>
   
   </BrowserRouter>
   </>
  )
}

export default App
