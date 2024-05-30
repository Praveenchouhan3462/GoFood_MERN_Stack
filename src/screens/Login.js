import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function Login() {
  const [credentials, setcredentials] = useState({email:"",password:""})
  let navigate=useNavigate()
  const HandleSubmit=async(e)=>{
     

     e.preventDefault();
      const response=await fetch("http://localhost:5000/api/loginuser",{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({email:credentials.email,password:credentials.password})
      })
      const json=await response.json()
      console.log(json)
      if(!json.success)
      {
          alert("Enter valid credentials")
      }
      if(json.success)
      {
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate('/');
      }

  }
  const onChange = (event) => {
      setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <div>
      <div><Navbar/></div>
        <form class="container" onSubmit={HandleSubmit}>
       
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" value={credentials.email} onChange={onChange}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name="password" value={credentials.password} onChange={onChange}/>
  </div>

  
  <button type="submit" class="btn btn-primary">Submit</button>
  <Link to="/creatuser" class="m-3 btn btn-danger">Register yourself</Link>
</form>
    </div>
  )
}
