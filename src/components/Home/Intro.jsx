import { useEffect, useState } from "react";
import decor3 from "../../images/decoration/Group-31.png";
// import decor4 from "../../images/decoration/Path-25.png";
import "./Intro.css";
import { useGetJumboDetailsQuery } from "../../Api/api";
import { useGetSocialMediaQuery } from "../../Api/api";


const Intro = () => {
  const { data: conta } = useGetSocialMediaQuery();

  const { data: homeData, isFetching } = useGetJumboDetailsQuery();
  const [JumboDetails, setJumboDetails] = useState(homeData);
  const [contacts1Details, setContact2Details] = useState(conta);
  // import config from '../config.js';
  const BASEURL = "http://api.inavihs.tech"
  // const img_300 = "https://dwrqao8j794zb.cloudfront.net/for-static-use/";
  const doc = JumboDetails && JumboDetails.map((detail2) => detail2.name);

  useEffect(() => {
    setJumboDetails(homeData);
    setContact2Details(conta);

    document.title = doc;

  }, [JumboDetails, homeData, contacts1Details, conta, doc]);
  if (isFetching) return "loading";

  return (
    <>
      {JumboDetails &&
        JumboDetails.map((detail) => (
          <section className=" intro-page" id="home" key={detail.id}>
            <div className="decorations">
              <div className="decor-dot2">
                <img src={decor3} alt="" />
              </div>

              <div className="parcol"></div>
            </div>
            <div className="small-intro">
              <div className="intro-row">
                <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
                  <div className="intro-name">
                    <h3
                      className="hello"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                    >
                      {detail.job_title}
                    </h3>
                    <h3
                      className="name"
                      data-aos="fade-down"
                      data-aos-duration="1600"
                    >
                      {detail.heading}
                    </h3>
                    <h3
                      className="job  text-animate"
                      data-aos="fade-down"
                      data-aos-duration="1700"
                    >
                      {detail.name}
                    </h3>
                    <p
                      className="myinfo"
                      data-aos="fade-down"
                      data-aos-duration="1800"
                    >
                      {detail.description}
                    </p>
                  </div>
                  <div
                    className="intro-btns"
                    data-aos="fade-up"
                    data-aos-duration="1900"
                  >
                    <a
                      href={`mailto:${detail.contact}`}
                      className="contactMe"
                    >
                      <button className="contact-me">
                        Hire me <i className="bx bx-send "></i>
                      </button>
                    </a>
                  </div>
                  <div
                    className="intro-contact"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    <span>Follow Me:</span>
                    <ul>
                      <li>
                        {contacts1Details &&
                          contacts1Details.map((data1) => (
                            <a
                              href={data1.name}
                              className="icon-link"
                              target="_blank"
                              rel="noopener noreferrer"
                              key={data1.id}
                            >
                              <i className={data1.icon}></i>
                            </a>
                          ))}
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-7 col-md-6 col-sm-12 left-img "
                  data-aos="fade-down-left"
                >
                  <div className="ff">
                    {/* <img
                      className="intro-img"
                      src="https://drive.google.com/uc?id=1Mdc5CDgXVEZzjcc8JNkNSczkE0YJ0J8o"
                      alt=""
                    /> */}
                    <img
                      className="intro-img"
                      src={`${BASEURL}${detail.jumbo_img}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default Intro;
