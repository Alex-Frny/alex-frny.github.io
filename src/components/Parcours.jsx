import Section from './Section';
import { journey } from '../data/portfolio';

export default function Parcours() {
  return <Section id="parcours" number="04" eyebrow="Ma progression — Parcours" title="Chaque étape compte.">
    <ol className="timeline">{journey.map(item => <li key={item.id}><p className="timeline-period">{item.period}</p><div><h3>{item.title}</h3><p className="timeline-organization">{item.organization}</p><p>{item.description}</p></div></li>)}</ol>
  </Section>;
}
