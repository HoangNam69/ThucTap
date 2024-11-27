import React from "react";

function Signup() {
    return (
        <div className="container signup">
            <h2 className="signup-title">Signup Account</h2>
            <form action="" method="get" className="signup-form">
                <div className="signup-form-group">
                    <label htmlFor="email" className="signup-form-label">
                        Email
                    </label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="signup-form-input" />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="password" className="signup-form-label">
                        Password
                    </label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" className="signup-form-input" />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="confirmPassword" className="signup-form-label">
                        Confirm password
                    </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" className="signup-form-input" />
                </div>
                <div className="signup-form-group">
                    <input type="submit" className="btn btn-signup" value="Signup" />
                </div>
            </form>
        </div>
    );
}

export default Signup;