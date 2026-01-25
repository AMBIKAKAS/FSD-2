export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        background: "linear-gradient(135deg, #f6f7f9, #ffffff)",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: "700",
          color: "#0f172a",
          marginBottom: "16px",
          letterSpacing: "-0.5px",
        }}
      >
        Welcome to My Portfolio
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#475569",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        Building modern web applications with clean design,
        scalable code, and great user experience.
      </p>
    </div>
  );
}
