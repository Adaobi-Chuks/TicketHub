import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route,NavLink} from 'react-router-dom';
import Login from "./component/auth/Login";
import Navbar from "./component/pages/Navbar";
import Register from './component/auth/Register';
import Home from "./component/pages/Home";
import BuyTicket from "./component/pages/BuyTicket";
import CreateEvent from "./component/pages/CreateEvent";
import Event from "./component/pages/Event";
import Transaction from "./component/pages/Transaction";
import Checking from "./component/pages/Checking";
import LandingScreen from './component/pages/LandingScreen';
import DashBoard from './DashBoard';
import CreateTime from './component/pages/CreateTime';
import CreateSocial from './component/pages/CreateSocial';
import CreateImage from './component/pages/CreateImage';
import ChooseTicket from './component/pages/ChooseTicket';
import SingleTicket from './component/pages/SingleTicket';
import GroupTicket from './component/pages/GroupTicket';
import CheckOut from './component/pages/CheckOut';
import Summary from './component/pages/Summary';



function App() {
  

  
  return (
    <Router>
      
      <DashBoard>
      <Navbar/> 
      </DashBoard>
      
      
     
      <Routes>
      <Route index element={<LandingScreen/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="Register" element={<Register/>} />
      <Route path="Home" element={<Home/>} />
      <Route path="BuyTicket" element={<BuyTicket/>} />
      <Route path="CreateEvent" element={<CreateEvent/>} />
      <Route path="CreateTime" element={<CreateTime/>} />
      <Route path="CreateSocial" element={<CreateSocial/>} />
      <Route path="CreateImage" element={<CreateImage/>} />
      <Route path="ChooseTicket" element={<ChooseTicket/>} />
      <Route path="Event" element={<Event/>} />
      <Route path="CheckOut" element={<CheckOut/>} />
      <Route path="Transaction" element={<Transaction/>} />
      <Route path="SingleTicket" element={<SingleTicket/>} />
      <Route path="GroupTicket" element={<GroupTicket/>} />
      <Route path="Checking" element={<Checking/>} />
      <Route path="Summary" element={<Summary/>} />
      </Routes>
    </Router>
  )
}

export default App