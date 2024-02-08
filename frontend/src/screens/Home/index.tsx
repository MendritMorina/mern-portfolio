import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return(
    <div>
        <Header/>
      <div className='bg-primary px-40 sm:px-5'>
        <Intro/>
        <About/>
        <Experiences/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home
