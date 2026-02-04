export default function Dashboard() {

  const styles = {
    page: {
      margin: 0,
      padding: 0,
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    },

    header: {
      backgroundColor: "#0d47a1",
      color: "white",
      padding: "18px",
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      letterSpacing: "1px"
    },

    main: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      width: "100%"
    },

    title: {
      color: "#0d47a1",
      marginBottom: "10px",
      fontSize: "30px"
    },

    text: {
      color: "#333",
      marginBottom: "30px",
      fontSize: "18px",
      maxWidth: "900px",
      textAlign: "center"
    },

    infoContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      width: "90%",
      maxWidth: "1200px"
    },

    infoBox: {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      textAlign: "center"
    },

    footer: {
      backgroundColor: "#0d47a1",
      color: "white",
      textAlign: "center",
      padding: "12px",
      fontSize: "14px"
    },

    heading: {
      color: "#1565c0",
      marginBottom: "8px",
      fontSize: "20px"
    },

    para: {
      fontSize: "15px",
      color: "#444"
    }
  };

  return (
    <div style={styles.page}>

      {/* Full Width Header */}
      <div style={styles.header}>
        React Full Screen Dashboard
      </div>

      {/* Main Full Screen Content */}
      <div style={styles.main}>

        <h2 style={styles.title}>Dashboard Component</h2>

        <p style={styles.text}>
          This dashboard now uses full screen layout optimized for Mac display.
          It automatically adjusts to any screen size with a modern responsive design.
        </p>

        <div style={styles.infoContainer}>

          <div style={styles.infoBox}>
            <h3 style={styles.heading}>Performance</h3>
            <p style={styles.para}>Fast and optimized lazy loading</p>
          </div>

          <div style={styles.infoBox}>
            <h3 style={styles.heading}>Scalability</h3>
            <p style={styles.para}>Easily extendable architecture</p>
          </div>

          <div style={styles.infoBox}>
            <h3 style={styles.heading}>Code Splitting</h3>
            <p style={styles.para}>Improves application efficiency</p>
          </div>

          <div style={styles.infoBox}>
            <h3 style={styles.heading}>State Ready</h3>
            <p style={styles.para}>Compatible with Redux & Context API</p>
          </div>

        </div>

      </div>

      {/* Footer Fixed at Bottom */}
      <div style={styles.footer}>
        © 2025 Mac Style Full Screen Dashboard
      </div>

    </div>
  );
}
