import React from 'react';

const Clients: React.FC = () => {
  return (
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
  );
};

export default Clients;
