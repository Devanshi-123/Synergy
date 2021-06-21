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
  const [data, setData] = useState({
    interest:"",
    contribution:"",
    error:null
  });

  const { interest,contribution } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setData({ ...data, error: null });
      console.log("Hello sample")
      await axios.post(
        '/auth/sample',
        {interest,contribution},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      props.history.push("/");
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }
  };
    return (
       <div>      
       <form method="post">
        <input type="text" name="interest" value={interest} onChange={handleChange}>Interest</input>
        <input type="text" name="interest" value={contribution} onChange={handleChange}>Interest</input>
       </form>
    </div>
    );
}
