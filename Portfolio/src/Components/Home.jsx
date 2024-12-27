

const Home = () => {
  return (
    <>
    <section id="home" className="banner_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center text-md-start">
                    <h1>Dakshata Ramteke</h1>
                    <h6>I m a fresher <span> MERN Developer / React JS Developer</span></h6>
                    <div className="mt-4">
                    </div>
                    
                        <a href="../assets/DakshataRamteke.pdf" onClick={() => alert('Downloaded Resume')} target="_blank" className="main_btn">Download CV</a>

                </div>
            </div>
        </div>

     </section>
    </>
  )
}

export default Home
