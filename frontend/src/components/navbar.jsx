import { Search } from "./search_bar";
import "../css/style.css";
import logo from '../photos/logo.png';

export function Navbar() {
  return (
    <div>
      <div className="w-full flex justify-between py-1 fixed-top navbar">
        <div className="capitalize text-3xl logname">
        <img src={`${logo}`}/> 
        <h1>Pixie</h1>
        </div>
        <Search />
        <div id="options-section">
          <ul className="px-4 lg:flex hidden" style={{marginTop:"-15px"}}>
            <li className="p-4 font-bold text-1xl ">Home</li>
            <li className="p-4 font-bold text-1xl ">Posts</li>
            <li className="p-4 font-bold text-1xl ">Login/SignUp</li>
          </ul>
        </div>
        <div id="mobile-menu" className="text-4xl  lg:hidden block ">
          <h1>&#9776;</h1>
        </div>
      </div>
    </div>
  );
}
