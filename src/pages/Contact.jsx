import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineInfoCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { Meta } from "../components/Meta";
import { BreadCrumb } from "../components/BreadCrumb";
import { ques } from "../data";

const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper home-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="ques-inner-wrapper py-4">
                <h5>Hi, How can we help you?</h5>
                <div className="d-flex gap-10">
                  {ques.map((item, index) => (
                    <div key={index} className="ques-box mt-2">
                      <a href="" className="d-flex gap-10 align-items-center">
                        {item.icon}
                        <h5 className="mb-0 ">{item.title}</h5>
                      </a>
                      <p className="pt-3 text-secondary">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 pt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7379.930719574029!2d91.83303124516931!3d22.354936791130573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89e1a92c4b9%3A0xa6819d9009884ddb!2sChawk%20Bazar%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1684151776844!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h5 className="contact-title mb-4">Contact Us</h5>
                  <form
                    action=""
                    method="post"
                    className="d-flex flex-column gap-15"
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email*"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w- 100 form-control"
                        cols="30"
                        rows="10"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h5 className="contact-title mb-4">Get In Touch</h5>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex align-items-center gap-15 d-block">
                        <AiOutlineHome size={20} />
                        <address className="mb-0">
                          Hno: 989 Near Dhanmondi,
                          <br />
                          Dhaka-3456 ,Bangladesh
                          <br />
                          Pin-Code : 2345
                        </address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlinePhone size={20} />
                        <a href="+91 8264958884">+91 8264958884</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlineMail size={20} />
                        <a href="fadeli@gmail.com">fadeli@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlineInfoCircle size={20} />
                        <p className="mb-0">Monday - Friday 10 AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
