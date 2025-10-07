import './Client.css'
import ClientImg from '../../assets/client-img.png'
import quickIcon from '../../assets/quick-icon.png'

 const Client =()=> {
  return (
    <>
     <div className='Client'>
      <div className='container'>
        <div className='client-title'>
          <h2>What Says Our Students</h2>
          <p>It is a long established fact that a reader will be distracted by the readable c
</p>
        </div>

        <div className='client-inner'>
          <div className='client-img'>
            <div className='client-img-inner'>

            <img src={ClientImg} alt="" />
            </div>
          </div>
          <div className='client-content'>
            <h3>DenoMark</h3>
            <p>anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet
</p>
            <div>
              <img src={quickIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}


export default Client;