
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddBlog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
