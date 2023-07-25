import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import { Col, Form, Input, message, Row } from 'antd';
import GetService from '../../../../services/GetService';
import PostService from '../../../../services/PostService';
import EditService from '../../../../services/EditService';
import FloatingSidebar from "../../../common/SidebarModel";

let ids;

const style = {
    body: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    bs1: {
        marginBottom: '20px',
    },
    header: {
        backgroundColor: 'purple',
        padding: '20px',
        color: '#fff',
        textAlign: 'center',
        marginBottom: '20px',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
    },
    formWrapper: {
        maxWidth: '500px',
        width: '100%',
        margin: '0 auto',
    },
    btn1: {
        backgroundColor: 'purple',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

class DefaultPhoneEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                id: '',
                name: '',
                brand: '',
                quatity: '',
                price: '',
                image1: 'image1',
            },
            data: [],
            alert: false,
            message: '',
            severity: '',
            fileOne: null,
        };
    }

    componentDidMount() {
        let link = window.location.href;
        ids = String(link.slice(35));
        this.initialize(ids);
    }

    async initialize(id) {
        let res = await GetService.fetchAllPhone();

        console.log('3')
        for (let i = 0; i < res.data.length; i++) {
            console.log('1')
            console.log(id)
            console.log(res.data[i].id)
            if (res.data[i].id === parseInt(id)) {
                console.log('2')
                this.setState({
                    data: res.data[i],
                    formData: {
                        id: res.data[i].id,
                        name: res.data[i].name,
                        brand: res.data[i].brand,
                        quatity: res.data[i].quatity,
                        price: res.data[i].price,
                        image1: res.data[i].image1,
                    },
                });
            }
        }

        if (res.status === 200) {
            // Handle success if needed
        } else {
            console.log('fetching error: ' + res);
        }
    }

    handleFileOne(e) {
        let file = e.target.files[0];
        console.log(file)
        this.setState({
            fileOne: file,
        });
    }

    render() {
        const { classes } = this.props;

        const savePHONE = async () => {
            try {
                let response = await EditService.createEditPhone(this.state.formData);
                if (response.status === 201) {
                    this.setState({
                        alert: true,
                        message: 'Post created successfully!',
                        severity: 'success',
                    });

                    setTimeout(() => {
                        message.success('phone Edit Success!!');
                    }, 2000);

                    window.open('http://localhost:3000/managephone', '_self', 'noopener,noreferrer');
                } else {
                    this.setState({
                        alert: true,
                        message: 'Post created unsuccessfully!',
                        severity: 'error',
                    });

                    setTimeout(() => {
                        message.error('Phone Edit Unsuccessful!!');
                    }, 2000);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        const onFinish = async (values) => {
            this.state.formData.id = ids;

            const formData = new FormData();
            formData.append('myFile', this.state.fileOne, this.state.fileOne.name);

            try {
                let res = await PostService.createPostImage(formData);
                if (res.status === 201) {
                    savePHONE();
                } else {
                    this.setState({
                        alert: true,
                        message: 'Post created unsuccessfully!',
                        severity: 'error',
                    });

                    savePHONE();
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

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

                <Row justify="center">
                    <Col lg={12} sm={24}>
                        <div style={style.formWrapper}>
                            <Form layout="vertical" onFinish={onFinish}>
                                <h3>Edit Phone</h3>

                                <label>ID</label>
                                <h3>{ids}</h3>

                                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                                    <Input
                                        value={this.state.formData.name}
                                        onChange={(e) => {
                                            let formData = this.state.formData;
                                            formData.name = e.target.value;
                                            this.setState({ formData });
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
                                    <Input
                                        value={this.state.formData.brand}
                                        onChange={(e) => {
                                            let formData = this.state.formData;
                                            formData.brand = e.target.value;
                                            this.setState({ formData });
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item name="price" label="Price" rules={[{ required: true }]}>
                                    <Input
                                        value={this.state.formData.price}
                                        onChange={(e) => {
                                            let formData = this.state.formData;
                                            formData.price = e.target.value;
                                            this.setState({ formData });
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item name="quantity" label="Quantity" rules={[{ required: true }]}>
                                    <Input
                                        value={this.state.formData.quatity}
                                        onChange={(e) => {
                                            let formData = this.state.formData;
                                            formData.quatity = e.target.value;
                                            this.setState({ formData });
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item name="photo" label="Photo" rules={[{ required: true }]}>
                                    <Input
                                        accept="image/*"
                                        id="upload-profile-image"
                                        type="file"
                                        onChange={(e) => {
                                            this.handleFileOne(e);
                                        }}
                                    />
                                </Form.Item>

                                <button style={style.btn1} type="submit">
                                    Edit Phone
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>

                <div className="content" style={style.content}>
                    {classes.children}
                </div>
            </div>
        );
    }
}

export default withStyles(style)(DefaultPhoneEdit);
