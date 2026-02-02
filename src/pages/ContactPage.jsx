import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../components/MainLayout";
import Logo from "../assets/home/adishpatnilogo.png";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const closeRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatusMessage({ type: "error", text: "Please fill in all required fields." });
      return;
    }

    setLoading(true);
    try {
      const templateParams = {
        title: "New Inquiry from Website", // Matching {{title}} in Subject
        from_name: formData.firstName,
        name: formData.firstName, // Matching {{name}} in Template Body
        from_email: formData.email,
        contact_number: formData.contactNumber,
        message: formData.message,
        reply_to: formData.email, // Matches {{reply_to}} if used
      };

      const result = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        setFormData({
          firstName: "",
          email: "",
          contactNumber: "",
          message: "",
        });
        if (closeRef.current) {
          closeRef.current.click();
        }
        setStatusMessage({ type: "success", text: "Message sent successfully!" });
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatusMessage({ type: "error", text: "Failed to send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };
  return (
    <MainLayout>
      <section className="office-section">
        <div className="text-center">
          {/* <h1 className="contact-title">Atelier Adish Patni</h1>
          <h6 className="contact-title mt-0 mb-3" style={{ fontWeight: '400', fontSize: "14px" }}>
            art | architecture | interior
          </h6> */}

          <img
            src={Logo}
            alt="ATELIER ADISH PATNI"
            height="100px"
            width="300px"
            style={{
              mixBlendMode: 'screen',
              filter: 'brightness(1.2)'
            }}
          />

          <p className="office-text">
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="https://www.google.com/maps/search/?api=1&query=R.R+Heights+B.G+Road+Bangalore+560076"
              target="_blank"
              rel="noreferrer"
            >
              12, R.R Heights <br /> B.G Road, Bangalore
            </a>
          </p>
          <div
            style={{
              width: "20px",
              height: "1px",
              margin: "18px auto",
              backgroundColor: "#cfcbcb",
            }}
          />
          <p className="office-text">
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="https://www.google.com/maps/search/?api=1&query=72%20Saket%20Nagar%20Indore%20452018"
              target="_blank"
              rel="noreferrer"
            >
              72, Saket Nagar <br /> Club Road, Indore
            </a>
          </p>

          <p className="office-telephone">
            <a href="tel:+918550811105" style={{ textDecoration: "none", color: "inherit" }}>
              Contact : +91 85508 11105
            </a>
          </p>

          <a
            href="mailto:studio@adishpatni.com"
            style={{ textDecoration: "none", color: "#fff" }}
            rel="noreferrer"
            target="_blank"
          >
            <p className="office-text">Email : studio@adishpatni.com</p>
          </a>
          <button type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="office-text" style={{ background: "none", border: "none" }}>
            Get In Touch
          </button>
        </div>
      </section>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div>&nbsp;</div>
              <div className="text-center">
                <h5
                  className="modal-title"
                  style={{ fontSize: "24px", color: "#FFFFFF" }}
                  id="staticBackdropLabel"
                >
                  Atelier Adish Patni
                </h5>
                <h5
                  className="modal-title"
                  style={{ fontSize: "16px", color: "#FFFFFF", fontWeight: "500" }}
                  id="staticBackdropLabel"
                >
                  art | architecture | interior
                </h5>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-close btn-close-white" // Yahan change kiya hai
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">
                  <p className="modal-text">First Name</p>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-100 modal-input"
                  />
                </div>
                <div className="col-12 mt-3">
                  <p className="modal-text">Email Address</p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-100 modal-input"
                  />
                </div>
                <div className="col-12 mt-3">
                  <p className="modal-text">Contact Number</p>
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-100 modal-input"
                  />
                </div>
                <div className="col-12 mt-3">
                  <p className="modal-text">Message (text)</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-100 modal-input"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                ref={closeRef}
                className="close-btn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="close-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {statusMessage.text && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={() => setStatusMessage({ type: "", text: "" })}
        >
          <div
            style={{
              backgroundColor: "#1c1c1c",
              padding: "40px",
              borderRadius: "8px",
              textAlign: "center",
              maxWidth: "400px",
              width: "90%",
              border: "1px solid #333",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5
              style={{
                color: "#fff",
                fontSize: "22px",
                marginBottom: "20px",
                fontFamily: "'Baskervville', serif",
              }}
            >
              Atelier Adish Patni
            </h5>
            <p
              style={{
                color: statusMessage.type === "error" ? "#ff4d4d" : "#fff",
                fontSize: "16px",
                marginBottom: "30px",
              }}
            >
              {statusMessage.text}
            </p>
            <button
              onClick={() => setStatusMessage({ type: "", text: "" })}
              className="close-btn"
              style={{ width: "120px" }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default ContactPage;
