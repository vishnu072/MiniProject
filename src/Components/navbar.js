import './navbar.css';
import { Link } from 'react-router-dom';
import Topbar from './topbar';
function NavBar() {
  return (
    <>
    <div>
      <Topbar/>
    </div>
   
    
    <div>
    {/* <h2 href="#"> KCHS Instructions </h2>
    <nav>
      <li><a href="#">Main</a> </li> 
      <li><a href="#">404</a> </li>
      <li><a href="#">Contact</a> </li>
    </nav> */}
    <section className="hero">
      <div className="background-image" style={{backgroundImage: 'url(https://wallpaper-house.com/data/out/7/wallpaper2you_139824.jpg)'}} />
      <div className="hero-content-area">
        <h1>KCHS INTITUTION</h1>
        <h3>Opening doors through literacy. Don’t be mean behind the screen.</h3>
        <Link to="/Courses" className="btn">Contact Us</Link>
      </div>
    </section>
    <section className="destinations">
      <h3 className="title">For more information:</h3>
      <p>Content no:9876543211</p>
      <hr />
    </section>
    {/* <section className="contact">
      <h3 className="title">Join our newsletter</h3>	
      <p>Information will go here(if any)</p>
      <hr />
      <form>
        <input type="email" placeholder="Email" />
        <a href="#" className="btn">Subscribe now</a>
      </form>
    </section> */}
    {/* <footer>
      <ul>
        <li><a href="#"><i className="fa fa-twitter-square" /></a></li>
        <li><a href="#"><i className="fa fa-facebook-square" /></a></li>
        <li><a href="#"><i className="fa fa-snapchat-square" /></a></li>
        <li><a href="#"><i className="fa fa-pinterest-square" /></a></li>
        <li><a href="#"><i className="fa fa-github-square" /></a></li>
      </ul>
      <p>Made by Pardeep Singh</p>
      <p>No attribution required. you can remove this footer.</p>
    </footer> */}
  </div>
  </>
  );
}

export default NavBar;