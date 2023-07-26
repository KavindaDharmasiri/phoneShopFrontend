import React, { Component } from 'react';
import { style } from "./style";
import GetService from '../../../../services/GetService';
import {Table, Tag, Space, Dropdown, Menu, message} from 'antd';
import PostService from "../../../../services/PostService";
import EditService from "../../../../services/EditService";
import FloatingSidebar from "../../../common/SidebarModel";

class RejectOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    async loadData() {
        console.log(localStorage.getItem("perId"))
        let res = await GetService.fetchAlllOrders()

        this.setState({
            data: res.data.data.filter(item => item.type === 'reject'),
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async editData(selectedData) {
        let response = await EditService.createEditOrder(selectedData);
        if (response.status === 200) {

            this.setState({
                alert: true,
                message: 'Post created succesfully!',
                severity: 'success'
            })

            setTimeout(() => {
                message.success('save Success!!')
            }, 2000);

        } else {
            this.setState({
                alert: true,
                message: 'Post created Unsuccesfully!',
                severity: 'error'
            })

            setTimeout(() => {
                message.error('save Failed!!')
            }, 2000);
        }
    }

    async componentDidMount() {
        this.loadData()
    }
    handleActionSelect = (id, action) => {
        const selectedData = this.state.data.find(item => item.id === id);
        console.log('Selected Data:', selectedData);
        selectedData.type = action;
        this.editData(selectedData)
        console.log(`ID: ${id}, Action: ${action}`);
    };
    render() {
        const { data } = this.state;

        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'User ID',
                dataIndex: 'userId',
                key: 'userId',
            },
            {
                title: 'Phone ID',
                dataIndex: 'phoneId',
                key: 'phoneId',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Brand',
                dataIndex: 'brand',
                key: 'brand',
            },
            {
                title: 'Image',
                dataIndex: 'image1',
                key: 'image1',
                render: (imageURL) => (
                    <img
                        src={require('D:/nnshop/New folder/mobile-phone-shop/src/assets/img/upload/' + imageURL)}
                        alt="Product"
                        style={{ width: 100, height: 'auto' }}
                    />
                ),
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                key: 'quantity',
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
                render: (text, record) => (
                    <Space size="middle">
                        <Tag
                            color={record.type === "success" ? "green" : "red"}
                        >
                            {record.type}
                        </Tag>
                    </Space>
                ),
            },
        ];

        return (
            <div style={style.body}>
                <FloatingSidebar/>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">
                            <h1 style={style.h1}>Phone Shop(PVT)</h1>

                        </div>
                    </div>
                </div>
                <div style={style.secondDiv}>
                    <h1 style={style.h1next}>Rejected Orders Table</h1>
                    <Table dataSource={data} columns={columns} />
                </div>
            </div>
        );
    }
}

export default RejectOrder;
