import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home: React.FC = () => {
  useEffect(() => {
    // Add custom styles to remove underlines
    const style = document.createElement('style');
    style.textContent = `
      a {
        text-decoration: none !important;
      }
      a:hover {
        text-decoration: none !important;
      }
    `;
    document.head.appendChild(style);

    // Load vendor scripts dynamically
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load all required scripts
    const loadScripts = async () => {
      try {
        await loadScript('/assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
        await loadScript('/assets/vendor/aos/aos.js');
        await loadScript('/assets/vendor/glightbox/js/glightbox.min.js');
        await loadScript('/assets/vendor/swiper/swiper-bundle.min.js');
        await loadScript('/assets/js/main.js');
        
        // Initialize AOS if available
        if ((window as any).AOS) {
          (window as any).AOS.init();
        }
      } catch (error) {
        console.warn('Some vendor scripts failed to load:', error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      // Remove scripts on unmount if needed
    };
  }, []);

  return (
    <div className="index-page">
        {/* Main Content */}
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
            <img src="/assets/img/hero-img.svg" className="img-fluid animated" alt="Hero" />
            <h1>Welcome to <span>Smart Bio Medical</span></h1>
            <p>Advanced biomedical solutions for better healthcare outcomes.</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i><span>Watch Video</span>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section id="featured-services" className="featured-services section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-activity icon"></i></div>
                  <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
                  <h4><a href="" className="stretched-link">Sed ut perspici</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
                  <h4><a href="" className="stretched-link">Magni Dolores</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-broadcast icon"></i></div>
                  <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
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
                    {/* Similar content structure as tab 1 */}
                  </div>

                  <div className="tab-pane fade" id="about-tab3">
                    <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                    {/* Similar content structure as tab 1 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="clients section">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="col-xl-2 col-md-3 col-6 client-logo">
                  <img src={`assets/img/clients/client-${num}.png`} className="img-fluid" alt="" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section id="call-to-action" className="call-to-action section">
          <div className="container" data-aos="zoom-out">
            <div className="row g-5">
              <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
                <h3>Alias sunt quas <em>Cupiditate</em> oluptas hic minima</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a className="cta-btn align-self-start" href="#">Call To Action</a>
              </div>
              <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
                <div className="img">
                  <img src="assets/img/cta.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              {[
                { num: 1, icon: "bi-activity", title: "Nesciunt Mete", desc: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis." },
                { num: 2, icon: "bi-broadcast", title: "Eosle Commodi", desc: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem." },
                { num: 3, icon: "bi-easel", title: "Ledo Markt", desc: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti." },
                { num: 4, icon: "bi-bounding-box-circles", title: "Asperiores Commodit", desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque." },
                { num: 5, icon: "bi-calendar4-week", title: "Velit Doloremque", desc: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore." },
                { num: 6, icon: "bi-chat-square-text", title: "Dolori Architecto", desc: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim." }
              ].map((service, index) => (
                <div key={service.num} className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay={`${200 + index * 100}`}>
                  <div className="service-item">
                    <div className="img">
                      <img src={`assets/img/services-${service.num}.jpg`} className="img-fluid" alt="" />
                    </div>
                    <div className="details position-relative">
                      <div className="icon">
                        <i className={`bi ${service.icon}`}></i>
                      </div>
                      <a href="service-details.html" className="stretched-link">
                        <h3>{service.title}</h3>
                      </a>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="mb-5">
            <iframe style={{width: '100%', height: '400px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
          </div>

          <div className="container" data-aos="fade">
            <div className="row gy-5 gx-lg-5">
              <div className="col-lg-4">
                <div className="info">
                  <h3>Get in touch</h3>
                  <p>Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>

                  <div className="info-item d-flex">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h4>Location:</h4>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>

                  <div className="info-item d-flex">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h4>Email:</h4>
                      <p>info@example.com</p>
                    </div>
                  </div>

                  <div className="info-item d-flex">
                    <i className="bi bi-phone flex-shrink-0"></i>
                    <div>
                      <h4>Call:</h4>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer dark-background">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span className="sitename">Smart Bio Medical</span>
                </a>
                <div className="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                  <p><strong>Email:</strong> <span>info@example.com</span></p>
                </div>
              </div>
              {/* Add other footer columns... */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;