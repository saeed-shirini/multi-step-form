import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="steps-rings">
                    <div className="ring-info">
                    <Link className="ring-link" to="/">1</Link>
                    <div className="ring-desctiption">
                    <p>STEP1</p>
                        <h3>YOUR INFO</h3>
                    </div>
 
                    </div>
                    <div className="ring-info">
                    <Link className="ring-link" to="/step-two">2</Link>
                    <div className="ring-desctiption">
                    <p>STEP2</p>
                        <h3>SELECT PLAN</h3>
                    </div>
 
                    </div>
                    <div className="ring-info">
                    <Link className="ring-link" to="/step-three">3</Link>
                    <div className="ring-desctiption">
                    <p>STEP3</p>
                        <h3>ADD-ONS</h3>
                    </div>
 
                    </div>
                    <div className="ring-info">
                    <Link className="ring-link" to="/step-four">4</Link>
                    <div className="ring-desctiption">
                    <p>STEP4</p>
                        <h3>SUMMARY</h3>
                    </div>
 
                    </div>                </div>
            </header>
        </div>
    )
}

export default Header;