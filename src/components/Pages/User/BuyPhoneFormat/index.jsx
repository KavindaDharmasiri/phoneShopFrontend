import React, { Component } from 'react';
import Phone from './phone';
import {style} from "./style";
import GetService from '../../../../services/GetService';
import FloatingSidebarForUser from "../../../common/SidebarModelForUser";

const items = [
  { name: 'Item 1', image: 'item1.jpg', price: 19.99 },
  { name: 'Item 2', image: 'item2.jpg', price: 24.99 },
  { name: 'Item 3', image: 'item3.jpg', price: 14.99 },
  { name: 'Item 4', image: 'item1.jpg', price: 19.99 },
  { name: 'Item 5', image: 'item2.jpg', price: 24.99 },
  { name: 'Item 6', image: 'item3.jpg', price: 14.99 },
  // Add more items as needed
];

class DefaultBuy extends Component {

  constructor(props) {
    super(props);

    this.state = {
        data: []
    }
}

  async loadData() {
    let res = await GetService.fetchAllPhone();

    this.setState({
        data: res.data
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
      <div style={style.seconDivBar}>
        <Phone items={phones}/>
      </div>
      </div>
    );
  }
}

export default DefaultBuy;
