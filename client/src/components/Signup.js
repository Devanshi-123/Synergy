import React, {useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export function Signup (props){
    const [signeduser,setSigneduser] = useState({})
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        error: null,
      });
    
      const { name, email, password, error } = data;
    
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setData({ ...data, error: null });
          const signedupuser = await axios.post(
            "/auth/signup",
            { name, email, password },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setSigneduser(signedupuser)
          console.log(signeduser)
          const res = await axios.post(
            "/auth/login",
            { email, password },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          localStorage.setItem("token", res.data.token);
          props.history.push("/");
        } catch (err) {
          setData({ ...data, error: err.response.data.error });
        }
      };
    return (
       <div>      
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                    Sign UP
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form method="post">
                            <div class="form-group">
                                <label class="form-control-label">USERNAME</label>
                                <input 
                                type="text"
                                 name="name" 
                                 class="form-control" 
                                 value={name} 
                                 onChange={handleChange}/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Email</label>
                                <input
                                 type="email"
                                  name="email" 
                                  class="form-control"
                                   value={email} 
                                    onChange={handleChange}/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input
                                 type="password"
                                  name="password" 
                                  class="form-control"
                                   value={password}
                                     onChange={handleChange} i/>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                <Link className="sign" to="/login">Already Have Account ? Login</Link>
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <button onClick={handleSubmit} type="submit" class="btn btn-outline-primary">SIGNUP</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>
    </div>
    );
}
