import React from "react";
import aboutImage from "../../../../../assets/img/my-image.jpg";
import "./About.css";

function About() {
  return (
    <>
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img src={aboutImage} className="img-fluid rounded b-shadow-a" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span> <span>Asif Hassan Rahul</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span> <span>Web Designer/Developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span> <span>asifhassanrahul95@gmail.com</span>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span> <span>+88-01827116341</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      <span>HTML</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>CSS3</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>BOOTSTRAP</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>PHP</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>LARAVEL</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>REACT JS</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">Creative and innovative web designer and developer with over 4 years of experience in which I had the opportunity to work with a wide range of projects from university level applications to freelance projects, startups and non-profit work. I have competency over HTML, CSS, PHP, WordPress, WooCommerce, SQL Server, MYSQL and am currently learning Laravel and ReactJS. As a designer I have mastery over various Adobe software which allows me to translate designs perfectly into codes.</p>
                      <p className="lead">As a person I am ambitious, tenacious and most importantly - a hard worker. I take initiatives and focus on bringing something new to the table. I ensure a high standard of quality and am always open to learning new skills to enhance my arsenal. I have worked in collaborative environments in which I have proven my leadership and ability to adapt with others. In summary, I have the capability of becoming an asset for your company.</p>
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

export default About;
