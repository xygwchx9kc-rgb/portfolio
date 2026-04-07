import SkillItem from "./SkillItem";

function SkillsList({ skills }) {
  return (
    <section className="card" id="skills">
      <h3 className="card__title">Skills</h3>

      <ul className="skills">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
    </section>
  );
}

export default SkillsList;
