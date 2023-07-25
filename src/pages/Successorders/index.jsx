import {Component, Fragment} from "react";
import SuccessOrder from "../../components/Pages/Admin/SuccessOrdersFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <SuccessOrder></SuccessOrder>
            </Fragment>
        )
    }
}

export default HomePage
