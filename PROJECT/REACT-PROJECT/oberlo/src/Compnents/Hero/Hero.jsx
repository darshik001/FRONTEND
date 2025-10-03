
import './Hero.css'
import '../Comman/Comman.css'
import nannerImg from '../../assets/banner-img.png'


const Hero = ()=> {
  return (
    <>
      <div className='hero-bg'>
        
         <div className='hero-main'>
          <div className='hero-slider'>
            <h2>New <br /> Model Cars</h2>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt uolore magna aliqua. Ut enim ad minim veniam, quis non</p>
            <div className='hero-slider-form'>
              <input type="text" />
            <button>&#8594;</button>
            </div>
            <button className='left-btn hero-btn'>&lt;</button>
            <button className='rigth-btn hero-btn'>&gt;</button>
            <div>
             
            </div>
          </div>
          <div className='hero-image'>
            <img src={nannerImg} alt="" />
          </div>
        </div>
       </div>
     



    
    </>
  )
}

export default Hero