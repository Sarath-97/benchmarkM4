import '../css/navbar.css'





const Navbar =()=>{
    return(

        <ul className="nav page-nav justify-content-center " >
        <li className="nav-item ">
          <a className="nav-link  active "  href="#">trending<span className="sr-only">(current)</span></a>
         
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">podcast</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Moods And Genres</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">new releases</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">discover</a>
        </li>
    
      </ul>



    )





}
export default Navbar