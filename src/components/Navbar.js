import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function Navbar() {
    const navigate=useNavigate()
    const handleLogout=()=>{
       localStorage.removeItem("authToken")
       navigate('/')
    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("authToken"))?
                            <li class="nav-item">
                            <Link class="nav-link " aria-current="page" to="/">My Orders</Link>
                            </li>
                            : ""
                        }
                            
                            
                        </ul>
                        {(localStorage.getItem("authToken"))?
                            <div class="d-flex ">
                    
                            <Link class="btn bg-white mx-1 text-success" onClick={handleLogout}>My cart</Link>
                            <Link class="btn bg-white mx-1 text-danger" onClick={handleLogout}>LogOut</Link>
                        
                           </div>
                           :
                           <div class="d-flex ">
                    
                                <Link class="btn bg-white mx-1 text-success" to="/login">Login</Link>
                                <Link class="btn bg-white mx-1 text-success" to="/creatuser">SignUp</Link>
                            
                        </div>
                    }
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
