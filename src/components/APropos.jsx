import Section from './Section';
import { profile, publicAsset } from '../data/portfolio';

export default function APropos() {
  return <Section id="a-propos" number="01" eyebrow="Fiche de personnage — À propos" title="Derrière le code, Alexis.">
    <div className="about-grid"><div className="about-text">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <div className="tags">{profile.interests.map(interest => <span key={interest}>{interest}</span>)}</div>
      {profile.cv && <a className="text-link" href={publicAsset(profile.cv)} download>Télécharger mon CV <span aria-hidden="true">↓</span></a>}
    </div><div className="stats">{profile.stats.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div>
  </Section>;
}
