import React, { Component } from 'react'

export default class ProductChitiet extends Component {
    render() {
        let { chiTietShoe } = this.props
        return (
            <div>
            
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-3">
                                        <h3>{chiTietShoe.name}</h3>
                                        <img className='img-fluid' src={chiTietShoe.image} alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h2>Thống Sô Chi Tiết</h2>
                                        <table className="table">
                                            <thead>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Tên Sản Phẩm</td>
                                                    <td>{chiTietShoe.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Alias</td>
                                                    <td>{chiTietShoe.alias}</td>
                                                </tr>
                                                <tr>
                                                    <td>Giá</td>
                                                    <td>{chiTietShoe.price} $</td>
                                                </tr>
                                                <tr>
                                                    <td>Mô Tả</td>
                                                    <td>{chiTietShoe.description}</td>
                                                </tr>
                                                <tr>
                                                    <td>ShortDescription</td>
                                                    <td>{chiTietShoe.shortDescription}</td>
                                                </tr>
                                                <tr>
                                                    <td>số lượng</td>
                                                    <td>{chiTietShoe.quantity}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

