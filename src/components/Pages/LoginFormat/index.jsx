import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import phone_img from "../../../assets/img/loginpage.jpg";
import {Col, Form, Input, message, Row} from 'antd'
import {Link} from "react-router-dom";
import GetService from "../../../services/GetService";
import PostService from "../../../services/PostService";

let pass;
let nam;
let iddd;
let typ;

function load() {
    console.log('type')
    console.log(typ)

    if (typ === "Admin") {
        setTimeout(() => {
            message.success('Admin Login Success!!')
        }, 2000);


        const newWindow = window.open('http://localhost:3000/admindash', '_self', 'noopener,noreferrer')
        localStorage.setItem("uId", iddd);
        localStorage.setItem("uName",nam);
        if (newWindow) newWindow.opener = null
    } else {

        setTimeout(() => {
            message.success('User Login Success!!')
        }, 2000);

        const newWindow = window.open('http://localhost:3000/userdash', '_self', 'noopener,noreferrer')
        localStorage.setItem("uId", iddd);
        localStorage.setItem("uName", nam);
        localStorage.setItem("perId", iddd);
        if (newWindow) newWindow.opener = null
    }
}

class DefaultLogin extends Component {
    constructor(props) {
        super(props);
    }

    buttonHandler = async () => {

        const formData2 = new FormData();

        formData2.append("userName", nam);
        formData2.append("password", pass);


        const dataToSend = {
            userName: nam,
            password: pass,
        };

        // Convert the object to JSON string
        const jsonData = JSON.stringify(dataToSend);
        console.log(jsonData);

        let ress = await PostService.getToken(jsonData);
        console.log(ress.data)
        localStorage.setItem("token", ress.data);

        if (ress.data != null) {

            let res = await GetService.getAllUser();
            console.log(res)
            console.log(res.data.length)
            for (let i = 0; i < res.data.length; i++) {
                console.log('1')
                if (res.data[i].name === nam) {
                    console.log("2")
                    if (res.data[i].password === pass) {
                        console.log("2")
                        iddd = res.data[i].id
                        typ = res.data[i].type

                        load()
                        break
                    }
                }
            }

            setTimeout(() => {
                message.error('Please check User Name And Password Again!!')
            }, 2000);

            if (res.status === 201) {

            } else {

            }
        }

    }

    render() {
        const {classes} = this.props;

        const changeevent = event => {
            pass = event.target.value
        }

        const changeEventTwo = event => {
            nam = event.target.value
        }

        return (
            <div style={style.login}>

                <Row className={'d-flex align-items-center'}>

                    <Col lg={16} style={style.loginImage}>
                        <img style={style.img} src={phone_img} alt=""/>
                        <h1 style={style.loginLogo}>Mobile Shop(PVT)</h1>
                    </Col>

                    <Col lg={8}>
                        <Form layout={"vertical"} style={style.loginForm}>
                            <h1 style={style.colourLable}>Login</h1>
                            <hr/>

                            <Form.Item name={"username"} label={"username"} rules={[{require: true}]}>
                                <Input style={style.input} onChange={changeEventTwo}/>
                            </Form.Item>

                            <Form.Item name={"password"} label={"password"} rules={[{require: true}]}>
                                <Input type={"password"} style={style.input} onChange={changeevent}/>
                            </Form.Item>

                            <button style={style.btn1} type={"button"} onClick={this.buttonHandler}>Login</button>
                            <br/>
                            <Link style={style.aTag} to='/register'>Click Here to Register</Link>
                        </Form>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default withStyles(style)(DefaultLogin)
