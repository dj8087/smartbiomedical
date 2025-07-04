import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-5">
            <div className="about-img">
              <img src="assets/img/about-portrait.jpg" className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-7">
            <h3 className="pt-0 pt-lg-5">Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h3>

            <ul className="nav nav-pills mb-3">
              <li><a className="nav-link active" data-bs-toggle="pill" href="#about-tab1">Saepe fuga</a></li>
              <li><a className="nav-link" data-bs-toggle="pill" href="#about-tab2">Voluptates</a></li>
              <li><a className="nav-link" data-bs-toggle="pill" href="#about-tab3">Corrupti</a></li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="about-tab1">
                <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                
                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                </div>
                <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>
              </div>

              <div className="tab-pane fade" id="about-tab2">
                <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
              </div>

              <div className="tab-pane fade" id="about-tab3">
                <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
