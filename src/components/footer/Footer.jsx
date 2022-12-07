import React from "react";

const Footer = () => {
    return (
        <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col'>
           <h4>About Us</h4>
           <ul>
             <li>News</li>
             <li>Oppoturnities</li>
             <li>Purpose</li>
             <li>Partners</li>
           </ul>
        </div>
          <div className='footer-col'> 
              <h4>Company</h4>
              <ul>
                <li>Find A Store</li>
                <li>Promotions</li>
                <li>Our Journal</li>
                <li>Send Us Feedback</li>
              </ul>
          </div>
          <div className='footer-col'> 
              <h4>Get Help</h4>
              <ul>
                <li>Order Status</li>
                <li>Shipping & Delivery</li>
                <li>Payment Options</li>
                <li>Gift Cards</li>
                <li>Blog</li>
                <li>FAQs</li>
              </ul>
          </div>
        <div className='footer-col'>
           <h4>Socials</h4>
           <div className='social-links'>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook </li>
              <li>Youtube</li>
            </ul>
            </div>
         </div>
        </div>
        <div className='last'>
          <p>Copyright &copy; {new Date().getFullYear()}, Moringa Devs | All rights reserved | Terms of Service | Privacy</p>
          </div> 
      </div>
    </footer>
    )
}

export default Footer;