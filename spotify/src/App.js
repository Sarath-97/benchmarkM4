import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css';
import SideNavbar from '../src/components/SideNavbar'
import Navbar from '../src/components/Navbar';
import Player from '../src/components/Player';
import Main from '../src/components/Main'





function App() {
  const [search, setSearch] = useState('linkin park')
  const changeSearchState = (text) => setSearch(text)
  return (
    <div className="App">
      <Navbar />

      <SideNavbar search={search} changeSearchState={changeSearchState} />
      <Main artist={'linkin park'} search={search} changeSearchState={changeSearchState} />
      <Player />
    </div>
  );
}

export default App;
