import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Row} from 'antd';

import phone_logo from "../../../../assets/img/phone.png";
import cart_logo from "../../../../assets/img/cart.png";
import user_logo from "../../../../assets/img/user.png";
import FloatingSidebar from "../../../common/SidebarModel";
import GetService from "../../../../services/GetService";

class DefaultAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            order: '',
            phone: ''
        }
    }

    componentDidMount() {
        this.loadUsers();
        this.loadOrders();
        this.loadPhones();
    }

    async loadUsers() {
        let res = await GetService.getAllUser();
        this.setState({
            user: res.data.length
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async loadOrders() {
        let res = await GetService.fetchAlllOrders();
        console.log(res)

        console.log(res.data.data.length)
        this.setState({
            order: res.data.data.length
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async loadPhones() {
        let res = await GetService.fetchAllPhone();

        this.setState({
            phone: res.data.length
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    render() {
        const {classes} = this.props;

        return (

            <div style={style.body}>
                <FloatingSidebar/>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">
                            <h1 style={style.h1}>Mobile Shop(PVT)</h1>
                        </div>
                    </div>
                </div>


                <div style={style.body1} >

                    <Row justify={"center"}>
                        <Col style={style.col}>
                            <div style={style.h1Wrap}>
                            <h1 style={style.h1main}>Welcome back {localStorage.getItem("uName")} , Are you ready to Work?</h1>
                            </div>
                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"dash p-2"} style={style.dash} >

                                        <img src={user_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph2}>User Count</p>
                                                <p style={style.paragraph2}>{this.state.user}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"dash p-2"} style={style.dash}>

                                        <img src={cart_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph2}>Order Count</p>
                                                <p style={style.paragraph2}>{this.state.order}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"dash p-2"} style={style.dash}>

                                        <img src={phone_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph2}>Phone Count</p>
                                                <p style={style.paragraph2}>{this.state.phone}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Col>
                    </Row>
                </div>

                <div className="content" style={style.content}>
                    {classes.children}
                </div>

            </div>

        )
    }
}

export default withStyles(style)(DefaultAdmin)
