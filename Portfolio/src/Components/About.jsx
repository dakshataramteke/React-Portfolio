import Header from './Header';
const About = () => {
  return (
    <>
    <Header/>
       <section id="about" className="about_wrapper">
      <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              {/* <img src="./assests/images/selfphoto.jpeg" alt="about-image" className="img-fluid"/> */}
            </div>
            <div className="col-lg-7 ps-lg-5 text-center text-lg-start">
              <div className="my-3 my-lg-0">
                <span className="subtitle">My about Details</span>
                <h2>About Me</h2>
                <p>My Name is Dakshata Ramteke , I am originally from Nagpur, I have been passionate about Web Development / Mern Stack Development. </p>
                <p>I am currently pursuing Master Degree in Computer Science and I have completed my Bachelor Degree in Computer Science.I have a good knowledge in frontend as well as backend Development. I specialize in MERN Stack Development .I have Sucessfully completed OJT Training in React Js. and also completed some projects. I am currently learning MERN Stack Development from Apna College.</p>
            
              </div>
              <div className="pt-4">
                <ul className="nav nav-pills justify-content-center justify-content-lg-between mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill" aria-selected="true">Skills</button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-experience-tab" data-bs-toggle="pill" data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience" aria-selected="false">Experience</button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="false">Education</button>
                  </li>

                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab">
                    <div className="single-process">
                      <h6>Designing</h6>
                      <div className="progress">
                        <div className="progress" role="progressbar" style="width:95%" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar"></div>
                        </div>
                        <span className="label">95%</span>
                      </div>
                    </div>

                    <div className="single-process">
                      <h6>HTML</h6>
                      <div className="progress">
                        <div className="progress" role="progressbar" style="width:95%" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar"></div>
                        </div>
                        <span className="label">95%</span>
                      </div>
                    </div>

                    <div className="single-process">
                      <h6>CSS</h6>
                      <div className="progress">
                        <div className="progress" role="progressbar" style="width:90%" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar"></div>
                        </div>
                        <span className="label">90%</span>
                      </div>
                    </div>

                    <div className="single-process">
                      <h6>JavaScript</h6>
                      <div className="progress">
                        <div className="progress" role="progressbar" style="width:60%" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar"></div>
                        </div>
                        <span className="label">60%</span>
                      </div>
                    </div>
                  </div>
        
                  <div className="tab-pane fade" id="pills-experience" role="tabpanel" aria-labelledby="pills-experience-tab" >
                    <ul className="text-start ps-0 list-unstyled">
                      <li>
                        <a href="#">
                         Teaching Assistance
                          <span>Disha Computer Institute</span>
                        </a>
                        Jan 2022-Dec 2022
                      </li>
                      <li>
                        <a href="#">
                         Process Associate
                          <span>DhanInfotech</span>
                        </a>
                        Sept 2023-Nov 2023
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab" >
                    <ul className="text-start ps-0 list-unstyled">
                      <li>
                        <a href="#">
                           Master in Computer Science
                          <span>Prerna College, Nagpur</span>
                        </a>
                        2023-2025
                      </li>
                      <li>
                        <a href="#">
                          Bachelor in Computer Science
                          <span>Shree Mathuradas Mohta College of Science </span>
                        </a>
                        2017-2021
                      </li>
                      <li>
                        <a href="#">
                         Higher Secondary School Certificate
                          <span> Dinanath Junior College</span>
                        </a>
                        2016-2017
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
     </section>
    {/* <!-- about section exit  --> */}

    </>
  )
}

export default About
