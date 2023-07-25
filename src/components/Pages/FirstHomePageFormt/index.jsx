import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

class FirstHomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (

            <>
                <header style={style.overflow}>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">Phone Shop</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav" style={style.navbar}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link"><Link style={style.aTag} to={'/register'}>Sign Up</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link style={style.aTag} to={'/login'}>Login</Link></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <section style={style.hero}>
                    <div className="container">
                        <div style={style.herocontent}>
                            <h1 style={style.herocontenth1}>Welcome to our Phone Shop Store</h1>
                            <p style={style.herocontentp}>Find the best deals on your favorite Phone!</p>
                            <Link to="/login" className="btn btn-primary btn-lg">Shop Now</Link>
                        </div>
                    </div>
                </section>

                <footer className="bg-dark text-white text-center py-3">
                    <p>&copy; 2023 Phone-Shop Application. All rights reserved.</p>
                </footer>
            </>

        )
    }
}

export default withStyles(style)(FirstHomePage)
