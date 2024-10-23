import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Login from './Login';
 import Home from './Home';
 import Registration from './Registration';
 import Data from './Data'
 const WebNavigator: React.FC = () => {
   return (
     <Router>
       <Routes>
         <Route path="/" element={<Login/>} />
         <Route path="/Registration" element={<Registration/>} />
         <Route path="/Home" element={<Home/>} />
         <Route path="/Data" element={<Data/>} />
       </Routes>
     </Router>
   );
 }
 export default WebNavigator;