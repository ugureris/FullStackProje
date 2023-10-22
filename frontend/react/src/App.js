import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import AddNewCar from './components/AddNewCar';
import EditCar from './components/EditCar';
import MyCar from './components/MyCar';
import Main from './components/Main'
import SideMenu from "./components/HelperComponents/SideMenu";
import {Route, Routes} from "react-router-dom";

function App() {


    return (
        <div>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Main/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/register' element={<SignUp/>}></Route>
                    <Route path='/mainPage' element={<MyCar/>}></Route>
                    <Route path='/account' element={<ChangePassword/>}></Route>
                    <Route path='/addCar' element={<AddNewCar/>}></Route>
                    <Route path='/editCar/*' element={<EditCar/>}></Route>
                </Routes>
            </div>
        </div>

    );

}

function PasswordInput() {}

export default App;
