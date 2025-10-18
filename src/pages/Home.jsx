export default function Home() {
  return (
    <header   className="home-section d-flex flex-column justify-content-center align-items-center"
  style={{ 
    backgroundColor: "#1abc9c", 
    minHeight: "100vh",
    paddingTop: "120px" 
  }}
>
      {/* الصورة */}
      <img
        src="/avatar.svg"
        alt="Avatar"
        className="mb-4 rounded-circle"
        style={{ width: "250px" }}
      />

      {/* العنوان */}
      <h1 className="text-uppercase fw-bold mb-3">Start Framework</h1>

      {/* Divider (النجمة) */}
      <div className="d-flex justify-content-center align-items-center mb-3">
        <div className="bg-white" style={{ width: "100px", height: "4px", borderRadius: "2px" }}></div>
        <i className="fa-solid fa-star mx-3 text-white"></i>
        <div className="bg-white" style={{ width: "100px", height: "4px", borderRadius: "2px" }}></div>
      </div>

      {/* النص الفرعي */}
      <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
    </header>
  );
}
