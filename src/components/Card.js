import React from 'react'

export default function Card(props) {

  let options=props.options || {};
  let priceoptions=Object.keys(options);

  

  return (
    <div>
        <div>
        <div class="card mt-3" style={{"width": "280px", "maxHeight":"360px"}}>
          <img src={props.imgsrc} class="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}}/>
          <div class="card-body">
            <h5 class="card-title">{props.foodname}</h5>
            <p class="card-text">This is some imp content.</p>
            <div class="container">
              <select class="m-2 h-100 bg-success rounded">
                {
                  Array.from(Array(6),(e,i)=>{
                    return(
                       <option key={i+1} value={i+1}>{i+1}</option>
                    )
                    })}
              </select >
              <select class="m-2 h-100 bg-success rounded">
                    {
                      priceoptions.map((data)=>{
                        return (<option key={data} value={data}>{data}</option>)
                      })
                    }
              </select>
              <div class="d-inline fs-5 h-100">
                Total Price
              </div>
            </div>
            <hr />
            <button class="btn btn-success justify-center ms-2" >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
