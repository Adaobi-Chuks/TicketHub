import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';


const DashBoard = ({children}) => {
    const location = useLocation();

    const [show, setShow] = useState(false)
 
    useEffect(() => {
     if (location.pathname === '/Login' || location.pathname === '/Register') {
       setShow(false)
     } else {
       setShow(true)
     }
    },[location])
 
   return (
    <div>{show && children}</div>
   );
 }
export default DashBoard
