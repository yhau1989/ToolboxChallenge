import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SearchNav from './components/searchNav'
import LastSearch from './components/lastSearch'

function App() {
  const [list, setList] = useState([]);
  
  const controlList = (_obj) => {
    setList([...list,_obj])
  }

  return (
    <div>
      <SearchNav process={(text) => controlList(text)}></SearchNav>
      <LastSearch lastReservers={list}></LastSearch>
    </div>
  );
}

export default App;
