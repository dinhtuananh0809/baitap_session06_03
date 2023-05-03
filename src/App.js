
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Index from './Components/Index';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Elements from './Components/Elements';

function App() {
  return (
    <div className="App">

      <Link to='/Index'></Link>
      <Link to='/About'></Link>
      <Link to='/Contact'></Link>
      <Link to='/Elements'></Link>
      <Link to='/Service'></Link>
      <Routes>

        <Route path='/Index' element={<Index/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Element' element={<Elements/>}></Route>
        <Route path='/Service' element={<Services/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
