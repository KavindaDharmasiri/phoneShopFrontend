import React, {Component} from 'react';
import Phone from './phone';
import {style} from "./style";
import GetService from '../../../../services/GetService';
import FloatingSidebarForUser from "../../../common/SidebarModelForUser";


class DefaultOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    async loadData() {
        console.log(localStorage.getItem("perId"))
        let res = await GetService.fetchAllOrders(localStorage.getItem("perId"));

        this.setState({
            data: res.data.data
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async componentDidMount() {
        this.loadData()
    }

    render() {
        const phones = this.state.data

        return (

            <div style={style.body}>
                <FloatingSidebarForUser/>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">
                            <h1 style={style.h1}>Phone Shop(PVT)</h1>

                        </div>
                    </div>
                </div>
                <div style={style.div}>
                    {phones && phones.length > 0 ? (
                        <Phone items={phones} />
                    ) : (
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                            <p className="display-4">No data available</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default DefaultOrder;
