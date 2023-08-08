import "./Services.css";
import { useGetServicesQuery } from "../../Api/api";
import { useEffect, useState } from "react";
// import config from '../config.js';
const Services = () => {
  const { data: services, isFetching } = useGetServicesQuery();
  const [servicesDetails, setServicesDetails] = useState(services);
  const img_300 = "https://drive.google.com/uc?id=";
  const BASEURL = "http://api.inavihs.tech"
  useEffect(() => {
    setServicesDetails(services);
  }, [servicesDetails, services]);
  if (isFetching) return "loading";

  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>Services</h2>
            <h3>What Service i Offer you</h3>
          </div>

          <div className="service-row">
            {services &&
              services.map((service) => (
                <div
                  className=" my-service"
                  key={service.id}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <img src={`${BASEURL}${service.icon}`} alt="" />
                  <h4 className="web">{service.name}</h4>
                  <p className="service-info">{service.description}</p>
                  {/* <h6 className="learn-more">{service.learn_more}</h6> */}
                  <div className="shadow-icon">
                    <i className={service.shadow_icon}></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
