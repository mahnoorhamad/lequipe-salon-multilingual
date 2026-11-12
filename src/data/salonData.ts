import { ServiceItem, ReviewItem, OpeningHour, Language } from '../types';

export const salonImages = {
  hero: '/src/assets/images/hero_salon_styling_1794384332265.jpg',
  interior: '/src/assets/images/salon_interior_ambience_1794384333727.jpg',
  balayage: '/src/assets/images/salon_coloring_balayage_1794384333288.jpg',
  mens: '/src/assets/images/salon_mens_grooming_1794384334205.jpg',
};

export const salonServices: ServiceItem[] = [
  // Cut & Styling
  {
    id: 'cut-women',
    category: 'cut',
    target: 'women',
    popular: true,
    priceRange: '€38 - €48',
    duration: {
      it: '45-60 min',
      en: '45-60 mins',
      de: '45-60 Min.',
      fr: '45-60 min',
    },
    name: {
      it: 'Taglio Donna Stilistico & Piega',
      en: "Women's Signature Cut & Blow-dry",
      de: 'Damenhaarschnitt & Föhnstyling',
      fr: 'Coupe Femme Stylisée & Brushing',
    },
    description: {
      it: 'Studio morfologico del viso, shampoo specifico con massaggio cutaneo distensivo, taglio personalizzato e piega a phon con prodotti termo-protettivi.',
      en: 'Facial shape consultation, tailored scalp cleanse with relaxing massage, bespoke precision haircut, and blowout with thermo-protective finish.',
      de: 'Typberatung nach Gesichtsform, verwöhnende Haarwäsche mit Kopfmassage, typgerechter Schnitt und Föhnstyling mit Hitzeschutz.',
      fr: 'Diagnostic morphologique, shampoing traitant avec massage crânien relaxant, coupe personnalisée et brushing protecteur thermique.',
    },
  },
  {
    id: 'styling-blowdry',
    category: 'cut',
    target: 'women',
    priceRange: '€20 - €26',
    duration: {
      it: '35 min',
      en: '35 mins',
      de: '35 Min.',
      fr: '35 min',
    },
    name: {
      it: 'Piega Moda & Trattamento Lucidante',
      en: 'Blow-dry Styling & Gloss Treatment',
      de: 'Föhnstyling & Glanzbehandlung',
      fr: 'Brushing Stylé & Soin Éclat',
    },
    description: {
      it: 'Dall’effetto liscio specchio alle onde naturali morbide (beach waves), con fissaggio a lunga tenuta non appiccicoso.',
      en: 'From glossy mirror-smooth to soft bouncy waves, finished with long-lasting non-sticky lightweight texture.',
      de: 'Vom spiegelglatten Finish bis zu weichen Wellen, mit flexiblem Halt ohne zu beschweren.',
      fr: 'Du lissage soyeux aux ondulations wavy naturelles, tenue longue durée sans alourdir la fibre.',
    },
  },
  {
    id: 'cut-men',
    category: 'cut',
    target: 'men',
    popular: true,
    priceRange: '€22 - €28',
    duration: {
      it: '30-40 min',
      en: '30-40 mins',
      de: '30-40 Min.',
      fr: '30-40 min',
    },
    name: {
      it: 'Taglio Uomo Sartoriale & Rifinitura Barba',
      en: "Men's Tailored Cut & Beard Detail",
      de: 'Herren-Präzisionshaarschnitt & Bartpflege',
      fr: 'Coupe Homme Précision & Barbe',
    },
    description: {
      it: 'Taglio a forbice o macchinetta con sfumature contemporanee (fade), rifinitura basette e contorni barba, shampoo rinfrescante alla menta.',
      en: 'Scissor or clipper technique with clean modern taper fade, beard contours refinement, and revitalizing mint hair wash.',
      de: 'Scheren- oder Maschinenhaarschnitt mit modernem Verlauf (Fade), Konturenrasur und erfrischendem Minz-Shampoo.',
      fr: 'Coupe aux ciseaux ou tondeuse avec dégradé progressif soigné, traçage des contours et shampoing rafraîchissant.',
    },
  },
  {
    id: 'cut-junior',
    category: 'cut',
    target: 'kids',
    priceRange: '€16 - €20',
    duration: {
      it: '25 min',
      en: '25 mins',
      de: '25 Min.',
      fr: '25 min',
    },
    name: {
      it: 'Taglio Bimbo & Ragazzo (Under 14)',
      en: 'Junior & Teen Cut (Under 14)',
      de: 'Kinder- & Jugendschnitt (bis 14 J.)',
      fr: 'Coupe Enfant & Ado (Moins de 14 ans)',
    },
    description: {
      it: 'Massima pazienza, allegria e cura per i più giovani in un ambiente rilassato e accogliente.',
      en: 'Gentle, patient, and trendy cuts in a fun, reassuring salon atmosphere.',
      de: 'Geduldige und kindgerechte Schnitte in einer entspannten Wohlfühlatmosphäre.',
      fr: 'Patience, bienveillance et styles modernes pour les plus jeunes dans un cadre détendu.',
    },
  },

  // Color & Balayage
  {
    id: 'balayage-sunlight',
    category: 'color',
    target: 'women',
    popular: true,
    priceRange: '€65 - €95',
    duration: {
      it: '90-120 min',
      en: '90-120 mins',
      de: '90-120 Min.',
      fr: '90-120 min',
    },
    name: {
      it: 'Balayage & Effetto Luce Naturale',
      en: 'Artisan Balayage & Sunlight Glow',
      de: 'Kreatives Balayage & Sunlight-Effekt',
      fr: 'Balayage Lumière Naturelle & Éclat',
    },
    description: {
      it: 'Schiariture a mano libera con sfumatura progressiva e armoniosa. Risultato luminoso senza stacchi netti alla ricrescita.',
      en: 'Freehand painting for seamless, luminous color graduation. Natural dimensional glow with graceful regrowth.',
      de: 'Freihand-Farbverlauf für natürliche Lichtreflexe ohne sichtbare Ansätze beim Nachwachsen.',
      fr: 'Éclaircissement à main levée pour un fondu subtil et lumineux sans démarcation nette à la repousse.',
    },
  },
  {
    id: 'color-ammonia-free',
    category: 'color',
    target: 'women',
    priceRange: '€36 - €46',
    duration: {
      it: '45-60 min',
      en: '45-60 mins',
      de: '45-60 Min.',
      fr: '45-60 min',
    },
    name: {
      it: 'Colore Nutriente Senza Ammoniaca',
      en: 'Nourishing Ammonia-Free Color',
      de: 'Ammoniakfreie Nährstoff-Farbe',
      fr: 'Coloration Nourrissante Sans Ammoniaque',
    },
    description: {
      it: 'Copertura al 100% dei capelli bianchi con oli naturali e cheratina vegetale. Rispetta la cute e dona riflessi ricchi e intensi.',
      en: '100% white hair coverage powered by plant oils and botanical keratin. Gentle on sensitive scalps with mirror-like shine.',
      de: '100% Grauabdeckung mit pflanzlichen Ölen und veganem Keratin. Sanft zur Kopfhaut mit lebendiger Farbtiefe.',
      fr: 'Couverture totale des cheveux blancs aux huiles botaniques et kératine végétale. Confort absolu pour le cuir chevelu.',
    },
  },
  {
    id: 'gloss-toner',
    category: 'color',
    target: 'all',
    priceRange: '€25 - €35',
    duration: {
      it: '25 min',
      en: '25 mins',
      de: '25 Min.',
      fr: '25 min',
    },
    name: {
      it: 'Bagno di Colore & Gloss Lucido',
      en: 'Glossing Toner & Chroma Shield',
      de: 'Glanz-Toner & Farbversiegelung',
      fr: 'Bain de Gloss & Neutralisation',
    },
    description: {
      it: 'Neutralizza riflessi indesiderati (gialli o ramati) e ravviva la lucentezza delle sfumature esistenti donando setosità istantanea.',
      en: 'Neutralizes unwanted yellow or brassy tones while locking in multi-dimensional luminosity and velvet touch.',
      de: 'Neutralisiert unerwünschte Gelb- oder Kupferstiche und verleiht bestehenden Farben neue Leuchtkraft.',
      fr: 'Neutralise les faux reflets cuivrés ou jaunâtres et réveille l’intensité de votre couleur.',
    },
  },

  // Treatments
  {
    id: 'treatment-keratin',
    category: 'treatment',
    target: 'all',
    popular: true,
    priceRange: '€35 - €55',
    duration: {
      it: '45-60 min',
      en: '45-60 mins',
      de: '45-60 Min.',
      fr: '45-60 min',
    },
    name: {
      it: 'Ricostruzione Cheratina Profonda & Acido Ialuronico',
      en: 'Deep Keratin & Hyaluronic Reconstruction',
      de: 'Tiefen-Keratin & Hyaluron Aufbaukur',
      fr: 'Reconstruction Profonde Kératine & Acide Hyaluronique',
    },
    description: {
      it: 'Trattamento intensivo per chiome sfibrate, spente o stressate da calore e decolorazioni. Rinforza la struttura interna fino al 90%.',
      en: 'Intensive restorative protocol for damaged, porous, or heat-stressed fibers. Restores up to 90% internal elasticity.',
      de: 'Intensivkur für strukturgeschädigtes, glanzloses Haar. Stärkt die Haarfaser von innen heraus.',
      fr: 'Protocole régénérant intense pour cheveux abîmés ou dévitalisés. Redonne force, matière et élasticité.',
    },
  },
  {
    id: 'treatment-scalp-spa',
    category: 'treatment',
    target: 'all',
    priceRange: '€24 - €32',
    duration: {
      it: '30 min',
      en: '30 mins',
      de: '30 Min.',
      fr: '30 min',
    },
    name: {
      it: 'Detox Cute & Scrub Rigenerante con Oli Essenziali',
      en: 'Scalp Detox & Essential Oil Spa Ritual',
      de: 'Kopfhaut-Detox & Kräuteröl-Ritual',
      fr: 'Rituel Détox Cuir Chevelu & Huiles Essentielles',
    },
    description: {
      it: 'Purifica la cute da impurità e residui, stimola la microcircolazione con oli essenziali biologici e previene la caduta stagionale.',
      en: 'Gently clarifies excess sebum and build-up, stimulates follicular microcirculation, and rebalances the scalp microbiome.',
      de: 'Befreit die Kopfhaut schonend von Rückständen, fördert die Mikrozirkulation und kräftigt die Haarwurzel.',
      fr: 'Assainit en douceur le cuir chevelu, stimule la microcirculation et renforce le bulbe capillaire.',
    },
  },

  // Special occasions & Bridal
  {
    id: 'special-bridal',
    category: 'special',
    target: 'women',
    popular: true,
    priceRange: '€160 - €230',
    duration: {
      it: 'Consulenza + 2 Prove',
      en: 'Consultation + 2 Trials',
      de: 'Beratung + 2 Probetermine',
      fr: 'Conseil + 2 Essais',
    },
    name: {
      it: 'Pacchetto Sposa "Giorno Perfetto"',
      en: '"Perfect Day" Bridal Hair Experience',
      de: 'Braut-Styling-Paket "Der Große Tag"',
      fr: 'Forfait Mariée "Jour Parfait"',
    },
    description: {
      it: 'Studio coordinato con l’abito e il velo, 2 prove acconciatura complete, trattamento idratante pre-nozze e acconciatura finale il giorno dell’evento.',
      en: 'Harmonized bridal styling with dress and veil, 2 comprehensive trials, pre-wedding gloss treatment, and final morning styling.',
      de: 'Abstimmung auf Brautkleid und Schleier, 2 Probestylings, intensive Feuchtigkeitskur und Styling am Hochzeitstag.',
      fr: 'Étude stylistique accordée à la robe, 2 essais complets, soin restructurant pré-mariage et coiffure le jour J.',
    },
  },
  {
    id: 'special-updo',
    category: 'special',
    target: 'women',
    priceRange: '€45 - €65',
    duration: {
      it: '45-60 min',
      en: '45-60 mins',
      de: '45-60 Min.',
      fr: '45-60 min',
    },
    name: {
      it: 'Raccolto Elegante o Semiraccolto per Eventi',
      en: 'Chic Event Updo & Half-Up Styling',
      de: 'Elegante Hochsteckfrisur für Festanlässe',
      fr: 'Chignon Élégant ou Demi-Attache de Soirée',
    },
    description: {
      it: 'Per cerimonie, lauree o serate di gala: forme pulite, trecce sartoriali o chignon morbidi con tenuta impeccabile per tutta la festa.',
      en: 'Ideal for galas, graduations, and wedding guests. Romantic textured buns or clean architectural silhouettes that last all night.',
      de: 'Perfekt für Hochzeitsgäste, Bälle oder Jubiläen. Moderner Chignon oder romantische Flechtelemente mit sicherem Halt.',
      fr: 'Pour cocktails, cérémonies ou soirées habillées. Chignons flous ou attaches sophistiquées longue tenue.',
    },
  },
];

export const salonReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Elena V.',
    date: {
      it: '2 settimane fa',
      en: '2 weeks ago',
      de: 'Vor 2 Wochen',
      fr: 'Il y a 2 semaines',
    },
    rating: 5,
    category: 'color',
    service: {
      it: 'Balayage Caramello & Taglio',
      en: 'Caramel Balayage & Cut',
      de: 'Karamell-Balayage & Schnitt',
      fr: 'Balayage Caramel & Coupe',
    },
    comment: {
      it: "Vado da L'Équipe Salon da oltre 4 anni e non cambierei mai! Hanno capito al volo il tipo di biondo caldo e naturale che volevo per la mia carnagione. Salone accogliente, pulito e sempre puntualissime con gli appuntamenti.",
      en: "I have been coming to L'Équipe Salon for over 4 years and wouldn’t change for anything! They understood exactly the warm natural blonde tone I wanted for my complexion. Beautiful salon, super clean, and impeccably on time.",
      de: "Ich bin seit über 4 Jahren bei L'Équipe Salon und würde nie wechseln! Sie haben sofort den warmen, natürlichen Blondton getroffen, den ich mir gewünscht habe. Äußerst pünktlich und herzlich.",
      fr: "Cliente fidèle depuis plus de 4 ans chez L'Équipe Salon. Ils savent exactement sublimer la chevelure avec des tons chauds ultra-naturels. Salon impeccable et ponctualité exemplaire.",
    },
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Marco Bonetti',
    date: {
      it: '1 mese fa',
      en: '1 month ago',
      de: 'Vor 1 Monat',
      fr: 'Il y a 1 mois',
    },
    rating: 5,
    category: 'men',
    service: {
      it: 'Taglio Uomo & Rifinitura Barba',
      en: "Men's Cut & Beard Styling",
      de: 'Herrenschnitt & Bartkontur',
      fr: 'Coupe Homme & Barbe',
    },
    comment: {
      it: 'Taglio impeccabile, sfumatura a forbice precisa e un massaggio rinfrescante con lo shampoo che rimette al mondo dopo una giornata di lavoro. I professionisti de L\'Équipe sono maestri autentici.',
      en: 'Flawless precision cut, great scissor fade, and a refreshing scalp wash that feels amazing after a long workday. The professionals at L\'Équipe are true masters of their craft.',
      de: 'Präziser Schnitt, saubere Übergänge und eine wohltuende Haarwäsche nach dem Arbeitstag. Das Team von L\'Équipe sind echte Profis.',
      fr: 'Coupe impeccable avec une finition soignée aux ciseaux et un shampoing massant relaxant. L\'équipe du salon est très professionnelle.',
    },
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Chiara Gamberini',
    date: {
      it: '1 mese fa',
      en: '1 month ago',
      de: 'Vor 1 Monat',
      fr: 'Il y a 1 mois',
    },
    rating: 5,
    category: 'cut',
    service: {
      it: 'Trattamento Cheratina & Piega Onde',
      en: 'Keratin Care & Wave Styling',
      de: 'Keratin-Kur & Wellenstyling',
      fr: 'Soin Kératine & Brushing Wavy',
    },
    comment: {
      it: 'Avevo i capelli bruciati da tinte fai da te. Con il loro trattamento alla cheratina e i consigli sui prodotti da usare a casa la mia chioma è rinata, lucidissima e morbida. Grazie di cuore!',
      en: 'My hair was completely dry from home bleaching. With their intensive keratin treatment and home care advice, my hair feels alive, silky, and shiny again. Thank you from the bottom of my heart!',
      de: 'Meine Haare waren durch falsches Färben strapaziert. Nach der Keratin-Behandlung und der ehrlichen Produktberatung sind sie wieder seidig weich und voller Glanz.',
      fr: 'Mes cheveux étaient abîmés par les colorations. Grâce au soin profond à la kératine et aux précieux conseils pour la maison, ils ont retrouvé éclat et vitalité.',
    },
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Federico M.',
    date: {
      it: '2 mesi fa',
      en: '2 months ago',
      de: 'Vor 2 Monaten',
      fr: 'Il y a 2 mois',
    },
    rating: 5,
    category: 'men',
    service: {
      it: 'Taglio Uomo Classico',
      en: "Classic Men's Cut",
      de: 'Klassischer Herrenschnitt',
      fr: 'Coupe Homme Classique',
    },
    comment: {
      it: 'Prezzi onestissimi, parcheggio comodissimo e accoglienza calorosa come in famiglia. Ti offrono sempre un buon caffè ed esci sempre soddisfatto del risultato.',
      en: 'Very fair prices, hassle-free parking, and warm family-like hospitality. They always offer great espresso and you leave looking top-notch.',
      de: 'Faire Preise, bequeme Parkplätze und ein herzlicher Empfang wie bei Freunden. Man bekommt immer einen guten Espresso serviert!',
      fr: 'Tarifs très corrects, parking facile et accueil chaleureux. On vous sert un bon café et le résultat est toujours impeccable.',
    },
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'Giulia R.',
    date: {
      it: '3 mesi fa',
      en: '3 months ago',
      de: 'Vor 3 Monaten',
      fr: 'Il y a 3 mois',
    },
    rating: 5,
    category: 'cut',
    service: {
      it: 'Taglio Medio Scalato & Piega Liscio Seta',
      en: 'Layered Mid-Length Cut & Blowout',
      de: 'Stufenschnitt & Seidenglatt-Föhnen',
      fr: 'Coupe Mi-Longue Dégradée & Brushing',
    },
    comment: {
      it: 'La cosa che amo di più di questo salone è che ti ascoltano davvero prima di toccare una ciocca. Non fanno tagli standard ma studiano ciò che sta bene a te. Stra-consigliato a tutti!',
      en: 'What I love most about this salon is that they genuinely listen to you before picking up the scissors. They don’t do generic cuts; they personalize everything. Highly recommended!',
      de: 'Das Beste an diesem Salon: Sie hören einem wirklich aufmerksam zu, bevor die Schere angesetzt wird. Keine Standardabfertigung, sondern echte Maßarbeit. Sehr zu empfehlen!',
      fr: 'Ce que j’apprécie particulièrement, c’est leur sens de l’écoute avant même le premier coup de ciseaux. Une vraie coupe sur-mesure.',
    },
    verified: true,
  },
];

export const openingHours: OpeningHour[] = [
  {
    dayId: 1, // Monday
    dayName: { it: 'Lunedì', en: 'Monday', de: 'Montag', fr: 'Lundi' },
    isClosed: true,
  },
  {
    dayId: 2, // Tuesday
    dayName: { it: 'Martedì', en: 'Tuesday', de: 'Dienstag', fr: 'Mardi' },
    morning: '08:30 – 12:30',
    afternoon: '15:00 – 19:00',
    isClosed: false,
  },
  {
    dayId: 3, // Wednesday
    dayName: { it: 'Mercoledì', en: 'Wednesday', de: 'Mittwoch', fr: 'Mercredi' },
    morning: '08:30 – 12:30',
    afternoon: '15:00 – 19:00',
    isClosed: false,
  },
  {
    dayId: 4, // Thursday
    dayName: { it: 'Giovedì', en: 'Thursday', de: 'Donnerstag', fr: 'Jeudi' },
    fullDay: '08:30 – 18:30',
    isClosed: false,
  },
  {
    dayId: 5, // Friday
    dayName: { it: 'Venerdì', en: 'Friday', de: 'Freitag', fr: 'Vendredi' },
    morning: '08:30 – 12:30',
    afternoon: '15:00 – 19:00',
    isClosed: false,
  },
  {
    dayId: 6, // Saturday
    dayName: { it: 'Sabato', en: 'Saturday', de: 'Samstag', fr: 'Samedi' },
    fullDay: '08:00 – 18:00',
    isClosed: false,
  },
  {
    dayId: 0, // Sunday
    dayName: { it: 'Domenica', en: 'Sunday', de: 'Sonntag', fr: 'Dimanche' },
    isClosed: true,
  },
];

// Helper to check live open status
export function getLiveStatus(lang: Language): {
  isOpen: boolean;
  statusText: string;
  nextInfo: string;
} {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday, ...
  const hour = now.getHours();
  const min = now.getMinutes();
  const currentTime = hour + min / 60;

  let isOpen = false;
  let nextInfo = '';

  if (day === 2 || day === 3 || day === 5) { // Tue, Wed, Fri (8:30-12:30, 15:00-19:00)
    if ((currentTime >= 8.5 && currentTime <= 12.5) || (currentTime >= 15.0 && currentTime <= 19.0)) {
      isOpen = true;
    }
  } else if (day === 4) { // Thu (8:30 - 18:30 continuous)
    if (currentTime >= 8.5 && currentTime <= 18.5) {
      isOpen = true;
    }
  } else if (day === 6) { // Sat (8:00 - 18:00 continuous)
    if (currentTime >= 8.0 && currentTime <= 18.0) {
      isOpen = true;
    }
  }

  const translations = {
    it: {
      open: 'Aperto adesso',
      closed: 'Chiuso in questo momento',
      nextTue: 'Riapre martedì alle 08:30',
      nextAfternoon: 'Riapre alle 15:00',
      nextTomorrow: 'Riapre domani alle 08:30',
    },
    en: {
      open: 'Open now',
      closed: 'Currently closed',
      nextTue: 'Reopens Tuesday at 08:30',
      nextAfternoon: 'Reopens this afternoon at 15:00',
      nextTomorrow: 'Reopens tomorrow at 08:30',
    },
    de: {
      open: 'Jetzt geöffnet',
      closed: 'Derzeit geschlossen',
      nextTue: 'Öffnet Dienstag um 08:30 Uhr',
      nextAfternoon: 'Öffnet heute um 15:00 Uhr',
      nextTomorrow: 'Öffnet morgen um 08:30 Uhr',
    },
    fr: {
      open: 'Actuellement ouvert',
      closed: 'Actuellement fermé',
      nextTue: 'Réouverture mardi à 08h30',
      nextAfternoon: 'Réouverture cet après-midi à 15h00',
      nextTomorrow: 'Réouverture demain à 08h30',
    },
  }[lang];

  if (isOpen) {
    return {
      isOpen: true,
      statusText: translations.open,
      nextInfo: '',
    };
  }

  // Figure out next info
  if (day === 0 || day === 1) {
    nextInfo = translations.nextTue;
  } else if ((day === 2 || day === 3 || day === 5) && currentTime >= 12.5 && currentTime < 15.0) {
    nextInfo = translations.nextAfternoon;
  } else {
    nextInfo = (day === 6) ? translations.nextTue : translations.nextTomorrow;
  }

  return {
    isOpen: false,
    statusText: translations.closed,
    nextInfo,
  };
}
