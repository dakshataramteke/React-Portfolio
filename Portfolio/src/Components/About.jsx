import selfPhoto from '../assets/images/selfphoto.jpeg';
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';

const About = () => {
  return (
    <section id="about" className="about_wrapper mt-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img src={selfPhoto} alt="about-image" className="img-fluid" />
          </div>
          <div className="col-lg-7 ps-lg-5 text-center text-lg-start">
            <div className="my-3 my-lg-0">
              {/* <span className="subtitle">My about Details</span> */}
              <h2>About Me</h2>
              <p>My Name is Dakshata Ramteke, I am originally from Nagpur, I have been passionate about Web Development / Mern Stack Development.</p>
              <p>I am currently pursuing a Masters Degree in Computer Science and I have completed my Bachelors Degree in Computer Science. I have a good knowledge of frontend as well as backend Development. I specialize in MERN Stack Development. I have successfully completed OJT Training in React Js and also completed some projects. I am currently learning MERN Stack Development from Apna College.</p>
            </div>
            <div className="pt-4">
              <ul className="nav nav-pills justify-content-center justify-content-lg-around mb-3" id="pills-tab" role="tablist">
                
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-experience-tab" data-bs-toggle="pill" data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience" aria-selected="false">Experience</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="false">Education</button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
               
                <div className="tab-pane fade" id="pills-experience" role="tabpanel" aria-labelledby="pills-experience-tab">
                  <ul className="text-start ps-0 list-unstyled">
                  <li>
                      <a href="#">
                      Web Development -
                        <span>CodSoft</span>
                      </a>
                      Jun 2024 - July 2024
                    </li>
                  <li>
                      <a href="#">
                        Process Associate -
                        <span>DhanInfotech</span>
                      </a>
                      Sept 2023-Nov 2023
                    </li>
                    <li>
                      <a href="#">
                        Teaching Assistance -
                        <span>Disha Computer Institute</span>
                      </a>
                      Jan 2022-Dec 2022
                    </li>
                   
                  </ul>
                </div>
                <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                  <ul className="text-start ps-0 list-unstyled ">
                    <li >
                      <a href="#">
                        Master in Computer Science -
                        <span className='text-end'>Prerna College, Nagpur</span>
                      </a>
                      2023-2025
                    </li>
                    <li>
                      <a href="#">
                        Bachelor in Computer Science -
                        <span>Shree Mathuradas Mohta College of Science</span>
                      </a>
                      2017-2021
                    </li>
                    <li>
                      <a href="#">
                        Higher Secondary School - 
                        <span>Dinanath Junior College</span>
                      </a>
                      2016-2017
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills  */}
        <div className="row mt-3">
       
          <div className="col-12 col-lg-12 ">
          <h2>Skills</h2>
          <div className="row text-center">
             <div className="col-12 col-md-4 col-lg-3 my-3 ">
             <div className="card ">
              <h4><HtmlIcon/> <CssIcon/></h4>
              <h5>HTML5 & CSS</h5>
             </div>
             </div>
          <div className="col-12 col-md-4 col-lg-3 my-3">
          <div className="card ">
          <h4><JavascriptIcon/></h4>
          <h5>JavaScript</h5>
          </div>
         
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3">
          <div className="card ">
          <h4><CodeIcon/></h4>
          <h5>Node JS</h5>
          </div>
         
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3">
          <div className="card ">
          <h4><CodeIcon/></h4>
          <h5>React Js/ Vite</h5>
          </div>
         
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3">
          <div className="card ">
          <h4><StorageIcon/></h4>
          <h5>Mongo DB & SQL</h5>
          </div>  
        
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3">
          <div className="card ">
          <h4><CodeIcon/></h4>
          <h5>C & C++</h5>
          </div>
        
          </div>
          </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;