import { useEffect, useRef } from 'react';
import { publicAsset } from '../data/portfolio';

export default function ImageViewer({ images, index, onChange, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  const image = images[index];
  const move = step => onChange((index + step + images.length) % images.length);
  return <dialog ref={dialogRef} className="image-viewer" aria-labelledby="capture-title"
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}
    onKeyDown={event => {
      if (images.length < 2) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    }}>
    <div className="viewer-content">
      <div className="viewer-header"><h2 id="capture-title">{image.alt}</h2><button autoFocus className="button viewer-close" type="button" onClick={onClose} aria-label="Fermer la capture">Fermer <span aria-hidden="true">×</span></button></div>
      <div className="viewer-image"><img src={publicAsset(image.image)} alt={image.alt} /></div>
      <div className="viewer-footer">
        {images.length > 1 ? <div className="viewer-navigation"><button type="button" className="button" onClick={() => move(-1)} aria-label="Capture précédente">←</button><span role="status" aria-live="polite">{index + 1} / {images.length}</span><button type="button" className="button" onClick={() => move(1)} aria-label="Capture suivante">→</button></div> : <span>Capture du projet</span>}
        <a className="text-link" href={publicAsset(image.image)} target="_blank" rel="noopener noreferrer">Ouvrir l’image originale ↗<span className="sr-only"> (nouvel onglet)</span></a>
      </div>
    </div>
  </dialog>;
}
