
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import SkillsList from "./components/SkillsList";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  

  const skills = [
    "JavaScript",
    "React",
    "JSX",
    "HTML & CSS",
    "JAVA",
    "Basic UI/UX",
    "Problem Solving"
  ];

  return (
    <div className="page">
      <Header />
  
      <main className="main">
         
  <section className="container">
    <ProfileCard
      name="Anel Dosan"
      profession="Front-end Developer • Student"
      description="I am a motivated computer science student with a strong passion for programming and front-end development. I study consistently, invest a lot of time in practice, and work hard to build a solid foundation in React and modern web technologies in order to start my professional career in IT."
    />
  </section>

  <section className="container">
    <AboutMe />
  </section>

  <section className="container">
    <Education />
  </section>

  <section className="container">
    <Courses />
  </section>

  <section className="container">
    <Experience />
  </section>

  <section className="container">
    <SkillsList skills={skills} />
  </section>

  <section className="container">
    <Projects />
  </section>

  <section className="container">
    <Contact />
  </section>
</main>

      <Footer />
    </div>
  );
}

export default App;
