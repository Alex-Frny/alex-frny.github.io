import Section from './Section';
import { skills } from '../data/portfolio';

export default function Competences() {
  return <Section id="competences" number="02" eyebrow="Inventaire — Compétences" title="Les outils de ma quête.">
    <div className="skills-grid">{skills.map((skill, index) => <article className="skill-card" key={skill.title}>
      <span className="card-index" aria-hidden="true">0{index + 1} /</span><h3>{skill.title}</h3><p>{skill.description}</p>
      <ul className="tags">{skill.items.map(item => <li key={item}>{item}</li>)}</ul>
    </article>)}</div>
  </Section>;
}
