import React, { Component } from 'react';
import { Table, message, Space } from 'antd';
import GetService from '../../../../services/GetService';
import FloatingSidebar from "../../../common/SidebarModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import DeleteService from "../../../../services/DeleteService";
import {style1} from "./style";
import {Button} from "@material-ui/core";


const style = {
    body: {
        background: '#f5f5f5',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    },
    bs1: {
        background: 'purple',
        padding: '10px',
    },
    header: {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    h1: {
        margin: 0,
    },
    h1next: {
        color: 'purple',
        marginTop: '20px',
    },
    secondDiv: {
        marginTop: '20px',
    },
    h3: {
        color: 'purple',
    },
    btn1: {
        background: 'purple',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    },
    btn2: {
        background: 'blue',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    },
};

class DefaultPhoneManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    ur = 'C:/Users/kavinda_d/Documents/ijse pro/new pro/New folder/mobile-phone-shop/src/assets/img/upload/';

    async deletePhone(value) {
        const isConfirmed = window.confirm(`Are you sure you want to delete ${value} Phone?`);

        if (isConfirmed) {
            console.log('Yes');
            let res = await DeleteService.deletePhone(value);

            if (res.status === 200) {
                setTimeout(() => {
                    message.error('Phone Deleted!!');
                }, 2000);

                const newWindow = window.open('http://localhost:3000/managephone', '_self', 'noopener,noreferrer');
                if (newWindow) newWindow.opener = null;
            } else {
                console.log("fetching error: " + res);
            }
        } else {
            console.log('No');
        }
    }

    async loadData() {
        let res = await GetService.fetchAllPhone();

        this.setState({
            data: res.data,
        });

        if (res.status === 200) {
        } else {
            console.log("fetching error: " + res);
        }
    }

    async componentDidMount() {
        this.loadData();
    }

    handleAddNewClick = () => {
        window.open('http://localhost:3000/addphone', '_self', 'noopener,noreferrer');
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
                title: 'Qty',
                dataIndex: 'quatity',
                key: 'quatity',
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
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
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a onClick={() => this.deletePhone(record.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </a>
                        <a onClick={() => this.editPhone(record.id)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </a>
                    </Space>
                ),
            },
        ];


        return (
            <div style={style.body}>
                <FloatingSidebar />
                <div style={style.bs1}>
                    <div className="header" style={style1.header}>
                        <div className="d-flex justify-content-between">
                            <h1 style={style.h1}>Phone Shop(PVT)</h1>
                            <Button type="primary" onClick={this.handleAddNewClick} style={style.btn2}>Add New</Button>
                        </div>
                    </div>
                </div>
                <div style={style1.secondDiv}>
                    <h1 style={style.h1next}>Phone Table</h1>
                    <Table dataSource={data} columns={columns} />
                </div>
            </div>
        );
    }

    editPhone(id) {
        const newWindow = window.open('http://localhost:3000/editphone?id=' + id, '_self', 'noopener,noreferrer');
    }
}

export default DefaultPhoneManage;
