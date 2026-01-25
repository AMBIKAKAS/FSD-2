export default function Contact() {
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
        background: "linear-gradient(135deg, #ffffff, #f6f7f9)",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#0f172a",
          marginBottom: "12px",
        }}
      >
        Contact
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#475569",
          maxWidth: "500px",
          marginBottom: "28px",
          lineHeight: "1.6",
        }}
      >
        Feel free to reach out for collaborations, projects,
        or just a friendly hello 👋
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          fontSize: "1rem",
        }}
      >
        <span
          style={{
            background: "#ffffff",
            padding: "12px 18px",
            borderRadius: "10px",
            border: "1px solid #e2e8f0",
            color: "#334155",
            boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
          }}
        >
          Email: ambikakashyap736@gmail.com
        </span>

        <span
          style={{
            background: "#ffffff",
            padding: "12px 18px",
            borderRadius: "10px",
            border: "1px solid #e2e8f0",
            color: "#334155",
            boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
          }}
        >
          LinkedIn: linkedin.com/in/ambika70026
        </span>
      </div>
    </div>
  );
}
