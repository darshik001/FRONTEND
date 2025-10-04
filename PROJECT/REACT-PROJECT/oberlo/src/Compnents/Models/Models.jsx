import "./Models.css";
import { FaLongArrowAltRight } from "react-icons/fa";

import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
const Models = () => {
  return (
    <>
      <div className="models">
        <div className="container">
          <div className="models-item">
            <div className="models-title">
              <h2>Our Models Cars</h2>
            </div>

            <div className="models-content">
              <div className="models-img">
                <img src={img1} alt="" />
              </div>
              <div className="models-description">
                <h3>
                  <span>01</span>
                  New Carolo car
                </h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <div>
                  <p>
                    <span>Price</span>
                    $30000.00
                  </p>
                  <a href="">
                    <span>Read More</span>{" "}
                    <span>
                      <FaLongArrowAltRight />{" "}
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="models-content">
              <div className="models-description">
                <h3>
                  <span>01</span>
                  New Carolo car
                </h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <div>
                  <p>
                    <span>Price</span>
                    $30000.00
                  </p>
                  <a href="">
                    <span>Read More</span>{" "}
                    <span>
                      <FaLongArrowAltRight />{" "}
                    </span>{" "}
                  </a>
                </div>
              </div>

              <div className="models-img">
                <img src={img2} alt="" />
              </div>
            </div>

            <div className="models-content">
              <div className="models-img">
                <img src={img3} alt="" />
              </div>
              <div className="models-description">
                <h3>
                  <span>01</span>
                  New Carolo car
                </h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <div>
                  <p>
                    <span>Price</span>
                    $30000.00
                  </p>
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
      </div>
    </>
  );
};

export default Models;
