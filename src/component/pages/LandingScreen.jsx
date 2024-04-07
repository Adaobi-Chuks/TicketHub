import Custom from "./Custom"
import Footer from "./Footer"
import HeroScreen from "./HeroScreen"
import Management from "./Management"
import Price from "./Price"


const LandingScreen = () => {
  return (
    <div>
       <HeroScreen/>
       <Management/>
       <Custom/>
       <Price/>
       <Footer/>
    </div>
  )
}

export default LandingScreen
