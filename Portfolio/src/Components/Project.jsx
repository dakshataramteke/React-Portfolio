

const Project = () => {
  return (
    <>
      
      <section id="projects" className="project_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center mb-4">
              <span className="subtitle">My Complete Projects</span>
              <h2>My Latest Project</h2>
           <p>I have created Serval projects on Frontend as well as backend</p>
        
            </div>
          </div>
          <div className="row">
            <h2>Frontend Projects</h2>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card p-0">
                <span style="background-image: url('./assests/resumepr/project2.png');"></span>
                <h6 className="text-center">HeadPhone Products</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4" >
              <div className="card p-0">
                <span style="background-image: url('./assests/resumepr/project1.jpeg');"></span>
                <h6 className="text-center">Spotify Clone</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4" >
              <div className="card p-0">
                <span style="background-image: url('./assests/resumepr/project3.png');"></span>
                <h6 className="text-center">Foodie Website</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card p-0">
                <span style="background-image: url('./assests/resumepr/project4.png');"></span>
                <h6 className="text-center">Hotel Booking</h6>
              </div>
            </div>
          </div>
        
          <div className="row mt-3">
            <h2>Full Stack Projects</h2>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card p-0">
                <span style="background-image: url('./assests/resumepr/backend1.png');"></span>
                <h6 className="text-center">Student Management System</h6>
              </div>
            </div>
             <div className="col-lg-3 col-md-6 mb-4">
              <div className="card p-0">
                <span style="background-image: url('./assests/resumepr/backend2.png');"></span>
                <h6 className="text-center">WanderLust </h6>
              </div>
            </div> 
           
          </div>
        </div>
        </section>
    </>
  )
}

export default Project
