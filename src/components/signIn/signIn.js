import { useState } from "react";
const url = 'http://localhost:8000';
const SignIn = ({routeChange, setId, setEntries, setDisplayName}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const emailChange = (event) => {
    setEmail(event.target.value);
  }
  const passwordChange = (event) => {
    setPassword(event.target.value);
  }
  const userBody = {
    email,
    password
  }
  const onSubmit = () => {
      fetch(`${url}/auth/signin`, {
        method: 'POST',
        headers : {
          "Content-Type": "application/json; charset=utf-8",
        },
        body : JSON.stringify(userBody) 
      }).then(data => {
        return data.text()
      })
      .then(result => {
        const array = JSON.parse(result);
        if(array.message === "User signed in successfully"){
            setId(array.response.id)
            setEntries(array.response.entries);
            setDisplayName(array.response.name);
            routeChange("home");
            
        } 
      })
    }
    


    return (
      <div className="card">
        <div className="container">
          <h2>Sign In</h2>
          <input onChange={emailChange} type="text" className="email signinEmail" placeholder="Email"></input>
          <label htmlFor="email">Email</label>
          
          <input onChange={passwordChange} type="password" className="password signinPassword" placeholder="Password"></input>
          <label htmlFor="password">Password</label>
          <button id="submit" onClick={onSubmit} type="submit">Sign In</button>
          <a onClick={() => routeChange('register')} className="registerLink">Register</a>
        </div>
      </div>
    )
}
 
export default SignIn;