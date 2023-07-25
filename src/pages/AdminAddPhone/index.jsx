import {Component, Fragment} from "react";
import DefaultPhoneAdd from "../../components/Pages/Admin/AdminAddPhoneFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <DefaultPhoneAdd></DefaultPhoneAdd>
            </Fragment>
        )
    }
}

export default HomePage
