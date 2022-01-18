import React from "react";
import background from "../../../../../assets/img/overlay-bg.jpg";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: `url(${background})` }}>
        <div className="overlay-mf" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send Message Us</h5>
                      </div>
                      <div>
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-md-12 text-center my-3">
                              <div className="loading">Loading</div>
                              <div className="error-message" />
                              <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="col-md-12 text-center">
                              <button type="submit" className="button button-a button-big button-rouded">
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
                        <ul className="list-ico">
                          <li>
                            <span className="bi bi-geo-alt" /> Dhaka, Bangladesh
                          </li>
                          <li>
                            <span className="bi bi-phone" /> +88-01827116341
                          </li>
                          <li>
                            <span className="bi bi-envelope" /> asifhassanrahul
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/ahr3665" target="_blank">
                              <span className="ico-circle">
                                <i className="bi bi-facebook" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/asif_hassan_rahul/" target="_blank">
                              <span className="ico-circle">
                                <i className="bi bi-instagram" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/asif-hassan-rahul/" target="_blank">
                              <span className="ico-circle">
                                <i className="bi bi-linkedin" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row my-5 ">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                      <h1>MY LOCATION</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                      <div className="mapouter">
                        <div className="gmap_canvas">
                          <iframe width={900} height={450} id="gmap_canvas" src="https://maps.google.com/maps?q=dhanmondi%20&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                          <a href="https://putlocker-is.org" />
                          <br />
                          <style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:450px;width:900px;}" }} />
                          <a href="https://www.embedgooglemap.net">embedded google maps in website</a>
                          <style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:450px;width:900px;}" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
