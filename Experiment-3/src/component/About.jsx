export default function About() {
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
          fontSize: "3rem",
          fontWeight: "700",
          color: "#0f172a",
          marginBottom: "16px",
        }}
      >
        About Me
      </h1>

      <p
        style={{
          fontSize: "1.15rem",
          color: "#475569",
          maxWidth: "600px",
          lineHeight: "1.7",
        }}
      >
        I am a passionate developer who loves building clean, scalable,
        and user-friendly web applications with a strong focus on
        performance, design, and maintainability.
      </p>
    </div>
  );
}
