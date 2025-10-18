import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validate = (field) => {
    if (!formData[field] && touched[field]) {
      return "error";
    } else if (formData[field]) {
      return "valid";
    } else {
      return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);

    const hasError = Object.keys(formData).some((key) => !formData[key]);
    if (!hasError) {
      alert("Form submitted!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTouched({ name: false, email: false, phone: false, message: false });
    }
  };

  return (
    <section
      className="contact-section py-5 d-flex flex-column justify-content-center"
      style={{ backgroundColor: "#fff", minHeight: "100vh", paddingTop: "120px ", marginTop: "100px" }}
    >
      <div className="container text-center">
        <h2 className="text-uppercase fw-bold mb-4" style={{ color: "#2c3e50" }}>
          Contact Me
        </h2>

       <div className="d-flex justify-content-center align-items-center mb-5">
  <div className="line me-3"></div>  {/* الخط الأيسر */}
  <i className="fas fa-star fs-4" style={{ color: "#2c3e50" }}></i>
  <div className="line ms-3"></div>  {/* الخط الأيمن */}
</div>


        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-start">
            <form onSubmit={handleSubmit} className="contact-form">
              {["name", "email", "phone", "message"].map((field) => (
                <div className="form-group mb-4" key={field}>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${validate(field)}`}
                      rows="4"
                      placeholder=" "
                    ></textarea>
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${validate(field)}`}
                      placeholder=" "
                    />
                  )}
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  {validate(field) === "error" && (
                    <small className="text-danger">{`${field.charAt(0).toUpperCase() + field.slice(1)} is required`}</small>
                  )}
                </div>
              ))}

              <div className="text-start">
                <button
                  type="submit"
                  className="btn text-white px-4 py-2"
                  style={{ backgroundColor: "#1abc9c" }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
