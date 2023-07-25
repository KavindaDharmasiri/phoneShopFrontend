import {Component, Fragment} from "react";
import DefaultPhoneEdit from "../../components/Pages/Admin/AdminEditPhoneFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <DefaultPhoneEdit></DefaultPhoneEdit>
            </Fragment>
        )
    }
}

export default HomePage
