import logo from './logo.svg';
import './App.css';
import Navigator from './components/Navigator';
import { Route, Routes } from 'react-router-dom';
import EnterDetalils from './components/EnterDetalils';
import ViewDetails from './components/ViewDetails';

function App() {
  return (
    <div className="App">
     <Navigator/>
     <br/><br/>
     <br/><br/>
     <Routes>
      <Route path='/' element={<Navigator/>} />
      <Route path='/enter' element={<EnterDetalils data={{sname:'',sgrade:''}} method='post'/>}/>
      <Route path='/see' element={<ViewDetails/>}/>
     </Routes>
    </div>
  );
}

export default App;
