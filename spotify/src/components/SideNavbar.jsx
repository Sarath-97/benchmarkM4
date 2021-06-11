import {nav,div} from 'react-bootstrap/NAV';
import '../css/sidenav.css'
import SearchBar from './SearchBar'


const SideNavbar = ()=>{
    return(

        <nav className="sidenav ">
        <div className="container ">
        <div className="sidenav-top ">
        <div className=" logo-nav mb-4">
          <img className="img-fluid"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="">
        </img>
        </div>
        <div className="sidenav-top-links ">
          <a href="home.html" ><svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              className="bi bi-house-door mr-2" viewBox="0 0 16 16">
              <path
                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
            </svg> Home</a>
          <a href="artist.html"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              className="bi bi-search mr-2" viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg> 
            <SearchBar/></a>
          <a href="album.html"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              className="bi bi-collection-fill mr-2" viewBox="0 0 16 16">
              <path
                d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
            </svg> Your Library</a>
        </div>
      </div>

    </div>
    <div className="sidenav-bottom ">
      <div>
        <button className="btn-sidenav">sign up</button>
        <button className="btn-sidenav-second">login</button>
      </div>
      <div className="sidenav-botton-links text-center">
        <a href="#">Cookie</a>
        <span className="devider">|</span>
        <a href="#">Privacy</a>
        <a className="d-block" href="#">Policy</a>
      </div>
    </div>
  </nav>








    )
}
export default SideNavbar

