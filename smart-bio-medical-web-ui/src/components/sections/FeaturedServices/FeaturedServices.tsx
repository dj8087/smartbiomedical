import React from 'react';

const FeaturedServices: React.FC = () => {
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-briefcase icon"></i></div>
              <h4><a href="" className="stretched-link">Business Service</a></h4>
              <p>Comprehensive business solutions tailored for biomedical companies and healthcare organizations</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-share icon"></i></div>
              <h4><a href="" className="stretched-link">Strategic Sharing</a></h4>
              <p>Knowledge transfer and strategic partnerships to advance biomedical innovation and research</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-graph-up-arrow icon"></i></div>
              <h4><a href="" className="stretched-link">Market Development</a></h4>
              <p>Market analysis and development assistance for biomedical products and healthcare solutions</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-headset icon"></i></div>
              <h4><a href="" className="stretched-link">Technical Support</a></h4>
              <p>24/7 online and on-spot technical support for all biomedical equipment and systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
