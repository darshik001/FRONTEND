import './Navbar.css'

const  Navbar = ()=> {
  return (
    <>
 <header>
  <div className='nav-container'>
       <nav>
         <ul>
          <li className="nav-item">
            <a className="nav-link" href="">HOME</a>
          </li>

           <li className="nav-item">
            <a className="nav-link" href="">MODEL</a>
          </li>

           <li className="nav-item">
            <a className="nav-link" href="">ABOUT</a>
          </li>

           <li className="nav-item">
            <a className="nav-link nav-brand" href="">
                <span className="brand-highlight">OB</span>erlo
            </a>
            
          </li>

           <li className="nav-item">
            <a className="nav-link" href="">PRICE</a>
          </li>

           <li className="nav-item">
            <a className="nav-link" href="">BLOG</a>
          </li>
          
           <li className="nav-item">
            <a className="nav-link" href="">CONTACT</a>
          </li>
        </ul>
       </nav>
  </div>
 </header>
    </>
  )
}

export default Navbar