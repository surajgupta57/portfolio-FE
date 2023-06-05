import "./ContactMe.css";
import { useGetContactsQuery } from "../../Api/api";
import { useEffect, useState } from "react";

const ContactMe = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();

  const [contactsDetails, setContactDetails] = useState(contacts);
  // const img_300 = "";
  useEffect(() => {
    setContactDetails(contacts);
  }, [contactsDetails, contacts]);
  if (isFetching) return "loading";
  return (
    <>
      <section id="contact">
        <div className="contact-me2">
          <div className="contact-me2-dec"></div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="work-togather-text">
                <h2 className="h2-title text-white ">Let's Work Together</h2>
                <p>
                  Are you impressed and want a project done, give a call or
                  email me any time.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
            <form action="">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <div className="form-group text-field">
                  <input type="text" name="name" className="form-input-one subscribe-input" required/>
                  <label>Name</label>
                </div>
                <div className="form-group text-field">
                  <input type="text" name="email" className="form-input-one subscribe-input" required/>
                  <label>Email</label>
                </div>
                <div className="form-group text-field">
                  <input type="text" name="phone" className="form-input-one subscribe-input" required/>
                  <label>Phone</label>  
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="form-group text-field">
                  <textarea name="query" id="message" cols="30" rows="7" className="form-input-one subscribe-input" required></textarea>
                  <label className="gradient-text">Message</label>
                </div>
                <div className="form-group">
                  <input type="submit" className="btn sec-btn btn-md" value="Send Message"/>
                </div>
              </div>
              
            </div>
          </form>
          </div>

            {/* <div className="col-lg-3 col-md-6">
              <div className="work-togather-form">
                <input
                  type="email"
                  name="Email"
                  className="form-input-one subscribe-input"
                  placeholder="Email Address"
                  required=""
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="work-togather-form">
                <input
                  type="email"
                  name="Email"
                  className="form-input-one subscribe-input"
                  placeholder="Email Address"
                  required=""
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 my-3">
              <div className="work-togather-form work-togather-form-btn">
                <button type="submit" className="sec-btn">
                  Subscribe Now
                </button>
              </div>
            </div> */}
          </div>
          
          <div className="contact-row">
            {contactsDetails &&
              contactsDetails.map((details) => (
                <div className="contact-info " key={details.id}>
                  <div className="contact-details">
                    <i className={details.icon}></i>
                    <h4 className="icon-name">{details.contact_name}:</h4>
                    <p className="d-name">{details.contact_info}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      
      {/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"> */}
        {/* <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"></link> */}
    </>
  );
};

export default ContactMe;
