import './Blog.css'
import img1 from '../../assets/img-4.png'
import img2 from '../../assets/img-5.png'
import img3 from '../../assets/img-6.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const Blog = () => {
  return (
    <>
      <div className='blog'>
        <div className='container'>
          <div className='blog-title'>
            <h2>FEATURED VEHICLES</h2>
          </div>
          <div className='blog-content'>

            <div className='blog-item'>
              <div className='blog-img'>
                <img src={img1} alt="" />

                <div className='blog-price'>
                <div className='blog-price-iiner'>
                <a href="">Price $ 40000.0</a>
                </div>
              </div>
              </div>

              

              <div className='blog-inner'>
                <h2>Voluptate</h2>
                <p>Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                <a href="">
                  <span>Read More</span>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                </a>
              </div>
            </div>



                        <div className='blog-item'>
              <div className='blog-img'>
                <img src={img2} alt="" />
             <div className='blog-price'>
                <div className='blog-price-iiner blog-price-iiner-2'>
                <a href="">Price $ 40000.0</a>
                </div>
              </div>
              </div>
              <div className='blog-inner'>
                <h2>Voluptate</h2>
                <p>Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                <a href="">
                  <span>Read More</span>{" "}
                  <span>
                    <FaLongArrowAltRight />{" "}
                  </span>{" "}
                </a>
              </div>
            </div>




                        <div className='blog-item'>
              <div className='blog-img'>
                <img src={img3} alt="" />
               <div className='blog-price'>
                <div className='blog-price-iiner'>
                <a href="">Price $ 40000.0</a>
                </div>
              </div>
              </div>
              <div className='blog-inner'>
                <h2>Voluptate</h2>
                <p>Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                <a href="">
                  <span>Read More</span>{" "}
                  <span>
                    <FaLongArrowAltRight />{" "}
                  </span>{" "}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}


export default Blog;
