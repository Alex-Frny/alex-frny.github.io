import { useEffect, useRef, useState } from 'react';
import { navigation, profile } from '../data/portfolio';

export default function Header({ theme, accent, onToggleTheme, onToggleAccent }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    function onKey(event) { if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); } }
    function onResize() { if (window.innerWidth > 1200) setOpen(false); }
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);
  return <header className="header">
    <div className="header-inner">
      <a className="brand" href="#accueil" aria-label={profile.name + ', accueil'} onClick={() => setOpen(false)}><span className="brand-sigil" aria-hidden="true">✧</span><span>{profile.initials}<small>Le code & la braise</small></span></a>
      <nav id="navigation" aria-label="Navigation principale" className={open ? 'nav open' : 'nav'}>
        {navigation.map((item, index) => <a href={'#' + item.id} key={item.id} onClick={() => setOpen(false)}><span className="nav-index" aria-hidden="true">{String(index).padStart(2, '0')}</span>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <button className="accent-button" type="button" onClick={onToggleAccent} aria-label={'Activer l’accent ' + (accent === 'ember' ? 'or' : 'rouge braise')} title="Changer la couleur d’accent"><span aria-hidden="true">◆</span>{accent === 'ember' ? 'Braise' : 'Or'}</button>
        <button className="theme-button" type="button" onClick={onToggleTheme} aria-label={'Activer le thème ' + (theme === 'dark' ? 'clair' : 'sombre')} title={theme === 'dark' ? 'Parchemin : thème clair' : 'Cendres : thème sombre'}><span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span></button>
        <button ref={menuButton} className="menu-button" type="button" aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Fermer' : 'Menu'}</button>
      </div>
    </div>
  </header>;
}
