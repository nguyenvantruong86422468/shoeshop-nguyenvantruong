import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    
    let { shoes, btnchitiet} = this.props
    
    return (
     
        <div className="card">
        <img className="card-img-top"  src={shoes.image} alt="Card" />
        <div className="card-body">
            <h5 className="card-title">{shoes.name}</h5>
            <p className="card-text">{shoes.price}$</p>
            <button onClick={() => {btnchitiet(shoes)}}  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to card</button>

        </div>
    </div>
    )
  }
}
