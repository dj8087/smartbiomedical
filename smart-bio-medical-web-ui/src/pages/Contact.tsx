const Contact = () => {
  return (
    <div className="container py-5">
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows={4}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-lg-6">
          <h5>Get in Touch</h5>
          <p>Email: info@smartbiomedical.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Medical Center Dr, Healthcare City, HC 12345</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
