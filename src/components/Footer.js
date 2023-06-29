import React from "react"
import { Navbar, Button } from "reactstrap"
import "../styles/Footer.css"
import Ylogo from "../assets/Ylogo.png"

const Footer = () => {

  return (
    <>
     <Navbar className="foot-navbar" color="transparent">
        <div>
          <img src={Ylogo} alt="Ylogo png" className="yfooter-logo" />
          </div>
        <div className='btn2-container'>
          <Button
            className='aboutus-view-btn'
            size="sm"
            href="/aboutus"
          >
            About Us
          </Button>
        </div>
      </Navbar>
    </>
  )
}

export default Footer