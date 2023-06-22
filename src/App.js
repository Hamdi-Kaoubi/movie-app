import Navigation from './Components/Navigation';
import Home from './Components/Home';
import { Data } from './Assets/Data';
import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import {Route,Routes} from "react-router-dom"
import MovieTrailer from './Components/MovieTrailer';
import { Button } from 'react-bootstrap';
import PrivateRoute from './Components/PrivateRoute';

function App() {
 const [search, setSearch] = useState("");
 const [value, setValue] = useState(0);
 console.log(value)
 const [clique , setClique]=useState(false)
  return (
    <div className="App">
      <Navigation setSearch={setSearch}  setValue={ setValue} />
      <Button onClick={()=>setClique(!clique)}>Show-Hide</Button>
      <Routes>
      <Route path='/Home' element={<Home  />}/>
      <Route path='/Movies' element={
        <PrivateRoute clique={clique} >
        <AddMovie Data={Data} search={search} value={value}/>
        </PrivateRoute> } />
      <Route  path="/Trailer/:id" element={<MovieTrailer Data={Data}/>} />
      </Routes>
    </div>
  );
}

export default App;
