// Contenu personnalisé pour Alexis Fourny. null masque les éléments facultatifs.
export const profile = {
  name: 'Alexis Fourny',
  initials: 'AF',
  role: 'Développeur full-stack en formation à Zone 01',
  location: 'Rouen, France',
  availability: 'À la recherche d’une alternance en développement full-stack',
  headline: 'Apprendre. Construire.\nNe jamais abandonner.',
  intro: 'Je suis Alexis Fourny, en formation de développeur full-stack. Je recherche une alternance pour mettre en pratique mes compétences en Go, HTML, CSS et PHP, et continuer à apprendre au sein d’une équipe.',
  email: 'fourny29@gmail.com',
  // CV téléchargeable depuis l’accueil et la section À propos.
  cv: 'cv.pdf',
  // Ajoutez public/portrait.webp, puis remplacez null par 'portrait.webp'.
  portrait: null,
  about: [
    'En formation de développeur full-stack à Zone 01 de 2026 à 2029, je développe mes compétences côté interface et côté serveur. Je pratique Go, HTML, CSS et PHP, et j’utilise Git pour gérer mon code.',
    'Je souhaite poursuivre mon apprentissage en alternance, participer à des projets concrets et progresser au contact d’une équipe de développement.',
  ],
  interests: [],
  stats: [{ value: 'Web', label: 'HTML & CSS' }, { value: 'Go', label: 'Go & PHP' }, { value: 'Git', label: 'gestion de versions' }],
  socials: [
    { label: 'GitHub', url: 'https://github.com/Alex-Frny' },
    { label: 'LinkedIn', url: null },
  ],
};

export const skills = [
  { title: 'Interfaces web', description: 'Structurer et mettre en forme les pages.', items: ['HTML', 'CSS'] },
  { title: 'Développement', description: 'Écrire la logique des applications et manipuler les données.', items: ['Go', 'PHP', 'SQLite', 'API REST', 'JSON', 'Algorithmique', 'Backtracking'] },
  { title: 'Outils', description: 'Suivre le code et conteneuriser les applications.', items: ['Git', 'Docker'] },
];

// Captures et liens de démonstration ou code source à ajouter si disponibles.
export const projects = [
  { id: 'groupie-tracker', title: 'Groupie Tracker', category: 'API & données', year: null, featured: true, theme: 'mint', image: 'images/groupie-tracker-accueil.png', gallery: [{ image: 'images/groupie-tracker-artistes.png', alt: 'Liste des artistes dans Groupie Tracker' }, { image: 'images/groupie-tracker-queen.png', alt: 'Fiche de Queen avec les informations du groupe' }],
    description: 'Application de consultation de données sur des artistes et leurs concerts.',
    contribution: 'Intégration HTML/CSS et ajout progressif de fonctionnalités côté back-end.',
    challenge: 'Comprendre le fonctionnement d’une API et la structure des données JSON pour les intégrer efficacement à l’application.', solution: null,
    details: 'Projet réalisé en équipe avec Pierre Basley et Léo Giffard.', tags: ['Go', 'API REST', 'JSON', 'HTML/CSS'], demo: null, code: 'https://github.com/Alex-Frny/groupie-tracker' },
  { id: 'ascii-art-web', title: 'ASCII Art Web Dockerize', category: 'Application web & Docker', year: null, featured: false, theme: 'mint', image: 'images/ascii-art-web.png',
    description: 'Application web de génération d’ASCII Art conteneurisée.',
    details: 'Projet réalisé seul.',
    contribution: 'Réalisation de l’application web de génération d’ASCII Art et de sa conteneurisation avec Docker.',
    tags: ['Go', 'Docker', 'HTML/CSS', 'Git'], demo: null, code: 'https://github.com/Alex-Frny/ascii-art-web-dockerize' },
  { id: 'tetris-optimizer', title: 'Tetris Optimizer', category: 'Algorithmique', year: null, featured: false, theme: 'mint', image: 'images/tetris-optimizer.png',
    description: 'Algorithme d’assemblage de tétriminos dans le plus petit carré possible.',
    details: 'Projet réalisé seul.',
    contribution: 'Réalisation du programme d’assemblage des tétriminos en Go, avec un algorithme de backtracking.',
    tags: ['Go', 'Algorithmique', 'Backtracking'], demo: null, code: 'https://github.com/Alex-Frny/tetris-optimizer' },
  { id: 'forum-web', title: 'Forum Web', category: 'Application web', year: null, featured: false, theme: 'mint', image: null,
    description: 'Forum avec publications, catégories et commentaires.',
    status: 'En cours de développement',
    details: 'Projet réalisé en équipe.',
    challenge: 'Comprendre le fonctionnement de SQLite pour intégrer efficacement la base de données au forum.',
    tags: ['Go', 'SQLite', 'HTML/CSS', 'Git'], demo: null, code: null },
];

export const journey = [
  { id: 'training', period: '2026 — 2029', title: 'Formation développeur full-stack', organization: 'Zone 01', description: 'Formation en cours : développement web, programmation en Go, algorithmique et réalisation de projets.' },
];

export const navigation = [
  { id: 'accueil', label: 'Accueil' }, { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' }, { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' }, { id: 'contact', label: 'Contact' },
];

export function publicAsset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}




