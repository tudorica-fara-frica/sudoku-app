import Title from "./title";

export default function Contact() {
  function linkedIn() {
    window.open(
      "https://www.linkedin.com/in/tudor-gabriel-rîmbu-81a93230b",
      "_blank"
    );
  }

  function GitHub() {
    window.open("https://github.com/tudorica-fara-frica", "-blank");
  }

  function Instagram() {
    window.open("https://www.instagram.com/tudorrimbu_/", "_blank");
  }

  function email() {
    window.open("mailto:rtudorg2003@gmail.com", "_blank");
  }

  return (
    <div className="contact">
      <Title />
      <div className="contactButtons">
        <button className="side-menu-button" onClick={linkedIn}>
          LinkedIn
        </button>

        <button className="side-menu-button" onClick={GitHub}>
          GitHub
        </button>
        <button className="side-menu-button" onClick={Instagram}>
          Instagram
        </button>
        <button className="side-menu-button" onClick={email}>
          E-mail
        </button>
      </div>
    </div>
  );
}
