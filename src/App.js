
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import CompletedTask from './component/CompletedTask';

import Navbar from './component/Navbar';
import Todo from './component/Todo';
import Calender from './component/Calender';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Todo></Todo>}></Route>
        <Route path='/completedtask' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/Calender' element={<Calender></Calender>}></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
