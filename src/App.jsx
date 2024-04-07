import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route index element={<LandingScreen/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="Register" element={<Register/>} />
      <Route path="Home" element={<Home/>} />
      <Route path="BuyTicket" element={<BuyTicket/>} />
      <Route path="CreateEvent" element={<CreateEvent/>} />
      <Route path="Event" element={<Event/>} />
      <Route path="Transaction" element={<Transaction/>} />
      <Route path="Checking" element={<Checking/>} />
      </Routes>
    </Router>
  )
}

export default App