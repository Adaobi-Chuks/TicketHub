import React from 'react'
import { heroImage3 } from '@/assets/hero-image3.png';

const Custom = () => {
  return (
    <section>
      <div className="hero3">
                    <img className="hero-image1" src = {heroImage3}/>
                    <div>
                        <h3>Create brilliantly customizable event registration and online RSVP forms.</h3>
                        <h4>From themes to layout, custom questions to secondary events, online payments to online invitations, RSVPify gives you complete control over your entire event registration and RSVP form.</h4>
                    </div>
                </div>
    </section>
  )
}

export default Custom
