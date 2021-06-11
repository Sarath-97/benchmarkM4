import './App.css';
import SideNavbar from '../src/components/SideNavbar'
import Navbar from '../src/components/Navbar';
import Player from '../src/components/Player';
import Main from '../src/components/Main'





function App() {
  return (
    <div className="App">
      
        
         
       
        <Navbar/>
        <SideNavbar/>
       <Main />
      <Player/>
    </div>
  );
}

export default App;
