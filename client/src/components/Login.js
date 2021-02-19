import axios from "axios";
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './Login.css';

export function Login (props){
    const [data, setData] = useState({
        email: "",
        password: "",
        error: null,
      });
    
      const { email, password, error } = data;
    
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setData({ ...data, error: null });
          const res = await axios.post(
            "/auth/login",
            { email, password },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          //on succesful login store token in local storage
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
                    Log IN
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form>
                            <div class="form-group">
                                <label class="form-control-label">Email</label>
                                <input 
                                 className="form-control"
                                 type="email"
                                 name="email"
                                 value={email}
                                 onChange={handleChange}
                                />
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input
                                  className="form-control"
                                  type="password"
                                  name="password"
                                  value={password}
                                  onChange={handleChange}
                                i/>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                <Link className="sign" to="/signup">Dont Have Account ? SignUP</Link>
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <button type="submit" class="btn btn-outline-primary" onClick={handleSubmit}>LOGIN</button>
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
