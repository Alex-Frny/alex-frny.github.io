export default function Section({ id, number, eyebrow, title, children, className = '' }) {
  const chapters = ['I', 'II', 'III', 'IV', 'V'];
  return <section id={id} className={'section ' + className} aria-labelledby={id + '-title'}>
    <div className="section-heading"><div className="chapter-seal" aria-hidden="true">{chapters[Number(number) - 1] || number}</div><div><p className="eyebrow"><span>Chapitre {number}</span> / {eyebrow}</p><h2 id={id + '-title'}>{title}</h2></div><span className="section-ornament" aria-hidden="true">◇</span></div>
    {children}
  </section>;
}
