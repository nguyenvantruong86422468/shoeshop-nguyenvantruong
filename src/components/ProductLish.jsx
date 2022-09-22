import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductLish extends Component {
    renderShoes = () => {

        return this.props.Shoeslist.map((shoes) => {
            let { id} = shoes;
            return <div className="col-4" key={`shoes-${id}`}>
                <ProductItem shoes={shoes} btnchitiet={this.props.btnchitiet} />
            </div>
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderShoes()}
            </div>
        )
    }
}
