import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const HandleSubmit=async(e)=>{
       

       e.preventDefault();
        const response=await fetch("http://localhost:5000/api/creatuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        })
        const json=await response.json()
        console.log(json)
        if(!json.success)
        {
            alert("Enter valid credentials")
        }

    }
    const onChange = (event) => {
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <>
    <div><Navbar/></div>
        <form class="container" onSubmit={HandleSubmit}>
        <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" name="name" value={credentials.name} onChange={onChange} />
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" value={credentials.email} onChange={onChange}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name="password" value={credentials.password} onChange={onChange}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" class="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  <Link to="/login" class="m-3 btn btn-danger">Already a user</Link>
</form>
    </>
  )
}
