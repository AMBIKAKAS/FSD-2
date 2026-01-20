
import Button from "./Button";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 style={{ color: "#ffffffff" }}>Welcome to the Home Page</h1>
      <p style={{ color: "#447eddff" }}>
        This is the main landing page of the application.
      </p>

      <Button />
    </div>
  );
}
