import { useEffect, useState } from 'react';
import Header from './components/Header';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Parcours from './components/Parcours';
import Contact from './components/Contact';
import { profile } from './data/portfolio';

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  const [accent, setAccent] = useState(() => document.documentElement.dataset.accent || 'ember');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0e0e0d' : '#f0ece3');
    try { localStorage.setItem('portfolio-ashen-theme', theme); } catch { /* Stockage facultatif. */ }
  }, [theme]);
  useEffect(() => {
    document.documentElement.dataset.accent = accent;
    try { localStorage.setItem('portfolio-ashen-accent', accent); } catch { /* Stockage facultatif. */ }
  }, [accent]);
  useEffect(() => { document.title = profile.name + ' — Développeur full-stack | Le code & la braise'; }, []);
  return <>
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <Header theme={theme} accent={accent} onToggleAccent={() => setAccent(value => value === 'ember' ? 'gold' : 'ember')} onToggleTheme={() => setTheme(value => value === 'dark' ? 'light' : 'dark')} />
    <main id="contenu" tabIndex={-1} className="container"><Accueil /><APropos /><Competences /><Projets /><Parcours /><Contact /></main>
    <footer className="footer container"><a className="footer-mark" href="#accueil">AF <span aria-hidden="true">✧</span></a><p>© {new Date().getFullYear()} {profile.name} · Le code & la braise</p><a href="#accueil">Retour au commencement ↑</a></footer>
  </>;
}
