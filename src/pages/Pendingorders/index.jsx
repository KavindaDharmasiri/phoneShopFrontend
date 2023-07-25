import {Component, Fragment} from "react";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <PendingOrders></PendingOrders>
            </Fragment>
        )
    }
}

export default HomePage
