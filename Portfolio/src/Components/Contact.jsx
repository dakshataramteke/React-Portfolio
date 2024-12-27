

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact_wrapper">
  <div className="container">
    <div className="row justify-content-between align-items-center">
      <div className=" mb-4 col-lg-6 order-2 order-lg-1 text-lg-start text-center">
        <h2>Contact Us</h2>
        <div className="row call_details">
          <label htmlFor="" className="col-sm-3 col-lg-4">Call us directly:</label>
          <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
            <a href="javascript:void(0)">+91 8484870974</a>
          </div>
          <label htmlFor="" className="col-sm-3 col-lg-4">Contact Email:</label>
          <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
            <a href="mailto:dakshataramteke00@gmail.com">dakshataramteke00@gmail.com</a>
          </div>
        </div>
        <form action="">
          <div className="mb-4">
            <input type="text" className="form-control" placeholder="Your Name"  required/>
          </div>
          <div className="mb-4">
            <input type="number" className="form-control" placeholder="Your Contact Number"  required/>
          </div>
          <div className="mb-4">
            <input type="email" className="form-control" placeholder="Your Email"  required/>
          </div>
          <div className="mb-4">
            <textarea name="" id="message" cols="40" rows="4" className="form-control" placeholder="Write a Message" ></textarea>
          </div>
          <button type="submit" className="main_btn">Submit</button>
        </form>
      </div>
      <div className="col-lg-6 order-1 mb-4 order-lg-1 mb-lg-0">
        <img src="/assests/images/phonering.jpg" className="img-fluid" alt=""/>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Contact
