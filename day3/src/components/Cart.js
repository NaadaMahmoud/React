import React from 'react'

function Card(props) {

    

  return (
    <div className="card m-2" style={{width:200}}>
        <img src={props.product.imgURL} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.product.name}</h5>
            <p className="card-text fw-bold">{props.product.price}</p>
            <button className="btn btn-dark">Add to Cart</button>
        </div>
    </div>
  )
}

export default Card;
