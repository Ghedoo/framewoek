export default function TitleDivider({ color = "dark" }) {
  const lineColor = color === "light" ? "#fff" : "#2C3E50";
  const starColor = color === "light" ? "#fff" : "#2C3E50";

  return (
    <div className="d-flex align-items-center justify-content-center my-3">
      <div style={{
        width: "100px",
        height: "4px",
        backgroundColor: lineColor,
        borderRadius: "2px"
      }}></div>
      <i
        className="fa-solid fa-star mx-3"
        style={{ color: starColor, fontSize: "1.5rem" }}
      ></i>
      <div style={{
        width: "100px",
        height: "4px",
        backgroundColor: lineColor,
        borderRadius: "2px"
      }}></div>
    </div>
  );
}
