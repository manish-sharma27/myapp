import React from 'react'
import Logo from '../assets/logo.png'
import Award from '../assets/award.png'
import Awardc from '../assets/awardc.png'
import Product from '../assets/products.png'

const Home = () => {
  return (
    <div>
      <div className="wrapper">
      <div className="header">
        <img className="log-img" src={Logo}></img>
      </div>
      <div className="header-content">
        <div className="l1">
          <div className="image-body">
            <img className="award-img" src={Award}></img>
          </div>
        </div>
        <div className="l2">
          <h4>
            <b>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </b>
          </h4>
          <table>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </table>
          <div className="header-img">
            <img className="award-ceremony" src={Awardc}></img>
          </div>
          <p>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="third-block">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div className="third-block-image">
          <div>
            <img className="product-img" src={Product}></img>
          </div>
        </div>
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        {/* <hr></hr> */}
      </div>
      <br></br>
      <div className="footer-body">
        <div className="footer-box">
          <img></img>
          <a>Toll Free 1800 200 1234</a>
          <img></img>
          <a>www.facebook.com/cripumps</a>
          <img></img>
          <a>www.crigroups.com</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
