import { profile, publicAsset } from '../data/portfolio';
import EmberScene from './EmberScene';

export default function Accueil() {
  return <section className="hero" id="accueil" aria-labelledby="hero-title">
    <div className="hero-content">
      <p className="hero-kicker"><span aria-hidden="true">✧</span> Le code & la braise <span className="edition">Portfolio / 2026</span></p>
      <p className="availability"><span aria-hidden="true" />{profile.availability}</p>
      <h1 id="hero-title">{profile.name}<span className="hero-title-rule" aria-hidden="true" /></h1>
      <p className="hero-role">{profile.role}</p>
      <p className="hero-motto">{profile.headline}</p>
      <p className="hero-intro">{profile.intro}</p>
      <div className="actions"><a className="button primary" href="#projets"><span aria-hidden="true">◇</span> Découvrir mes projets <span aria-hidden="true">→</span></a>{profile.cv && <a className="button" href={publicAsset(profile.cv)} download>Télécharger mon CV <span aria-hidden="true">↓</span></a>}<a className="hero-contact-link text-link" href="#contact">Me contacter <span aria-hidden="true">↗</span></a></div>
      <p className="hero-location"><span aria-hidden="true">⌖</span> {profile.location}<span className="location-separator" aria-hidden="true"> / </span> Go · HTML · CSS · PHP</p>
    </div>
    <div className="hero-visual">
      {profile.portrait ? <img className="portrait" src={publicAsset(profile.portrait)} alt={'Portrait de ' + profile.name} width="500" height="550" /> : <EmberScene />}
      <div className="scene-note"><span className="scene-note-number">I</span><span>La persévérance<br /><strong>comme point de départ.</strong></span></div>
    </div>
    <div className="hero-bottom"><span>Curiosité · Rigueur · Persévérance</span><a href="#a-propos">Commencer l’exploration <span aria-hidden="true">↓</span></a><span className="hero-coordinates">AF / JOURNAL DE DÉVELOPPEMENT</span></div>
  </section>;
}
