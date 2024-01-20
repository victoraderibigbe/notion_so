import Carousel from "../components/ImageCarousel"
import Hero from "../components/Hero"
import engineeringImg from '../assets/images/engineering.png'
import meetingNotesImg from '../assets/images/meeting-notes.png'
import projectImg from '../assets/images/projects.png'
import kombiImg from '../assets/images/Q_A_Kombi_Hero_screenshot.png'
import HomeFirstSection from "../components/HomeFirstSection"
import Navbar from "../components/Navbar"
import HomeSecondSection from "../components/HomeSecondSection"
import HomeThirdSection from "../components/HomeThirdSection"
import Footer from "../components/Footer"

const Home = () => {
    const images = [
        engineeringImg,
        meetingNotesImg,
        projectImg,
        kombiImg
    ]
  return (
    <>
        <header>
          <Navbar />
        </header>
        <main className="px-5 md:px-0">
          <Hero />
          <Carousel images={images} />
          <HomeFirstSection />
          <HomeSecondSection />
          <HomeThirdSection /> 
        </main>
        <footer>
          <Footer />
        </footer>
    </>
  )
}

export default Home