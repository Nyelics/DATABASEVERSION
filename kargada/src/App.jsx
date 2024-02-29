import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Inventory from './Pages/Inventory/Inventory';
import Setting from './Pages/Setting';
import Messages from './Pages/Messages';
import Account from './Pages/Account';
import Update from './Pages/Update';
import AdminDashboard from './layout/AdminDashboard';
import AdminLogin from './Pages/Login/Login';
//import LandingPage from './Pages/LandingPage/LandingPage';
import './App.css';

import Notfound from './Pages/NotFound';

const App = () => {
    
 
    return (
    
           
        <Routes>
        <Route  element={<AdminDashboard/>}>
          <Route path="admin/dashboard"element={<Dashboard/>}/>
          <Route path ="admin/inventory" element={<Inventory/>}/>
          <Route path ="admin/updates" element={<Update/>}/>
          <Route path="admin/messages" element={<Messages/>}/>
          <Route path="admin/account" element={<Account/>}/>
          <Route path="admin/setting" element={<Setting/>}/>
        </Route>
         <Route path="/" element={<AdminLogin/>}/>
      {/*<Route path="/" element={<LandingPage/>}/>*/}
       <Route path="/*" element={<Notfound />}/>
      </Routes>
        
    );
};

export default App
