export default function Footer() {
  return (
    <>
      {/* Footer Top */}
      <footer className="footer-top text-white py-5 mt-5">
        <div className="container">
          <div className="row text-center">
            {/* Location */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="text-uppercase fw-bold mb-3">Location</h4>
              <p>Al-Lebini Pyramid Area<br />Giza, Cairo, Egypt</p>
            </div>

            {/* Social Media */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="text-uppercase fw-bold mb-3">Around the Web</h4>
              <div>
                <a href="#" className="social-icon mx-1"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon mx-1"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon mx-1"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-icon mx-1"><i className="fab fa-dribbble"></i></a>
              </div>
            </div>

            {/* About Freelancer */}
            <div className="col-md-4">
              <h4 className="text-uppercase fw-bold mb-3">About Freelancer</h4>
              <p>
    Freelance is a free to use, MIT licensed Bootstrap theme designed by
    <span className="text-success fw-bold"> Ragheedo</span>.
  </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center py-3">
        <p className="m-0">Copyright © Your Website 2025</p>
      </div>
    </>
  );
}
