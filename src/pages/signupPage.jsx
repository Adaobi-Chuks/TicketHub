import React from "react";
import logo from "@/assets/logo.png";
import {
    Form,
} from "react-router-dom"
import signupImage from "@/assets/signupImage.png";

export default function SignUp() {
    return (
        <>
            <div className="signup">
                <div className="signup-left">
                    <img className="logo" src = {logo} />
                    <img className="signup-logo" src = {logo} />
                </div>
                <div className="signup-right">
                    <h2>Register</h2>
                    <p>New here, provide your details</p>
                    <Form
                        method="post"
                        className="signup-form"
                    >
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                        <button
                            disabled={navigation.state === "submitting"}
                        >
                            {navigation.state === "submitting"
                                ? "Logging in..."
                                : "Log in"
                            }
                        </button>
                    </Form>
                </div>
            </div>
        </>
    )
}