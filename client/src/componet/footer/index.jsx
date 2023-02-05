import styles from "../../styles/LandingPage.module.css";
export default function Footer() {
  return (
    <div className={styles.aboutMe}>
      <span className={styles.spanAm}>Developed By</span>
      <span className={styles.spanAm}>Carolina Magali Barragan</span>
      <div className={styles.iconsContainer}>
        <a
          href="https://www.linkedin.com/in/caro-barragan/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/subNav-linkedin.png"
            alt="LinkedIn Link"
            className={styles.logo}
          />
        </a>
        <a
          href="https://github.com/carobarragan"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/subNav-gitHub.png"
            alt="GitHub Link"
            className={styles.logo}
          />
        </a>
      </div>
    </div>
  );
}
