import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousle from '../components/Carousle'


export default function Home() {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);
  const [search, setsearch] = useState('');

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()
    setfooditem(response[0]);
    setfoodcat(response[1]);
    //console.log(response)
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div>
    <div><Navbar /></div>
      <div><div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div class="carousel-inner" style={{ maxHeight: "500px" }}>
          <div class="carousel-caption" style={{ zIndex: "10" }}>
            <div class="d-flex justify-content-center">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
              {/* <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
            </div>
          </div>
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/random/100×300/?burger" style={{ filter: "brightness(30%)" }} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/100×300/?momos" style={{ filter: "brightness(30%)" }} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/100×300/?pizza" style={{ filter: "brightness(30%)" }} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div></div>
      <div class="container">
        {
          foodcat !== []
            ? foodcat.map((data) => {
              return (
                <div class="row mb-5">
                  <div key={data._id} class="fs-3 m-3" >
                    {data.CategoryName}
                  </div>
                  <hr />
                  {
                    fooditem !== []
                      ? fooditem.filter((item) => (item.CategoryName === data.CategoryName)&& item.name.toLowerCase().includes(search.toLowerCase())).map(filteritems => {
                        return (
                          <div key={filteritems._id} class="col-12 col-md-6 col-lg-3">
                            <Card foodname={filteritems.name} options={filteritems.options[0]} imgsrc={filteritems.img} />
                          </div>
                        )
                      })
                      : <div>No data found</div>
                  }
                </div>
              )

            }) : <div>"""""</div>
        }
  
      </div>
      <div><Footer /></div>
    </div>
  )
}
