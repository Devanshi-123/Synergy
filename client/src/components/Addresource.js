import React, {useState,useEffect} from "react";
import axios from 'axios';
import {API} from '../config';
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
 /* const [data, setData] = useState({
    URL: "",
    category: "",
    topic: "",
    cost: "",
    type:"",
    level:"",
    error:null
  });*/
  const [URL,setURL] = useState("");
  const [category,setCategory] = useState("other");
  const [subcategory,setSubcategory] = useState("others");
  const [topic,setTopic] = useState("");
  const [description,setDescription] = useState("");
  const [cost,setCost] = useState("Free");
  const [type,setType] = useState("Article");
  const [level,setLevel] = useState("Intermediate");
  const [error,setError] = useState(null); 


  //const { URL,category,topic,cost,type,level,error } = data;

  /*const handleChange = (e) => {
    console.log("change function")
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      '/auth/addresource',
      {URL,category,subcategory,topic,description,cost,type,level},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    props.history.push("/");
  }
   /* try {
      //setData({ ...data, error: null });
      console.log("Hello")
      await axios.post(
        '/auth/addresource',
        {URL,category,topic,cost,type,level},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      props.history.push("/");
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }}*/
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
                        <form method="post">
                            <div class="form-group">
                                <label class="form-control-label">Resource URL</label>
                                <input
                                type="url"
                                name="name"
                                class="form-control"
                                value={URL}
                                onChange={(e) => setURL(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Category to which tutorial belongs:</label>
                                   <select style={{marginLeft:'1rem'}}name="search categories" id="categories" class="grid-80"  value={category}  onChange={(e) => setCategory(e.target.value)}>
                                   <option value="datastructurealgorithm" selected>DataStructure Algorithm</option>
                                    <option value="webdevelopment">Web Development</option>
                                    <option value="datascience">Data Science</option>
                                     <option value="cloud">Cloud</option>
                                      <option value="gatesubject">Gate Subject</option>
                                         <option value="other">Other</option>
                                       </select>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Subcategory to which tutorial belongs:</label>
                                     {category==="datastructurealgorithm"?
                                            <select style={{marginLeft:'1rem'}}name="search subcategories" id="subcategories" class="grid-80"  value={subcategory}  onChange={(e) => setSubcategory(e.target.value)}>
                                            <option value="datastructure" selected>Data Structure</option>
                                            <option value="algorithm">Algorithm</option>
                                            <option value="competitiveprogramming">Competitive Programming</option>
                                            <option value="c++">C++</option>
                                            <option value="others">Others</option>
                                          </select>:
                                          category==="webdevelopment"?
                                          <select style={{marginLeft:'1rem'}}name="search subcategories" id="subcategories" class="grid-80"  value={subcategory}  onChange={(e) => setSubcategory(e.target.value)}>
                                          <option value="reactjs" selected>ReactJS</option>
                                          <option value="mern">M.E.R.N</option>
                                          <option value="css">CSS</option>
                                          <option value="javascript">Java Script</option>
                                          <option value="others">Others</option>
                                        </select>:
                                        category==="datascience"?
                                        <select style={{marginLeft:'1rem'}}name="search subcategories" id="subcategories" class="grid-80"  value={subcategory}  onChange={(e) => setSubcategory(e.target.value)}>
                                        <option value="machinelearning" selected>Machine Learning</option>
                                        <option value="deeplearning">Deep Learning</option>
                                        <option value="mlwithweb">ML With Web</option>
                                        <option value="python">Python</option>
                                        <option value="others">Others</option>
                                      </select>:
                                      category==="cloud"?
                                      <select style={{marginLeft:'1rem'}}name="search subcategories" id="subcategories" class="grid-80"  value={subcategory}  onChange={(e) => setSubcategory(e.target.value)}>
                                      <option value="aws" selected>AWS</option>
                                      <option value="azure">Azure</option>
                                      <option value="gcp">GCP</option>
                                      <option value="heroku">Heroku</option>
                                      <option value="react">Others</option>
                                    </select>:
                                    category==="gatesubject"?
                                    <select style={{marginLeft:'1rem'}}name="search subcategories" id="subcategories" class="grid-80"  value={subcategory}  onChange={(e) => setSubcategory(e.target.value)}>
                                    <option value="operatingsystem" selected>Operating System</option>
                                    <option value="dbms">DBMS</option>
                                    <option value="objectorientedprogramming">Object Oriented Programming</option>
                                    <option value="computernetwork">Computer Network</option>
                                    <option value="others">Others</option>
                                  </select>:
                                   <select style={{marginLeft:'1rem'}}name="search subcategories" id="subcategories" class="grid-80"  value={subcategory}  onChange={(e) => setSubcategory(e.target.value)}>
                                   <option value="appdev" selected>App Development</option>
                                   <option value="docker">Docker</option>
                                   <option value="git">Git</option>
                                   <option value="others">Others</option>
                                   </select>
                                     }

                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Topic</label>
                                <input type="text" class="form-control" value={topic} onChange={(e) => setTopic(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Description</label>
                                <input type="text" class="form-control" value={description} onChange={(e) => setDescription(e.target.value)}/>
                            </div>
                            <div class="form-group row">
                              <div class="col-lg-4">
                                <label class="form-control-label">Cost</label>
                              </div>
                              <div class="col-lg-4">
                                <label class="form-control-label">Free</label>
                                <input type="checkbox" class="form-control" value="Free"  onChange={(e) => setCost(e.target.value)}/>
                              </div>
                              <div class="col-lg-4">
                                <label class="form-control-label">Paid</label>
                                <input type="checkbox" class="form-control" value="Paid"onChange={(e) => setCost(e.target.value)}/>
                                </div>
                            </div>
                            <div class="form-group row">
                              <div class="col-lg-4">
                                <label class="form-control-label">Type</label>
                              </div>
                              <div class="col-lg-4">
                                <label class="form-control-label">Video</label>
                                <input type="checkbox" class="form-control" value="Video"  onChange={(e) => setType(e.target.value)}/>
                              </div>
                              <div class="col-lg-4">
                                <label class="form-control-label">Article</label>
                                <input type="checkbox" class="form-control" value="Article" onChange={(e) => setType(e.target.value)}/>
                                </div>
                            </div>
                            <div class="form-group row">
                              <div class="col-lg-3">
                                <label class="form-control-label">Level</label>
                              </div>
                              <div class="col-lg-3">
                                <label class="form-control-label">Beginner</label>
                                <input type="checkbox" class="form-control" value="Beginner"  onChange={(e) => setLevel(e.target.value)}/>
                              </div>
                              <div class="col-lg-3">
                                <label class="form-control-label">Intermediate</label>
                                <input type="checkbox" class="form-control" value="Intermediate"  onChange={(e) => setLevel(e.target.value)}/>
                                </div>
                                <div class="col-lg-3">
                                <label class="form-control-label">Advance</label>
                                <input type="checkbox" class="form-control" value="Advance"  onChange={(e) => setLevel(e.target.value)}/>
                                </div>
                            </div>

                            <div class="col-lg-12 loginbttm">
                            <div class="col-lg-6 login-btm login-text">
                                <Link className="sign" to="/signup">Thanks For Contributing!!</Link>
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <button type="submit" class="btn btn-outline-primary" onClick={handleSubmit}>SUBMIT</button>
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
