import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Home() {

  const navigate = useNavigate();

  function changeName(){
    localStorage.removeItem('username')
    navigate('/');
  }
  type username = string

  const username = localStorage.getItem('username');


  return(
    <>
      <Navbar />
      <div className="home-cente">
        <h1> Hello, {username ? username : navigate('/') } </h1> <br />      
        <input type="submit" onClick={changeName} value="Change username" />
      </div>
      
    </>
   
  )
}
