import React from "react";
import logo from "@/assets/logo.png";
import heroImage1 from "@/assets/hero-image1.png";
import heroImage2 from "@/assets/hero-image2.png";
import heroImage3 from "@/assets/hero-image3.png";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import linkedIn from "@/assets/linkedIn.png";
import instagram from "@/assets/instagram.png";

export default function LandingPage() {
    return (
        <>
            <div className="lp">
                <nav className="lp-nav">
                    <img className="lp-logo" src = {logo} />
                    <div className="lp-auth">
                        <button>Log In</button>
                        <button>Sign Up</button>
                    </div>
                </nav>
                <div className="hero1">
                    <div>
                        <h2>Create any event in minutes.</h2>
                        <h4>Simple to use tools for a successful and profitable event</h4>
                        <button>Get Started</button>
                    </div>
                    <img className="hero-image1" src = {heroImage1}/>
                </div>
                <div className="hero2">
                    <div>
                        <h3>Event management with ease. From invite, to RSVP, to showtime.</h3>
                        <h4>Start from a ready-made template, and customize your event website and registration or RSVP experience from end-to-end. Track event invitees from invitation with RSVP link to registration to check-in.</h4>
                    </div>
                    <img className="hero-image1" src = {heroImage2}/>
                </div>
                <div className="hero3">
                    <img className="hero-image1" src = {heroImage3}/>
                    <div>
                        <h3>Create brilliantly customizable event registration and online RSVP forms.</h3>
                        <h4>From themes to layout, custom questions to secondary events, online payments to online invitations, RSVPify gives you complete control over your entire event registration and RSVP form.</h4>
                    </div>
                </div>
                <div className="hero4">
                    <h3>Pricing</h3>
                    <h4>Compare all our features and pricing to know which package is right for you</h4>
                    <button>Get Started</button>
                </div>
                <div className="footer">
                    <img className="lp-logo footer-logo footer-div" src = {logo} />
                    <div className="footer1 footer-div">
                        <h3>Product</h3>
                        <h4>Physical ticketing</h4>
                        <h4>Virtual ticketing</h4>
                        <h4>Cashless payment</h4>
                    </div>
                    <div className="footer2 footer-div">
                        <h3>Company</h3>
                        <h4>About us</h4>
                        <h4>FAQ</h4>
                        <h4>Blog</h4>
                    </div>
                    <div className="footer3 footer-div">
                        <h3>Folllow us</h3>
                        <div>
                            <img className="social-logo" src = {facebook} />
                            <img className="social-logo" src = {twitter} />
                            <img className="social-logo" src = {linkedIn} />
                            <img className="social-logo" src = {instagram} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}