import React ,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import "./Navbar.css";

export function Navbar(props) {
  const[isLoggedIn,setisLoggedIn] = useState(false);
   useEffect(() => {
    if (localStorage.getItem("token")) {
    console.log("logged in")
    setisLoggedIn({isLoggedIn:true});
    console.log(isLoggedIn);
  }
  }, [5]);
  
  const logout = () => {
    localStorage.removeItem("token");
    console.log("logged out");
    setisLoggedIn(false);
    //props.history.push("/login");
    if (localStorage.getItem("token")) {
      console.log("Abhi bhi logged in")
    }
  };


  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-nav">
      <Link to="/"><img src="https://www.qlbc.org/images/cache/61f54c67a16763008cbc72c40a2f5098_w2000_h650_cp.jpg" alt="logo" className="logo"/></Link>
    <Link class="navbar-brand" to="/">Lets Learn Together</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li>
        <div class="dropdown">
            <button class="btn btn-sec dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </button>
            <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                <li class="dropdown-submenu">
                  <Link  class="dropdown-item" tabindex="-1" to="/datastructurealgorithm/datastructure">Data Structure And Algorithms</Link>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><Link className="signd" tabindex="-1" to="/datastructurealgorithm/datastructure">Data Structure</Link></li>
                    {/*<li class="dropdown-submenu">
                     <Link class="dropdown-item signd" to="#">Even More..</Link>
                      <ul class="dropdown-menu">
                          <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                            <li class="dropdown-submenu"><Link class="dropdown-item" to="#">another level</Link>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
  </ul>
                          </li>
                            <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                      </ul>
  </li>*/}
                    <li class="dropdown-item"><Link  className="signd" to="/datastructurealgorithm/algorithms">Algorithm</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="/datastructurealgorithm/competitiveprogramming">Competitive Programming</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="/datastructurealgorithm/c++">C++</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="/datastructurealgorithm/other">Others</Link></li>
                  </ul>
                </li>
                <li class="dropdown-divider"></li>
                <li class="dropdown-submenu">
                  <Link  class="dropdown-item" tabindex="-1" to="/webdevelopment/reactjs">Web Development</Link>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><Link tabindex="-1" to="/webdevelopment/reactjs">ReactJS</Link></li>
                  {/*  <li class="dropdown-submenu">
                      <Link class="dropdown-item" to="#">Even More..</Link>
                      <ul class="dropdown-menu">
                          <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                            <li class="dropdown-submenu"><Link class="dropdown-item" to="#">another level</Link>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                            </ul>
                          </li>
                            <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                      </ul>
</li>*/}
                    <li class="dropdown-item"><Link  className="signd" to="/webdevelopment/mern">M.E.R.N</Link></li>
                    <li class="dropdown-item"><Link  className="signd" to="/webdevelopment/css">C.S.S</Link></li>
                    <li class="dropdown-item"><Link  className="signd" to="/webdevelopment/js">Java Script</Link></li>
                    <li class="dropdown-item"><Link  className="signd" to="/webdevelopment/other">Others</Link></li>
                  </ul>
                </li>
                <li class="dropdown-divider"></li>
                <li class="dropdown-submenu">
                  <Link  class="dropdown-item"  className="signd" tabindex="-1" to="/datascience/machinelearning">Data Science</Link>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><Link  className="signd" tabindex="-1" to="/datascience/machinelearning">Machine Learning</Link></li>
                   {/* <li class="dropdown-submenu">
                      <Link class="dropdown-item" to="#">Even More..</Link>
                      <ul class="dropdown-menu">
                          <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                            <li class="dropdown-submenu"><Link class="dropdown-item" to="#">another level</Link>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                            </ul>
                          </li>
                            <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                      </ul>
</li>*/}
                    <li class="dropdown-item"><Link className="signd" to="/datascience/deeplearning">Deep Learning</Link></li>
                    <li class="dropdown-item"><Link className="signd" to="/datascience/mlwithweb">Machine With Website</Link></li>
                    <li class="dropdown-item"><Link className="signd" to="/datascience/python">Python</Link></li>
                    <li class="dropdown-item"><Link className="signd" to="/datascience/other">Others</Link></li>
                  </ul>
                </li>
                <li class="dropdown-divider"></li>
                <li class="dropdown-submenu">
                  <Link  class="dropdown-item" tabindex="-1" to="/cloud/aws">Cloud</Link>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><Link className="signd" tabindex="-1" to="/cloud/aws">AWS</Link></li>
                    {/*<li class="dropdown-submenu">
                     <Link class="dropdown-item signd" to="#">Even More..</Link>
                      <ul class="dropdown-menu">
                          <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                            <li class="dropdown-submenu"><Link class="dropdown-item" to="#">another level</Link>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
  </ul>
                          </li>
                            <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                      </ul>
  </li>*/}
                    <li class="dropdown-item"><Link  className="signd" to="/cloud/heroku">Heroku</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="/cloud/gcp">GCP</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="/cloud/azure">Azure</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="/cloud/other">Others</Link></li>
                  </ul>
                </li>
                <li class="dropdown-divider"></li>
                <li class="dropdown-submenu">
                  <Link  class="dropdown-item"   tabindex="-1" to="/gatesubject/operatingsystem">Gate Subject</Link>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><Link className="signd" tabindex="-1" to="/gatesubject/operatingsystem">Operating System</Link></li>
                    {/*<li class="dropdown-submenu">
                     <Link class="dropdown-item signd" to="#">Even More..</Link>
                      <ul class="dropdown-menu">
                          <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                            <li class="dropdown-submenu"><Link class="dropdown-item" to="#">another level</Link>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
  </ul>
                          </li>
                            <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                      </ul>
  </li>*/}
                    <li class="dropdown-item"><Link  className="signd" to="/gatesubject/dbms">DBMS</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="/gatesubject/oops">Oops</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="/gatesubject/computernetwork">Computer Network</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="/gatesubject/other">Others</Link></li>
                  </ul>
                </li>
                <li class="dropdown-divider"></li>
                <li class="dropdown-submenu">
                  <Link  class="dropdown-item" className="signd"  tabindex="-1" to="/others/appdevelopment">Others</Link>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><Link className="signd" tabindex="-1" to="/others/appdevelopment">App development</Link></li>
                    {/*<li class="dropdown-submenu">
                     <Link class="dropdown-item signd" to="#">Even More..</Link>
                      <ul class="dropdown-menu">
                          <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                            <li class="dropdown-submenu"><Link class="dropdown-item" to="#">another level</Link>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
                                <li class="dropdown-item"><Link to="#">4th level</Link></li>
  </ul>
                          </li>
                            <li class="dropdown-item"><Link to="#">3rd level</Link></li>
                      </ul>
  </li>*/}
                    <li class="dropdown-item"><Link  className="signd" to="/others/docker">Docker</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="/others/git">Git</Link></li>
                    <li class="dropdown-item"><Link   className="signd" to="others/other">Others</Link></li>
                  </ul>
                </li>
              </ul>
        </div>
        </li>
        {isLoggedIn ? 
          <li>
          <button className="btn btn-sign" data-toggle="modal" data-target="#myModal" style={{color:"white"}} onClick={logout}>Logout</button>
        </li>
        :
        <li>
         <button className="btn btn-sign" data-toggle="modal" data-target="#myModal"><Link className="sign" to="/login">SignUp/SignIn</Link></button>
       </li>  
}
        <li>
          <button className="btn btn-sign"><Link className="sign" to="/addresource">
            <i className="fa fa-plus" style={{marginRight:"2px"}}></i>Add Your Resource</Link></button>
        </li>
      </ul>
    {/*  <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search any topic" aria-label="Search"/>
        <button class="btn btn-sec my-2 my-sm-0" type="submit">Search</button>
</form>*/}
    </div>
  </nav>
  </div>
  );
}
