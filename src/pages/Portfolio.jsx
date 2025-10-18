import { useState } from "react";
import TitleDivider from "../components/TitleDivider";

export default function Portfolio() {
  const items = [
    {
      id: 1,
      img: "/assets/portfolio/pngtree-chocolate-splash-background-picture-image_2280612.jpg" ,
      loading: "lazy",
      title: "LOG CABIN",
      description: "Milk Chocolate: A mixture of cocoa, milk, and sugar. Sweet and mild, popular with everyone.",
      github: "https://github.com/Ghedoo",
      live: "https://yourdomain.com/log-cabin"
    },
    {
      id: 2,
      img: "/assets/portfolio/pngtree-pile-of-chocolate-bars-on-a-black-surface-picture-image_3521327 (1).jpg",
      loading: "lazy",
      title: "TASTY CAKE",
      description: "Dark Chocolate: Contains a high percentage of cocoa and little sugar. Known for its health benefits, such as antioxidants.",
      github: "https://github.com/Ghedoo",
      live: "https://yourdomain.com/tasty-cake"
    },
    {
      id: 3,
      img: "/assets/portfolio/pngtree-variety-of-chocolates-on-a-dark-background-picture-image_2693832.jpg",
      loading: "lazy",
      title: "CIRCUS TENT",
      description: "White Chocolate: Does not contain solid cocoa, made from cocoa butter, sugar, and milk. Sweet and creamy..",
      github: "https://github.com/Ghedoo",
      live: "https://yourdomain.com/circus-tent"
    },
    {
      id: 4,
      img: "/assets/portfolio/pngtree-chocolate-with-a-cut-is-on-a-wooden-table-with-black-picture-image_2653123.jpg",
      loading: "lazy",
      title: "CIRCUS TENT",
      description: "Benefits of Chocolate: Improves mood, provides antioxidants, enhances blood circulation, and gives quick energy.",
      github: "https://github.com/Ghedoo",
      live: "https://yourdomain.com/circus-tent"
    },
    {
      id: 5,
      img: "/assets/portfolio/pngtree-chocolate-bar-on-black-background-with-little-bits-of-chocolate-picture-image_3168501.jpg",
      loading: "lazy",
      title: "CIRCUS TENT",
      description: "A circus-themed interactive website project.",
      github: "https://github.com/Ghedoo",
      live: "https://yourdomain.com/circus-tent"
    },
    {
      id: 6,
      img: "/assets/portfolio/pngtree-background-of-chocolate-chunks-and-balls-picture-image_2666184.jpg",
      loading: "lazy",
      title: "CIRCUS TENT",
      description: "A circus-themed interactive website project.",
      github: "https://github.com/Ghedoo",
      live: "https://yourdomain.com/circus-tent"
    },

  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <section
      className="portfolio-section container text-center"
      style={{ paddingTop: "150px", paddingBottom: "80px" }}
    >
      <h2 className="text-uppercase fw-bold mb-4">Portfolio</h2>
      <TitleDivider color="dark" />

      <div className="row g-4 mt-4">
        {items.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4">
            <div
              className="card position-relative overflow-hidden portfolio-item"
              style={{ cursor: "pointer" }}
              onClick={() => openModal(item)}
            >
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-white">
                <i className="fa-solid fa-plus fs-2"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 text-center p-4">
              <button
                type="button"
                className="btn-close ms-auto"
                onClick={closeModal}
              ></button>
              <h2 className="text-uppercase fw-bold mt-3">{selectedItem.title}</h2>
              <div className="d-flex align-items-center justify-content-center my-3">
                <div
                  style={{ width: "100px", height: "4px", backgroundColor: "#2C3E50" }}
                ></div>
                <i className="fa-solid fa-star mx-3"></i>
                <div
                  style={{ width: "100px", height: "4px", backgroundColor: "#2C3E50" }}
                ></div>
              </div>
              <img
                src={selectedItem.img}
                className="img-fluid rounded mb-4"
                alt="modal-img"
              />
              <p className="text-muted">{selectedItem.description}</p>
              <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                <a
                  href={selectedItem.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  GitHub
                </a>
                <a
                  href={selectedItem.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success"
                >
                  Live Demo
                </a>
              </div>
              <button className="btn btn-primary mt-4" onClick={closeModal}>
                <i className="fa-solid fa-xmark me-2"></i> Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
