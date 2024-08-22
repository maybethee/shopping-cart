import { useOutletContext } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { products } = useOutletContext();

  const product1 = products[4];
  const product2 = products[0];
  const product3 = products[3];

  const productBackgroundImg1 = {
    backgroundImage: `url(${product1.image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  const productBackgroundImg2 = {
    backgroundImage: `url(${product2.image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  const productBackgroundImg3 = {
    backgroundImage: `url(${product3.image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };

  const truncateTitle = (title, max) => {
    if (title.length > max) {
      return title.substring(0, max) + " ";
    }
    return title;
  };

  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.leftCol}>
          <h1>The Technology Store!</h1>
          <h2>
            We sell technology here. Pay us for it, and we'll give it
            to&nbsp;you.
          </h2>
        </div>

        {/*  */}

        <div className={styles.rightCol}>
          <div className={styles.border}>
            <div
              style={productBackgroundImg1}
              className={`${styles.imgContainer} ${styles.product1}`}
            >
              <div className={styles.productDetails}>
                <div>
                  <h4 className={styles.productTitle}>
                    {truncateTitle(product1.title, 34)}
                  </h4>
                </div>
                <p className={styles.productPrice}>${product1.price}</p>
              </div>
            </div>
          </div>

          <div className={styles.border}>
            <div
              style={productBackgroundImg2}
              className={`${styles.imgContainer} ${styles.product2}`}
            >
              <div className={styles.productDetails}>
                <div>
                  <h4 className={styles.productTitle}>
                    {truncateTitle(product2.title, 44)}
                  </h4>
                </div>
                <p className={styles.productPrice}>${product2.price}</p>
              </div>
            </div>
          </div>

          <div className={styles.border}>
            <div
              style={productBackgroundImg3}
              className={`${styles.imgContainer} ${styles.product3}`}
            >
              <div className={styles.productDetails}>
                <div>
                  <h4 className={styles.productTitle}>
                    {truncateTitle(product3.title, 19)}
                  </h4>
                </div>
                <p className={styles.productPrice}>${product3.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
