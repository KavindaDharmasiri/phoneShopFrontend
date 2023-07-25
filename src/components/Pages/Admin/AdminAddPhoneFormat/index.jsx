import React, { Component } from 'react';
import { Col, Form, Input, message, Row } from 'antd';
import PostService from '../../../../services/PostService';
import GetService from '../../../../services/GetService';
import FloatingSidebar from '../../../common/SidebarModel';
import { withStyles } from '@mui/styles';

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
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    },
    formContainer: {
        background: 'white',
        padding: '40px',
        borderRadius: '5px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
};

class DefaultPhoneAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: 0,
                name: '',
                brand: '',
                quatity: '',
                price: '',
                image1: 'image1',
            },
            alert: false,
            message: '',
            severity: '',
            data: [],
            newId: '',
            fileOne: null,
        };
    }

    async getLastPhone() {
        let res = await GetService.getLastPhone();
        console.log(res)

        if (res.status === 200) {
            this.setId(res.data)

        } else {
            console.log("fetching error: " + res)

            this.setId(res.data)
        }
    }

    setId(tr) {
        if (tr == null){
            this.setState({
                newId: 1
            })

        }else {
            let tempone = tr.id;


            this.setState({
                newId: parseInt(tempone)+1
            })
        }

        console.log(this.state.newId)
    }

    componentDidMount() {
        this.getLastPhone()
    }

    handleFileOne(e) {
        let file = e.target.files[0];
        console.log(file)
        this.setState({
            fileOne: file,
        });
    }

    render() {
        const {classes} = this.props;

        const savePHONE = async values => {
            console.log(this.state.formData)
            let response = await PostService.createPostPhone(this.state.formData);
            if (response.status === 201) {
                this.setState({
                    alert: true,
                    message: 'Post created succesfully!',
                    severity: 'success'
                })

                setTimeout(() => {
                    message.success('Phone Adding Success!!')
                }, 2000);
                window.open('http://localhost:3000/managephone', '_self', 'noopener,noreferrer');
            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                setTimeout(() => {
                    message.error('Phone Adding Unsuccessful!!')
                }, 2000);
            }
        }

        const onFinish = async values => {

            this.state.formData.id = this.state.newId;

            const formData = new FormData();

            console.log(this.state.fileOne)

            formData.append('myFile', this.state.fileOne);

            console.log(formData.get("myFile"))

            let res = await PostService.createPostImage(formData);
            console.log(res.data)
            this.setState({
                formData: {
                    image1: res.data,
                },
            })
            if (res.status === 201) {
                savePHONE()

            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })
                savePHONE()
            }
        };

        return (
            <div style={style.body}>
                <FloatingSidebar />
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">
                            <h1 style={style.h1}>Phone Shop(PVT)</h1>
                        </div>
                    </div>
                </div>

                <Row justify={'center'}>
                    <Col lg={12} sm={24}>
                        <div style={style.formContainer}>
                            <Form layout={'vertical'} onFinish={onFinish}>
                                <h3>Add New Phone</h3>

                                <Form.Item name={'name'} label={'Name'} rules={[{ required: true }]}>
                                    <Input
                                        value={this.state.formData.name}
                                        onChange={(e) => {
                                            let formData = this.state.formData;
                                            formData.name = e.target.value;
                                            this.setState({ formData });
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item name={'brand'} label={'Brand'} rules={[{ required: true }]}>
                                    <Input
                                        value={this.state.formData.brand}
                                        onChange={(e) => {
                                            let formData = this.state.formData;
                                            formData.brand = e.target.value;
                                            this.setState({ formData });
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item name={'price'} label={'Price'} rules={[{ required: true }]}>
                                    <Input
                                        value={this.state.formData.price}
                                        onChange={(e) => {
                                            let formData = this.state.formData;
                                            formData.price = e.target.value;
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

                                <Form.Item name={'Qty'} label={'Qty'} rules={[{ required: true }]}>
                                    <Input
                                        type={'number'}
                                        value={this.state.formData.quatity}
                                        onChange={(e) => {
                                            let formData = this.state.formData;
                                            formData.quatity = e.target.value;
                                            this.setState({ formData });
                                        }}
                                    />
                                </Form.Item>

                                <button style={style.btn1}>Add</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withStyles(style)(DefaultPhoneAdd);
