import React from "react";

function Login() {
    return (
        <div className="container login">
            <h2 className="login-title">Login Your Account</h2>
            <form action="" method="get" className="login-form">
                <div className="login-form-group">
                    <label htmlFor="username" className="login-form-label">
                        Username
                    </label>
                    <input type="text" name="username" id="username" placeholder="Enter your username" className="login-form-input" />
                </div>
                <div className="login-form-group">
                    <label htmlFor="password" className="login-form-label">
                        Password
                    </label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" className="login-form-input" />
                </div>
                <div className="login-form-group login-form-group--action">
                    <div className="remember">
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a className="forgotPassword" href="#">Forgot password!</a>
                </div>
                <div className="login-form-group">
                    <input type="submit" className="btn btn-login" value="Login" />
                </div>
            </form>
        </div>
    );
}

export default Login;