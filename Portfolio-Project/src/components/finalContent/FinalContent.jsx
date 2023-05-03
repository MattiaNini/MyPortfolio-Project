import styles from "./index.module.scss";
import logo_html from "../../assets/img/logo_html.png";
import logo_js from "../../assets/img/logo_js.png";
import logo_react from "../../assets/img/logo_react.png";
import logo_cssass from "../../assets/img/logo_cssass.png";

const FinalContent = () => {
  return (
    <div className={styles.myskills}>
      <form className={styles.skillsintro}>
        <h5>Passion led us there</h5>
        <h2 className={styles.whatido}>WHAT I DO</h2>
      </form>
      <div className={styles.cards}>
        <form className={styles.firstskill}>
          <img src={logo_html} className={styles.logo_html}></img>
          <h3 className={styles.title}> Html 5</h3>
          <p className={styles.description}>
            (Hypertext Markup Language revision 5) is markup language for the
            structure and presentation of World Wide Web contents. HTML5
            supports the traditional HTML and XHTML-style syntax and other new
            features in its markup, New APIs, XHTML and error handling.
          </p>
        </form>
        <form className={styles.secondskill}>
          <img src={logo_js} className={styles.logo_js}></img>
          <h3 className={styles.title}>JavaScript</h3>
          <p className={styles.description}>
            JavaScript is a dynamic computer programming language. It is
            lightweight and most commonly used as a part of web pages, whose
            implementations allow client-side script to interact with the user
            and make dynamic pages. It is an interpreted programming language
            with object-oriented capabilities.
          </p>
        </form>
        <form className={styles.thirdskill}>
          <img src={logo_react} className={styles.logo_react}></img>
          <h3 className={styles.title}>React</h3>
          <p className={styles.description}>
            React.js is an open-source JavaScript framework and library. It’s
            used for building interactive user interfaces and web applications
            quickly and efficiently with significantly less code than you would
            with vanilla JavaScript. In React, you develop your applications by
            creating reusable components that you can think of as independent
            Lego blocks. These components are individual pieces of a final
            interface, which, when assembled, form the applications entire user
            interface.
          </p>
        </form>
        <form className={styles.fourthskill}>
          <img src={logo_cssass} className={styles.logo_cssass}></img>
          <h3 className={styles.title}>Css/Sass</h3>
          <p className={styles.description}>
            CSS is the language for describing the presentation of Web pages,
            including colors, layout, and fonts. It allows one to adapt the
            presentation to different types of devices, such as large screens,
            small screens, or printers.
          </p>
          <p className={styles.description}>
            SASS (Syntactically Awesome Stylesheet) is a CSS pre-processor,
            which helps to reduce repetition with CSS and saves time. It is more
            stable and powerful CSS extension language that describes the style
            of a document cleanly and structurally.
          </p>
        </form>
      </div>
    </div>
  );
};

export default FinalContent;
