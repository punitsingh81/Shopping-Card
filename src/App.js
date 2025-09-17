import { Route, Routes } from "react-router-dom";
import './App.css';
import Navebar from './Components/Navebar';
import Cart from './pages/Cart';
import Home from './pages/Home';

const App = ()=> {
  return (
    <div className="">
      <div className="bg-slate-900">
        <Navebar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
  
}

export default App;
