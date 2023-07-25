import React, { Component } from 'react';
import { style } from './style';
import GetService from '../../../../services/GetService';
import { Table, Tag, Space, Dropdown, Menu, message } from 'antd';
import PostService from '../../../../services/PostService';
import EditService from '../../../../services/EditService';
import FloatingSidebar from '../../../common/SidebarModel';
import { Button } from '@material-ui/core';

const colorfulStyle = {
    ...style,
    body: {
        ...style.body,

        color: 'white',
    },
    bs1: {
        ...style.bs1,
        background: 'purple',
    },
    header: {
        ...style.header,
        color: 'white',
    },
    h1: {
        ...style.h1,
        color: 'white',
    },
    h1next: {
        ...style.h1next,
        color: 'purple',
    },
    secondDiv: {
        ...style.secondDiv,
        background: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

class DefaultUserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    async loadData() {
        let res = await GetService.getAllUser();

        this.setState({
            data: res.data,
        });

        if (res.status === 200) {
        } else {
            console.log('fetching error: ' + res);
        }
    }

    async componentDidMount() {
        this.loadData();
    }

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
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
            },
        ];

        return (
            <div style={colorfulStyle.body}>
                <FloatingSidebar />
                <div style={colorfulStyle.bs1}>
                    <div className="header" style={colorfulStyle.header}>
                        <div className="d-flex justify-content-between">
                            <h1 style={colorfulStyle.h1}>Phone Shop(PVT)</h1>
                        </div>
                    </div>
                </div>
                <div style={colorfulStyle.secondDiv}>
                    <h1 style={colorfulStyle.h1next}>Users Table</h1>
                    <Table dataSource={data} columns={columns} />
                </div>
            </div>
        );
    }
}

export default DefaultUserManage;
