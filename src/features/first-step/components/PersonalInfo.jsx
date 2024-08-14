import "../css/first-step.css";

const PersonalInfo = () => {
    return (
        <div className="container">
            <div className="step step1">
                <div class="description">
                    <h1>Personal Info</h1>
                    <p>please provide name,email,address,phone number</p>
                </div>
                <form className="form-info">
                    <div className="name-info">
                    <label>
                        Name
                    </label>
                    <input type="text" placeholder="e.g. stephen king"/>
                    </div>

                    <div className="email-info">
                    <label>
                        Email Address
                    </label>
                    <input type="text" placeholder="e.g. stephen king@lorem.com" />
                    </div>

                    <div className="phone-info">
                    <label>
                        Phone Number
                    </label>
                    <input type="text" placeholder="e.g. 123 456 7890"/>
                    </div>
                </form>
            </div>
            <div class="btn-container">
                <button className="next-step">Next Step</button>
            </div>
        </div>
    )
}

export default PersonalInfo