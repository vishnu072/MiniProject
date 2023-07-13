// import logo from './logo.svg';
// import './App.css';
import Login from './Login';
// import './Login.css'
import NavBar from './Components/navbar'
import { Route,Routes } from 'react-router-dom';
import Courses from './Components/Courses';
import Signup from './Components/signup';
function App() {
  return (
    <div className="App">
      {/* <h1>hi</h1> */}
       {/* <NavBar/> */}
      {/* <Login />   */}
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/navbar' element={<NavBar/>}></Route>
        <Route path='/Courses' element={<Courses/>}></Route>
        <Route path='/reg' element={<Signup/>}></Route>
        <Route path='/signup' element={<Login/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
