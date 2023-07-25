import {Component, Fragment} from "react";
import DefaultAdmin from "../../components/Pages/Admin/AdminDashBoardFormat";

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <DefaultAdmin></DefaultAdmin>
            </Fragment>
        )
    }
}

export default AdminDashboard
