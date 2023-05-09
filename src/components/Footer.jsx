import { Link } from "react-router-dom"
import { BsLinkedin,BsInstagram,BsGithub,BsYoutube } from "react-icons/bs"


const Footer = () => {
  return (
    <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center py-3">
          <div className="col-5">
            <div className="footer-top d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="" />
              <h2 className="mb-0 text-white">Sign Up For News Letter</h2>
            </div>
          </div>
          <div className="col-7">
          <div class="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Mail Address..."
                  aria-label="Your Mail Address..."
                />
                <span class="input-group-text py-2">
                 Subscribe
                </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className="text-white">
                Hno: 989 Near Dhanmondi,<br/>Dhaka-3456 ,Bangladesh<br/>Pin-Code : 2345
              </address>
              <div>
                <a href="">+91 8264958884</a><br/>
              <a href="">fadeli@gmail.com</a><br/>
              </div>
            </div>
            <div className="social-icons d-flex gap-10 py-3 align-items-center">
              <a href=""><BsLinkedin/></a>
              <a href=""><BsInstagram/></a>
              <a href=""><BsGithub/></a>
              <a href=""><BsYoutube/></a>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
            <div className="quick-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms of Service</Link>
                <Link className="text-white py-2 mb-1"> Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Account</h4>
            <div className="quick-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Assessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1"> Smart Watch</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="quick-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Assessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1"> Smart Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              &copy;{new Date().getFullYear()};Developed By Solayman
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
    
  )
}

export default Footer