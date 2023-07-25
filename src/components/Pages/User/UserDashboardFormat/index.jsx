import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Row} from 'antd';
import book_logo from "../../../../assets/img/phone.png";
import resp_logo from "../../../../assets/img/phone.png";
import {Link} from "react-router-dom";
import FloatingSidebarForUser from "../../../common/SidebarModelForUser";

let regNo;

class DefaultUserDash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        let link = window.location.href
        regNo = String(link.slice(35));
        this.setState({
            id: regNo
        })
    }

    render() {
        const {classes} = this.props;
        let re = this.state.id

        return (

            <div style={style.body}>
                <FloatingSidebarForUser/>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">
                            <h1 style={style.h1}>Phone Shop(PVT)</h1>
                            <h3>{re}</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <Row justify={"center"}>
                        <Col style={style.col}>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"dash p-2"} style={style.dash} onMouseMove={style.dashHover}>

                                        <img src={book_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>Buy Phone</p>
                                                <p style={style.paragraph}>Click</p>
                                            </div>
                                            <div style={style.rightAlign}>
                                                <button style={style.btn1}><Link to={'/userbuyphone?id=' + re}>Buy
                                                    Now</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"dash p-2"} style={style.dash}>

                                        <img src={resp_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>View Your Cart</p>
                                                <p style={style.paragraph}>Click To View</p>
                                            </div>
                                            <div style={style.rightAlign}>
                                                <button style={style.btn1}><Link to={'/ordercart?id=' + re}>View
                                                    Now</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"dash p-2"} style={style.dash}>

                                        <img src={resp_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>View Your orders</p>
                                                <p style={style.paragraph}>Click To View</p>
                                            </div>
                                            <div style={style.rightAlign}>
                                                <button style={style.btn1}><Link to={'/completOrder'}>View
                                                    Now</Link></button>
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

export default withStyles(style)(DefaultUserDash)
