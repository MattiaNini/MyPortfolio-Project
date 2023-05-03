import styles from "./index.module.scss";
import Navbar from "../navbar";
import content_coding from "../../assets/img/content_coding.png";
import content_me from "../../assets/img/content_me.png";
import content_stats from "../../assets/img/content_stats.png";
import content_eye from "../../assets/img/content_eye.png";
import logo_linkedin from "../../assets/img/logo_linkedin.jpg";
import logo_github from "../../assets/img/logo_github.png";
import FinalContent from "../finalContent/FinalContent";

const Content = () => {
  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.content_info}>
        <section className={styles.aboutme}>
          <img src={content_coding} className={styles.content_coding}></img>
          <form className={styles.myname}>
            <h5>My name is Mattia</h5>
            <h1>I'M A FRONT-END DEVELOPER</h1>
            <h4>
              I'm a Jr. Front-End Developer with commercial, criminalistic and
              security background.
            </h4>
          </form>
          <form className={styles.follow}>
            <h3 className={styles.followme}>FOLLOW ME ON</h3>
            <img src={logo_linkedin} className={styles.linkedin}></img>
            <img src={logo_github} className={styles.github}></img>
          </form>
        </section>
        <form className={styles.image_me}>
          <img src={content_me} className={styles.content_me}></img>
          <img src={content_eye} className={styles.content_eye}></img>
          <img src={content_stats} className={styles.content_stats}></img>
        </form>
      </div>
      <FinalContent />
    </div>
  );
};

export default Content;
