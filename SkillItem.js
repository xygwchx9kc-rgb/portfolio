function SkillItem({ skill }) {
  return (
    <li className="skill">
      <span className="skill__icon">✨</span>
      <span className="skill__text">{skill}</span>
    </li>
  );
}

export default SkillItem;
