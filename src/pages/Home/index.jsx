import {Component, Fragment} from "react";
import DefaultUserDash from "../../components/Pages/User/UserDashboardFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <DefaultUserDash></DefaultUserDash>
            </Fragment>
        )
    }
}

export default HomePage
