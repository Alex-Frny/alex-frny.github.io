import { useState } from 'react';
import Section from './Section';
import ImageViewer from './ImageViewer';
import { projects, publicAsset } from '../data/portfolio';

function ExternalLink({ url, children }) {
  return url ? <a className="text-link" href={url} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> ↗</span><span className="sr-only"> (nouvel onglet)</span></a> : null;
}

export default function Projets() {
  const [viewer, setViewer] = useState(null);
  function openImages(project, index = 0) {
    setViewer({ images: [{ image: project.image, alt: 'Aperçu de ' + project.title }, ...(project.gallery || [])], index });
  }
  return <Section id="projets" number="03" eyebrow="Journal de quêtes — Projets" title="Les projets à l’épreuve.">
    <p className="section-intro">Applications web, API et algorithmique : découvrez les projets, les technologies utilisées et ma contribution.</p>
    <div className="projects-grid">{projects.map(project => <article className={'project-card ' + (project.featured ? 'featured' : '')} key={project.id}>
      <div className={'project-visual ' + (project.theme || 'mint') + (project.image ? ' has-image' : '')}>
        {project.image ? <button className="project-preview" type="button" onClick={() => openImages(project)} aria-label={'Agrandir la capture de ' + project.title}>
          <img src={publicAsset(project.image)} alt={'Aperçu de ' + project.title} loading="lazy" width="800" height="500" /><span className="preview-hint" aria-hidden="true">Agrandir la capture ↗</span>
        </button> : <div className="project-placeholder" aria-hidden="true"><div className="mock-window"><div className="mock-toolbar"><i /><i /><i /></div><div className="mock-content"><span className="mock-label">{project.category}</span><strong>{project.title}</strong><div className="mock-line" /><div className="mock-line short" /><div className="mock-tiles"><i /><i /><i /></div></div></div></div>}
        {project.year && <span className="project-year">{project.year}</span>}
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.category}</p>
        {project.featured && <p className="project-featured-label">Projet à découvrir</p>}
        <h3>{project.title}</h3>
        {project.status && <p className="project-status">{project.status}</p>}
        <p>{project.description}</p>
        {project.details && <p className="project-team">{project.details}</p>}
        <ul className="tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        {(project.contribution || project.challenge || project.solution) && <dl className="project-case">
          {project.contribution && <div><dt>Ma contribution</dt><dd>{project.contribution}</dd></div>}
          {project.challenge && <div><dt>Le défi</dt><dd>{project.challenge}</dd></div>}
          {project.solution && <div><dt>Ma solution</dt><dd>{project.solution}</dd></div>}
        </dl>}
        {project.gallery?.length > 0 && <details className="project-gallery"><summary>Autres captures du projet</summary><div className="gallery-grid">{project.gallery.map((shot, index) => <button key={shot.image} type="button" onClick={() => openImages(project, index + 1)} aria-label={'Agrandir : ' + shot.alt}><img src={publicAsset(shot.image)} alt={shot.alt} loading="lazy" /><span>Voir en grand ↗</span></button>)}</div></details>}
        {(project.demo || project.code) && <div className="project-links"><ExternalLink url={project.demo}>Voir le site</ExternalLink><ExternalLink url={project.code}>Code source</ExternalLink></div>}
      </div>
    </article>)}</div>
    {viewer && <ImageViewer images={viewer.images} index={viewer.index} onClose={() => setViewer(null)} onChange={index => setViewer(previous => ({ ...previous, index }))} />}
  </Section>;
}
