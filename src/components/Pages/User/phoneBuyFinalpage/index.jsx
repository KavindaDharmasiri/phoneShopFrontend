import React, { Component } from 'react';
import GetService from '../../../../services/GetService';
import './DefaultBuyFinal.css';
import PostService from "../../../../services/PostService";
import {message} from "antd";
import DummyPaymentModal from "./dummyPaymentModel";
import FloatingSidebarForUser from "../../../common/SidebarModelForUser";

class DefaultBuyFinal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            quantity: 0,
            isPaymentModalVisible: false,
        };
    }

    async componentDidMount() {
        await this.loadData();
    }

    async loadData() {
        try {
            const res = await GetService.getOnePhone(localStorage.getItem("buyId"));
            if (res.status === 200) {
                this.setState({
                    data: res.data.data,
                });
            } else {
                console.log("fetching error: " + res);
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

    handleQuantityChange = (event) => {
        this.setState({
            quantity: event.target.value,
        });
    };

    // handleBuyNow = async () => {
    //     const formData = new FormData();
    //
    //     formData.append(
    //         "id",
    //         0
    //     );
    //     formData.append(
    //         "phoneId",
    //         this.state.data.id
    //     );
    //     formData.append(
    //         "userId",
    //         localStorage.getItem("uId")
    //     );
    //     formData.append(
    //         "name",
    //         this.state.data.name
    //     );
    //     formData.append(
    //         "brand",
    //         this.state.data.brand
    //     );
    //     formData.append(
    //         "quantity",
    //         this.state.quantity
    //     );
    //     formData.append(
    //         "type",
    //         "pending"
    //     );
    //     formData.append(
    //         "price",
    //         parseInt(this.state.data.price) * parseInt(this.state.quantity)
    //     );
    //     formData.append(
    //         "image1",
    //         this.state.fileOne
    //     );
    //
    //     let response = await PostService.OrderMake(formData);
    //     if (response.status === 201) {
    //
    //         this.setState({
    //             alert: true,
    //             message: 'Post created succesfully!',
    //             severity: 'success'
    //         })
    //
    //         setTimeout(() => {
    //             message.success('save Success!!')
    //         }, 2000);
    //
    //     } else {
    //         this.setState({
    //             alert: true,
    //             message: 'Post created Unsuccesfully!',
    //             severity: 'error'
    //         })
    //
    //         setTimeout(() => {
    //             message.error('save Failed!!')
    //         }, 2000);
    //     }
    //
    //
    //     console.log(`Buying ${this.state.quantity} quantity of phone with ID: ${localStorage.getItem("buyId")} = ${parseInt(this.state.data.price) * parseInt(this.state.quantity)}`);
    // };

    handleBuyNow = async () => {
        localStorage.setItem("dummyphoneId",this.state.data.id);
        localStorage.setItem("dummyuserId",localStorage.getItem("uId"));
        localStorage.setItem("dummyname",this.state.data.name);
        localStorage.setItem("dummybrand", this.state.data.brand);
        localStorage.setItem("dummyquantity",this.state.quantity);
        localStorage.setItem("dummytype","pending");
        localStorage.setItem("dummyprice",this.state.data.price);
        console.log(this.state.data.image1)
        localStorage.setItem("dummyimage",this.state.data.image1);
        this.setState({
            isPaymentModalVisible: true,
        });

        console.log(
            `Buying ${this.state.quantity} quantity of phone with ID: ${localStorage.getItem(
                'buyId'
            )} = ${parseInt(this.state.data.price) * parseInt(this.state.quantity)}`
        );
    };

    // Function to handle the close of the payment modal
    handlePaymentModalClose = () => {
        this.setState({
            isPaymentModalVisible: false,
        });
    };

    render() {
        const { data, quantity, isPaymentModalVisible } = this.state;

        let qt = 0;
        console.log(data)
        if (data != null) {
            qt = parseInt(data.quatity);
        }

        return (
            <div className="container">
                <FloatingSidebarForUser/>
                <div className="header">
                    <h1>Phone Shop(PVT)</h1>
                </div>

                {data && (
                    <div className="phone-details">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>{data.name}</h2>
                                <h2>{data.brand}</h2>
                                <img src={require('D:/nnshop/New folder/mobile-phone-shop/src/assets/img/upload/' + data.image1)} alt={data.name} className="phone-image" />
                            </div>
                            <div className="col-md-6">
                                <div className="phone-info">
                                    <p>Price: Rs{data.price}</p>
                                    <div className="form-group">
                                        <label>Quantity:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={quantity}
                                            onChange={this.handleQuantityChange}
                                            min="1"
                                            max={qt}
                                        />
                                    </div>
                                    <button className="btn btn-primary" onClick={this.handleBuyNow}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {isPaymentModalVisible && (
                    <DummyPaymentModal
                        visible={isPaymentModalVisible}
                        onCancel={this.handlePaymentModalClose}
                    />
                )}

            </div>
        );
    }
}

export default DefaultBuyFinal;
