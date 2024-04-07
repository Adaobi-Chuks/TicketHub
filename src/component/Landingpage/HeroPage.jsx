import React from 'react'
import { heroImage1 } from '@/assets/hero-image1.png';

const HeroPage = () => {
  return (
    <section>
      <div className="hero1">
                    <div>
                        <h2>Create any event in minutes.</h2>
                        <h4>Simple to use tools for a successful and profitable event</h4>
                        <button>Get Started</button>
                    </div>
                    <img className="hero-image1" src = {heroImage1}/>
                </div>
    </section>
  )
}

export default HeroPage
