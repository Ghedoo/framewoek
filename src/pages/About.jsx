export default function About() {
  return (
    <section
      className="about-section text-white d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundColor: "#1abc9c",
        minHeight: "100vh", // ارتفاع الشاشة كامل
        paddingTop: "80px", // مسافة خفيفة لتفادي تغطية النافبار
      }}
    >
      {/* العنوان */}
      <h2 className="text-uppercase fw-bold mb-4">About component</h2>

      {/* الفاصل */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div
          className="line me-3"
          style={{ width: "80px", height: "4px", backgroundColor: "#fff" }}
        ></div>
        <i className="fas fa-star fs-4"></i>
        <div
          className="line ms-3"
          style={{ width: "80px", height: "4px", backgroundColor: "#fff" }}
        ></div>
      </div>

      {/* النص */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <p className="lead">
         Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-5">
            <p className="lead">
    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
