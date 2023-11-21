
import './App.css'
import Home from "./Pages/HomePage/Home.jsx";
import NavBarLayout from "./Components/NavBar/NavBarLayout.jsx";
import {Route, Routes} from "react-router-dom";
import Login from "./Components/Signup/Login.jsx";
import Register from "./Components/Signup/Register.jsx";
import SideBar from "./Components/DashBoard/SideBar/SideBar.jsx";

function App() {

    return (
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/login'} element={<Login />}/>
                <Route path={'/register'} element={<Register />} />
                <Route path={'/dashboard'} element={<SideBar />} />
            </Routes>
    )
}

export default App
