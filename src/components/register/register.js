import { useState } from "react";
const url = 'https://calm-bastion-00688.herokuapp.com';

const Register = ({routeChange, setId, setEntries, setDisplayName}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  const nameChange = (event) => {
      setName(event.target.value);
  }
  const emailChange = (event) => {
      setEmail(event.target.value);
      
  }
  const passwordChange = (event) => {
      setPassword(event.target.value);
  }
  const userData = {
    name,
    email,
    password
  }
  
  const onSubmit = () => {
    if(name !== "" || email !== "" || password !== ""){
      fetch(`${url}/auth/register`, {
        method: 'POST',
        headers : {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(userData)
      }).then(data => {
        return data.text();
      }).then(result => {
        const array = JSON.parse(result);
        if(array.message === "User added successfully"){
          setId(array.response.id)
          setEntries(array.response.entries);
          setDisplayName(array.response.name);
          routeChange('home');
        }
      })

    }
  }

    return (
        <div className="card">
        <div className="container">
          <h2>Register</h2>
          <input onChange={nameChange} type="text" className="email" placeholder="Name"></input>
          <label htmlFor="password">Name</label>
          <input onInput={emailChange} type="email" className="email" placeholder="Email"></input>
          <label htmlFor="email">Email</label>
          
          <input onInput={passwordChange} type="password" className="password" placeholder="Password"></input>
          <label htmlFor="password">Password</label>
          <button id="submit" onClick={onSubmit} type="submit">Register</button>
          
        </div>
      </div>
    );
}
 
export default Register;