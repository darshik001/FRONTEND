
import './Choose.css'
import icon1 from '../../assets/icon-1.png'
import icon2 from '../../assets/icon-2.png'
import icon3 from '../../assets/icon-3.png'
import icon4 from '../../assets/icon-4.png'

const Choose = () => {
  return (
    <>
      <div className='choose'>
        <div className='container'>
          <div className='choose-item'>

            <div className='choose-content'>
              <h2>
                <span><img src={icon1} alt="" />
                  3700</span>
              </h2>
              <p>Happy Clients</p>
            </div>



            <div className='choose-content'>
              <h2>
                <span><img src={icon2} alt="" />
                  3700</span>
              </h2>
              <p>Happy Clients</p>
            </div>

            <div className='choose-content'>
              <h2>
                <span><img src={icon3} alt="" />
                  3700</span>
              </h2>
              <p>Happy Clients</p>
            </div>

            <div className='choose-content'>
              <h2>
                <span><img src={icon4} alt="" />
                  3700</span>
              </h2>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Choose;
