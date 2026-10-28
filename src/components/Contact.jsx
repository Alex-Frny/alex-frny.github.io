import { useState } from 'react';
import Section from './Section';
import { profile } from '../data/portfolio';

export default function Contact() {
  const [status, setStatus] = useState('');
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setStatus('Adresse e-mail copiée.'); }
    catch { setStatus(`Copie indisponible. Adresse : ${profile.email}`); }
  }
  return <Section id="contact" number="05" eyebrow="Prochaine quête — Contact" title="Construisons la suite." className="contact-section">
    <p>Un projet en tête, une opportunité ou simplement envie d’échanger ? Je serai ravi de vous lire.</p>
    <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true"> ↗</span></a>
    <div className="actions"><a className="button primary" href={`mailto:${profile.email}?subject=${encodeURIComponent('Contact depuis votre portfolio')}`}>Écrire un e-mail <span aria-hidden="true">↗</span></a><button className="button" type="button" onClick={copyEmail}>Copier l’adresse</button></div>
    <p className="contact-status" role="status">{status}</p>
    <div className="social-links">{profile.socials.filter(social => social.url).map(social => <a key={social.label} className="text-link" href={social.url} target="_blank" rel="noopener noreferrer">{social.label} ↗<span className="sr-only"> (nouvel onglet)</span></a>)}</div>
    <p className="contact-note">Le bouton e-mail ouvre votre application de messagerie.</p>
  </Section>;
}
