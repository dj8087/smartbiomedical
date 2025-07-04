import React from 'react';

const Services: React.FC = () => {
  const services = [
    { num: 1, icon: "bi-activity", title: "Nesciunt Mete", desc: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis." },
    { num: 2, icon: "bi-broadcast", title: "Eosle Commodi", desc: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem." },
    { num: 3, icon: "bi-easel", title: "Ledo Markt", desc: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti." },
    { num: 4, icon: "bi-bounding-box-circles", title: "Asperiores Commodit", desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque." },
    { num: 5, icon: "bi-calendar4-week", title: "Velit Doloremque", desc: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore." },
    { num: 6, icon: "bi-chat-square-text", title: "Dolori Architecto", desc: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim." }
  ];

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          {services.map((service, index) => (
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
  );
};

export default Services;
