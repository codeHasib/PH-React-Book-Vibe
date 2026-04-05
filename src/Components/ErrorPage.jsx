import { useRouteError, useNavigate, Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error(error); // Log it for debugging

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>{error.status || "404"}</h1>
      <h2 style={styles.message}>{error.statusText || "Page Not Found"}</h2>
      <p style={styles.description}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <div style={styles.buttonGroup}>
        <button onClick={() => navigate(-1)} style={styles.backButton}>
          Go Back
        </button>

        <Link to="/" style={styles.homeLink}>
          Return Home
        </Link>
      </div>
    </div>
  );
};

// Simple inline styles for a clean look
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
  errorCode: {
    fontSize: "8rem",
    margin: 0,
    color: "#ff4757",
  },
  message: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    color: "#666",
    marginBottom: "2rem",
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
  },
  backButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#747d8c",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  homeLink: {
    padding: "10px 20px",
    fontSize: "1rem",
    textDecoration: "none",
    backgroundColor: "#2f3542",
    color: "white",
    borderRadius: "5px",
  },
};

export default ErrorPage;
