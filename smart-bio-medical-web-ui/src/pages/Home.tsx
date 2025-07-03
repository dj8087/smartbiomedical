const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Welcome to Smart Bio Medical</h1>
              <p>Advanced healthcare solutions for a better tomorrow.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="fas fa-heart fa-3x mb-3"></i>
                <h4>Advanced Care</h4>
                <p>State-of-the-art medical technology and expertise.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="fas fa-user-md fa-3x mb-3"></i>
                <h4>Expert Team</h4>
                <p>Highly qualified medical professionals.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="fas fa-clock fa-3x mb-3"></i>
                <h4>24/7 Support</h4>
                <p>Round-the-clock medical assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
