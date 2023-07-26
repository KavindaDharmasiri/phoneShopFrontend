import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import mobile_img from "../../../assets/img/loginpage.jpg";
import {Col, Form, Input, message, Row} from 'antd'
import {Link} from "react-router-dom";
import PostService from "../../../services/PostService";
import GetService from "../../../services/GetService";

class DefaultRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                id: 1,
                name: '',
                email: '',
                type: '',
                password: ''
            },
            alert: false,
            message: '',
            severity: '',
            data: [],
            newId: '',
            file: null
        }
    }

    async getAllUsers() {
        let res = await GetService.getLastUser();
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
        this.getAllUsers()
    }

    handleFile(e) {
        let file = e.target.files[0];
        this.setState({
            file: file
        })
    }


    render() {
        const {classes} = this.props;

        const saveUser = async values => {
            let response = await PostService.createPostUser(this.state.formData);
            if (response.status === 200) {

                this.setState({
                    alert: true,
                    message: 'Post created succesfully!',
                    severity: 'success'
                })

                setTimeout(() => {
                    message.success('Register Success!!')
                }, 2000);

                window.open('http://localhost:3000/login', '_self', 'noopener,noreferrer')
            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                setTimeout(() => {
                    message.error('Register Failed!!')
                }, 2000);
            }
        }

        const onFinish = async values => {

            this.state.formData.id = this.state.newId;

            let res = await GetService.getUserByName(this.state.formData.name);

            if(res.data.length == 0) {
                saveUser()
            }else{
                setTimeout(()=> {
                    message.error('user name exist!!')
                },2000);

            }

        };

        return (
            <div style={style.login}>
                <Row className={'d-flex align-items-center'}>

                    <Col lg={16} style={style.regImage}>

                        <img style={style.img} src={mobile_img} alt=""/>
                        <h1 style={style.loginLogo}>Mobile Shop(PVT)</h1>

                    </Col>

                    <Col lg={8}>
                        <Form layout={"vertical"} style={style.loginForm} onFinish={onFinish}>
                            <Form.Item name={"name"} label={"UserName"} rules={[{required: true}]}>
                                <Input value={this.state.formData.name}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.name = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"email"} label={"Email"} rules={[{required: true}]}>
                                <Input value={this.state.formData.email} type={"email"}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.email = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"password"} label={"Password"} rules={[{required: true}]}>
                                <Input type={"password"} value={this.state.formData.password}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.password = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"type"} label={"Admin/User"} rules={[{required: true}]}>
                                <select style={{backgroundColor: "cadetblue", width: "100%"}} onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.type = e.target.value
                                    this.setState({formData})
                                }}>
                                    <option value={"Admin"}>Admin</option>
                                    <option selected value={"User"}>User</option>

                                </select>
                            </Form.Item>

                            <button style={style.btn1}>Register</button>

                            <br/>

                            <Link style={style.aTag} to={'/login'}>Click Here to Login</Link>
                        </Form>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default withStyles(style)(DefaultRegister)
