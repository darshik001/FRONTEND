
import './About.css'
import AboutImg from '../../assets/about-img.png'
import { FaLongArrowAltRight } from "react-icons/fa";
 const About = ()=> {
  return (
    <>
      <div className='container'>
        <div className='about'>
<div className='about-img'>
  <img src={AboutImg} alt="" />
</div>
<div className='about-content'>
  <h2>About Shoroom</h2>
  <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
</p>
<a href=""><span>Read More</span> <span><FaLongArrowAltRight/> </span> </a>
</div>
        </div>
      </div>
    </>
  )
}


export default About;