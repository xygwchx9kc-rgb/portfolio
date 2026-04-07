function AboutMe() {
  return (
    <section className="card about" id="about-me">
      <header className="about__header">
        <h3 className="card__title about__title">About Me</h3>
        <span className="about__tag">My journey</span>
      </header>

      <p className="about__text">
        Hi, I’m <strong>Anel Dosan</strong> — a Computer Science student with a
        strong interest in Quality Assurance and software testing. I am
        motivated to start my career as a QA Engineer and develop a solid
        understanding of how to ensure high-quality software products.
      </p>

      <p className="about__text">
        I have hands-on experience with technologies such as Java, SQL, MySQL,
        and JavaScript, as well as a basic understanding of backend development
        with Spring Boot and working with REST APIs and databases. I also have
        experience from academic and personal projects, where I practiced
        problem-solving, attention to detail, and analytical thinking.
      </p>

      <p className="about__text">
        I am eager to grow in a professional environment, learn QA methodologies,
        improve my testing skills, and contribute to delivering reliable and
        high-quality products as a QA Engineer.
      </p>

      <ul className="about__timeline">
        <li className="about__item">
          <span className="about__dot" />
          <div className="about__content">
            <p className="about__headline">Foundation</p>
            <p className="about__desc">
              Learned core programming concepts and built strong analytical and
              problem-solving skills.
            </p>
          </div>
        </li>

        <li className="about__item">
          <span className="about__dot" />
          <div className="about__content">
            <p className="about__headline">Practice</p>
            <p className="about__desc">
              Worked with databases, APIs, and projects, gaining experience that
              helps me understand software behavior and potential issues.
            </p>
          </div>
        </li>

        <li className="about__item">
          <span className="about__dot" />
          <div className="about__content">
            <p className="about__headline">My goal</p>
            <p className="about__desc">
              I am preparing for a Junior QA Engineer role, with a focus on
              manual testing, attention to detail, and continuous learning in a
              team environment.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;