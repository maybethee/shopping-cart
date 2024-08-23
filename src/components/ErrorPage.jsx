import { Link } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorMessage}>Whoops, you shouldn't be here!</h1>
      <Link to="/" className={`reactLink ${styles.errorLink}`}>
        Go back to the home page by clicking here
      </Link>
    </div>
  );
};

export default ErrorPage;
