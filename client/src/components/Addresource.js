import React, {useState,useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Login.css';

export function AddResource (props){
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await axios.get("/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(res);
    setUser(res.data);
    console.log(user);
  };
  useEffect(() => {
    getUser();
  }, []);
  if (!localStorage.getItem("token")) {
    console.log("Not logged in")
    props.history.push("/login");
  }
    return (
       <div>      
    <div class="container" style={{marginTop:"-4rem"}}>
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                    Add Your Learning Resource
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form>
                            <div class="form-group">
                                <label class="form-control-label">Resource URL</label>
                                <input type="url" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Category to which tutorial belongs:</label>
                                   <select style={{marginLeft:'1rem'}}name="search categories" id="categories" class="grid-80">
                                   <option value="newyork" selected>Data Structure</option>
                                    <option value="chicago">Algorithm</option>
                                    <option value="losangeles">HTML/CSS/JS</option>
                                     <option value="seattle">Cloud</option>
                                      <option value="dallas">React</option>
                                        <option value="boston">Python</option>
                                         <option value="sanfran">Machine Learning</option>
                                         <option value="boston">App Dev</option>
                                         <option value="sanfran">Other</option>
                                       </select>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">If chosen other please specify topic</label>
                                <input type="text" class="form-control"/>
                            </div>
                            <div class="form-group row">
                              <div class="col-lg-4">
                                <label class="form-control-label">Cost</label>
                              </div>
                              <div class="col-lg-4">
                                <label class="form-control-label">Free</label>
                                <input type="checkbox" class="form-control"/>
                              </div>
                              <div class="col-lg-4">
                                <label class="form-control-label">Paid</label>
                                <input type="checkbox" class="form-control"/>
                                </div>
                            </div>
                            <div class="form-group row">
                              <div class="col-lg-4">
                                <label class="form-control-label">Type</label>
                              </div>
                              <div class="col-lg-4">
                                <label class="form-control-label">Video</label>
                                <input type="checkbox" class="form-control"/>
                              </div>
                              <div class="col-lg-4">
                                <label class="form-control-label">Article</label>
                                <input type="checkbox" class="form-control"/>
                                </div>
                            </div>
                            <div class="form-group row">
                              <div class="col-lg-3">
                                <label class="form-control-label">Level</label>
                              </div>
                              <div class="col-lg-3">
                                <label class="form-control-label">Beginner</label>
                                <input type="checkbox" class="form-control"/>
                              </div>
                              <div class="col-lg-3">
                                <label class="form-control-label">Intermediate</label>
                                <input type="checkbox" class="form-control"/>
                                </div>
                                <div class="col-lg-3">
                                <label class="form-control-label">Advance</label>
                                <input type="checkbox" class="form-control"/>
                                </div>
                            </div>

                            <div class="col-lg-12 loginbttm">
                            <div class="col-lg-6 login-btm login-text">
                                <Link className="sign" to="/signup">Thanks For Contributing!!</Link>
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <button type="submit" class="btn btn-outline-primary">SUBMIT</button>
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
