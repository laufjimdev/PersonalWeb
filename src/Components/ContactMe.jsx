import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactMe() {
  return (
    <div className="container py-5" style={{ backgroundColor: "#ede4f7a7" }}>
      <div className="row align-items-center justify-content-center">
        
        {/* Left Section - Text Info */}
        <div className="col-lg-6 col-md-7 mb-4 mb-lg-0">
          <span
            className="badge px-3 py-2 mb-3 mt-3 fw-semibold"
            style={{ backgroundColor: "#C77DFF", color: "#FFFFFF" }}
          >
            Available for Projects
          </span>

          <h1 className="fw-bold mb-1" style={{ color: "#333333" }}>
            Hello, I'm{" "}
            <span style={{ color: "#5A189A" }}>Laura Jimenez</span>
          </h1>
        
          <p className="lead" style={{ color: "#555555" }}>
            This is my first ever React project, focused on creating engaging, user-friendly web experiences and always eager to learn more.
          </p>

          <div
            className="p-4 rounded-4 shadow-sm mt-4"
            style={{ backgroundColor: "#ece8f1bc" }}
          >
            <h5 className="fw-bold mb-2" style={{ color: "#5A189A" }}>
              <i className="bi bi-envelope me-2"></i> Get In Touch
            </h5>
            <small className="text-uppercase text-muted fw-semibold">Email</small>
            <p className="mb-0">
              <a
                href="mailto:laufjimdev@gmail.com"
                className="text-decoration-none"
                style={{ color: "#5A189A" }}
              >
                laufjimdev@gmail.com
              </a>
            </p>
          </div>

          <a
            href="#"
            className="btn btn-lg rounded-pill mt-4 px-4 shadow-sm"
            style={{
              background: "linear-gradient(145deg, #6B21A8, #5A189A)",
              color: "#FFFFFF",
              border: "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            View My Portfolio
          </a>

        </div>

        {/* Right Section - Profile Image with Purple Shape */}
        <div className="col-lg-4 col-md-5 text-center position-relative">
          {/* Decorative background shape */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "105%",
              height: "105%",
              background: "linear-gradient(135deg, #b5afbaff, #4c325fff)",
              borderRadius: "30px",
              zIndex: 0,
            }}
          ></div>

          {/* Profile Image */}
          <img
            src="/assets/lja.jpeg" // replace with your profile pic path
            alt="Laura Jimenez Almanzar"
            className="img-fluid rounded-4 shadow"
            style={{
              maxHeight: "350px",
              objectFit: "cover",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}