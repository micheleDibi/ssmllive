import type { Program, Partner, SocialLink, NewsItem, SlideConfig } from '../types/content'

export const institution = {
  name: 'SSML Lamezia Terme',
  fullName: 'Scuola Superiore per Mediatori Linguistici',
  subtitle: 'Città di Lamezia Terme',
  motto: 'Non Scholae Sed Vitae Discimus',
  city: 'Lamezia Terme',
  address: 'Via Po 56/58, 88046 Lamezia Terme (CZ)',
  phone: '+39 0968 522114',
  email: 'info@ssmllameziaterme.it',
  website: 'www.ssmllameziaterme.it',
  portal: 'corsi.ssmllameziaterme.it',
  enrollmentSpots: 60,
  authorization: 'D.M. prot. n. 640 del 12/04/2022',
  orientationCenters: 50,
}

export const programs: Program[] = [
  {
    id: 'international',
    name: 'Organizzazioni Internazionali e Diplomatiche',
    shortName: 'Org. Internazionali',
    icon: 'globe',
    description: 'Formazione specialistica per operare nel contesto delle organizzazioni internazionali, ambasciate e istituzioni diplomatiche. Competenze in diritto internazionale, protocollo diplomatico e mediazione interculturale.',
    careers: ['Interprete diplomatico', 'Mediatore ONU/UE', 'Funzionario internazionale'],
  },
  {
    id: 'security',
    name: 'Sicurezza e Difesa Sociale',
    shortName: 'Sicurezza e Difesa',
    icon: 'shield',
    description: 'Percorso dedicato alla comunicazione linguistica nei settori della sicurezza, difesa e gestione delle emergenze. Competenze in linguaggio settoriale militare e delle forze dell\'ordine.',
    careers: ['Mediatore per la sicurezza', 'Interprete difesa', 'Analista linguistico'],
  },
  {
    id: 'business',
    name: 'Business ed Internazionalizzazione',
    shortName: 'Business',
    icon: 'briefcase',
    description: 'Formazione orientata al mondo aziendale e al commercio internazionale. Economia aziendale, marketing internazionale, comunicazione d\'impresa e strategie di internazionalizzazione.',
    careers: ['Export manager', 'Mediatore commerciale', 'Consulente internazionalizzazione'],
  },
  {
    id: 'marketing',
    name: 'Pubblicità, Marketing e Relazioni Internazionali',
    shortName: 'Marketing & PR',
    icon: 'megaphone',
    description: 'Comunicazione pubblicitaria, branding internazionale e relazioni pubbliche. Competenze nella creazione di campagne multilingue e gestione dell\'immagine aziendale sui mercati esteri.',
    careers: ['Communication manager', 'PR internazionale', 'Brand specialist'],
  },
  {
    id: 'tourism',
    name: 'Management Turistico e Commercio Internazionale',
    shortName: 'Turismo',
    icon: 'compass',
    description: 'Gestione del turismo culturale e del patrimonio, commercio internazionale nel settore ospitalità. Competenze in destination management e promozione turistica multilingue.',
    careers: ['Destination manager', 'Tour operator internazionale', 'Hospitality manager'],
  },
]

export const partners: Partner[] = [
  { name: 'MUR', description: 'Ministero dell\'Università e della Ricerca' },
  { name: 'Erasmus+', description: 'Programma ECHE 2021-2027' },
  { name: 'Fondazione per la Sussidiarietà', description: 'Ricerca e formazione' },
  { name: 'ERSAF', description: 'Ente di Ricerca Scientifica ed Alta Formazione' },
  { name: 'ENBAS', description: 'Ente Nazionale Bilaterale' },
  { name: 'ESAARCO', description: 'Associazione Artigiani e Commercianti' },
]

export const socialLinks: SocialLink[] = [
  { platform: 'Facebook', url: 'https://facebook.com/ssmllameziaterme', handle: '@ssmllameziaterme' },
  { platform: 'Instagram', url: 'https://instagram.com/ssmllameziaterme', handle: '@ssmllameziaterme' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/school/ssmllameziaterme', handle: 'SSML Lamezia Terme' },
  { platform: 'YouTube', url: 'https://youtube.com/@ssmllameziaterme', handle: '@ssmllameziaterme' },
]

export const news: NewsItem[] = [
  {
    title: 'Iscrizioni A.A. 2025/2026 Aperte',
    date: '2025-09-01',
    excerpt: 'Sono aperte le iscrizioni per il nuovo anno accademico. 60 posti disponibili per i cinque indirizzi di laurea.',
  },
  {
    title: 'Programma Erasmus+ 2021-2027',
    date: '2025-03-15',
    excerpt: 'Nuove opportunità di mobilità internazionale per studenti e docenti nell\'ambito del programma Erasmus+.',
  },
  {
    title: 'Progetto LifeComp e FindYourGoal',
    date: '2025-02-10',
    excerpt: 'Ricerca sulle competenze caratteriali e non cognitive per il successo professionale in Calabria.',
  },
]

export const slides: SlideConfig[] = [
  { id: 'welcome', duration: 15000 },
  { id: 'mission', duration: 12000 },
  { id: 'programs-overview', duration: 15000 },
  { id: 'campus', duration: 12000 },
  { id: 'exams', duration: 12000 },
  { id: 'orientation', duration: 12000 },
  { id: 'partnerships', duration: 10000 },
  { id: 'research', duration: 10000 },
  { id: 'events', duration: 12000 },
  { id: 'contact', duration: 15000 },
]
