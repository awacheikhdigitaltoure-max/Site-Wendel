import lompoul from '../assets/lompoul.png';
import goree from '../assets/goree.png';
import casamance from '../assets/casamance.png';
import lacrose from '../assets/lacrose.png';
import nature from '../assets/nouveau-monument.jpg.png';
import djoudj from '../assets/djoudj_pelicans.jpg.jpg';
import saly from '../assets/Saly portudal.png';
import stlouis from '../assets/Saint louis.png';
import mangrove from '../assets/mangrove.png';
import monument from '../assets/monument-renaissance.jpg';
import parcHann from '../assets/parc-hann.png';
import casamanceAsset from '../assets/casamance.png';
import dindefelo from '../assets/dindefelo.png';
import cap_skirring from '../assets/cap_skirring.png';
import niokolo_koba from '../assets/niokolo_koba.png';
import bassari from '../assets/bassari.png';
import caleche from '../assets/saint_louis_caleche.png';

export const destinationsData = {
  fr: [
    { 
      id: 1, 
      title: "Île de Gorée", 
      category: "Histoire", 
      image: goree,
      rating: 4.8,
      reviews: 156,
      price: "15.000",
      currency: "CFA",
      duration: "Demi-journée",
      groupSize: "1-20 pers",
      description: "Une île empreinte d'histoire et d'émotion, classée au patrimoine mondial de l'UNESCO. Ses ruelles colorées et ses bougainvilliers cachent un passé poignant lié à la mémoire de l'esclavage.",
      detailedDescription: "Située à seulement quelques kilomètres au large de Dakar, l'île de Gorée est un sanctuaire de mémoire. Cette petite île volcanique, dépourvue de voitures, offre un contraste saisissant entre la beauté de ses architectures coloniales aux couleurs ocres et la gravité de son histoire. La Maison des Esclaves, avec sa porte du 'non-retour', reste le symbole le plus puissant de cette époque. Aujourd'hui, Gorée est aussi un centre d'art vibrant où peintres et sculpteurs exposent leurs œuvres dans le labyrinthe des ruelles fleuries.",
      gallery: [
        goree,
        "https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=1200",
        "https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=1200",
        "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1200"
      ],
      included: ["Pirogue Dakar-Gorée", "Guide certifié", "Entrées musées", "Eau minérale"],
      excluded: ["Déjeuner", "Souvenirs", "Transport hôtel-Dakar"],
      experiences: [
        { title: "Maison des Esclaves", desc: "Visite guidée du lieu de mémoire le plus emblématique d'Afrique.", duration: "1h30" },
        { title: "Le Castel", desc: "Une marche vers le sommet pour une vue panoramique sur Dakar et l'océan.", duration: "45min" }
      ],
      highlights: ["Patrimoine UNESCO", "Maison des Esclaves", "Atmosphère Paisible", "Lieu de Mémoire"],
      region: "Dakar"
    },
    { 
      id: 2, 
      title: "Saint-Louis", 
      category: "Élégance Coloniale", 
      image: stlouis,
      rating: 4.7,
      reviews: 210,
      price: "35.000",
      currency: "CFA",
      duration: "2 Jours",
      description: "L'ancienne capitale du Sénégal, Saint-Louis (Ndar), est une cité de caractère au charme colonial unique. Connectée par le pont Faidherbe, elle est le berceau du jazz et de l'élégance sénégalaise.",
      detailedDescription: "Saint-Louis du Sénégal, classée au patrimoine mondial de l'UNESCO, est une ville où le temps semble s'être arrêté. Située à l'embouchure du fleuve Sénégal, elle se divise entre l'île historique aux maisons coloniales colorées et le quartier des pêcheurs de Guet Ndar, vibrant d'activité.",
      gallery: [
        stlouis,
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200"
      ],
      included: ["Transport A/R Dakar", "Hébergement 1 nuit", "Petit déjeuner", "Tour en calèche"],
      excluded: ["Repas midi et soir", "Activités optionnelles", "Pourboires"],
      experiences: [
        { title: "Tour en calèche", desc: "Découvrez l'histoire de l'île au rythme des chevaux.", duration: "1h" },
        { title: "Guet Ndar", desc: "Immersion dans l'effervescence du quartier des pêcheurs.", duration: "2h" }
      ],
      highlights: ["Pont Faidherbe", "Architecture Coloniale", "Festival de Jazz", "Quartier Guet Ndar"],
      region: "Saint-Louis"
    },
    { 
      id: 10, 
      title: "Le Lac Rose", 
      category: "Incontournable", 
      image: lacrose,
      rating: 4.9,
      reviews: 320,
      price: "25.000",
      currency: "CFA",
      duration: "Demi-journée",
      description: "Célèbre pour sa couleur rose unique due à une algue, le Lac Retba est un site spectaculaire situé entre les dunes et l'océan.",
      detailedDescription: "Le Lac Retba, plus connu sous le nom de Lac Rose, est une merveille géologique unique. Sa forte salinité et la présence d'une algue particulière lui donnent des teintes allant du mauve au rose vif.",
      gallery: [
        lacrose,
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200",
        "https://images.unsplash.com/photo-1512100356132-d4b59529b434?q=80&w=1200"
      ],
      included: ["Transport 4x4", "Guide touristique", "Douche après flottaison"],
      excluded: ["Déjeuner", "Dégustation de sel"],
      experiences: [
        { title: "Baptême de flottaison", desc: "Baignade unique où l'on flotte sans aucun effort.", duration: "45min" },
        { title: "Rallye des Dunes", desc: "Circuit en 4x4 sur les traces du Paris-Dakar.", duration: "2h" }
      ],
      highlights: ["Eaux couleur rose", "Haute Salinité", "Dunes Blanches"],
      region: "Dakar"
    },
    { 
      id: 11, 
      title: "Désert de Lompoul", 
      category: "Aventure", 
      image: lompoul,
      rating: 4.8,
      reviews: 180,
      price: "45.000",
      currency: "CFA",
      duration: "2 Jours",
      description: "Un petit désert de dunes d'ocre magnifiques. Vivez une expérience saharienne unique au cœur du Sénégal.",
      detailedDescription: "Lompoul est une parenthèse enchantée, une perle saharienne isolée entre la Grande Côte et l'intérieur des terres.",
      gallery: [
        "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1200"
      ],
      experiences: [
        { title: "Méharée au couchant", desc: "Balade à dos de dromadaire sur les crêtes des dunes.", duration: "1h" },
        { title: "Nuit sous tente", desc: "Dormez dans des khaïmas confortables.", duration: "1 nuit" }
      ],
      highlights: ["Dunes Ocre", "Tentes Nomades", "Ciel Etoilé"],
      region: "Louga"
    },
    { 
      id: 3, 
      title: "Saly Portudal", 
      category: "Détente", 
      image: saly,
      rating: 4.6,
      reviews: 450,
      price: "12.000",
      currency: "CFA",
      duration: "Demi-journée",
      description: "La station balnéaire phare de la Petite Côte. Saly offre un mélange parfait de plages de sable fin.",
      detailedDescription: "Saly Portudal est le cœur battant du tourisme balnéaire au Sénégal. Cette ancienne cité de pêcheurs s'est transformée en une station dynamique.",
      gallery: [
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800"
      ],
      experiences: [
         { title: "Jet Ski", desc: "Séquence adrénaline sur les eaux calmes.", duration: "30min" }
      ],
      highlights: ["Plages de sable", "Vie Nocturne", "Hôtels de Luxe"],
      region: "Thiès"
    },
    { 
      id: 4, 
      title: "Somone", 
      category: "Lagune & Nature", 
      image: mangrove,
      rating: 4.8,
      reviews: 95,
      price: "20.000",
      currency: "CFA",
      duration: "Demi-journée",
      description: "Un écrin de biodiversité où la lagune rencontre l'océan. La Somone est célèbre pour sa réserve naturelle.",
      detailedDescription: "La lagune de la Somone est un véritable sanctuaire de paix. Entre mangroves entrelacées et bancs de sable fin.",
      gallery: [
        "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=800"
      ],
      experiences: [
        { title: "Balade en pirogue", desc: "Observation des oiseaux migrateurs.", duration: "1h30" }
      ],
      highlights: ["Réserve Naturelle", "Mangrove", "Repos Absolu"],
      region: "Thiès"
    },
    { 
      id: 5, 
      title: "Toubab Dialaw", 
      category: "Art & Falaises", 
      image: nature,
      rating: 4.7,
      reviews: 112,
      price: "18.000",
      currency: "CFA",
      duration: "Journée",
      description: "Un village d'artistes niché entre falaises ocre et mer. Célèbre pour son école de danse.",
      detailedDescription: "Toubab Dialaw est une perle rare située là où les falaises de terre rouge plongent dans l'Atlantique.",
      gallery: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800"
      ],
      experiences: [
        { title: "Cours de Danse", desc: "Initiation aux rythmes africains.", duration: "2h" }
      ],
      highlights: ["Centre Sobo Badè", "Falaises Rouges", "Ambiance Bohème"],
      region: "Thiès"
    },
    { 
      id: 6, 
      title: "Île de Ngor", 
      category: "Surf & Île", 
      image: goree,
      rating: 4.6,
      reviews: 280,
      price: "5.000",
      currency: "CFA",
      duration: "Demi-journée",
      description: "Un paradis pour les surfeurs et les amoureux de la tranquillité à dix minutes de Dakar.",
      detailedDescription: "Face à la pointe des Almadies, l'île de Ngor est un labyrinthe de fleurs et de maisons d'artistes.",
      gallery: [
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800"
      ],
      experiences: [
        { title: "Session de Surf", desc: "Affrontez la célèbre vague de Ngor.", duration: "1h30" }
      ],
      highlights: ["Surf mondial", "Sérénité Insulaire", "Poissons Grillés"],
      region: "Dakar"
    },
    { 
      id: 12, 
      title: "Delta du Saloum", 
      category: "Biodiversité", 
      image: mangrove,
      rating: 4.9,
      reviews: 195,
      price: "40.000",
      currency: "CFA",
      duration: "2 Jours",
      description: "Un labyrinthe de bolongs et de mangroves classé à l'UNESCO. Découvrez un Sénégal authentique.",
      detailedDescription: "Le Sine-Saloum est l'une des plus belles régions du Sénégal. Ce delta est un immense parc national.",
      gallery: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800"
      ],
      experiences: [
        { title: "Safari en Bolong", desc: "Pénétrez au cœur des mangroves.", duration: "3h" }
      ],
      highlights: ["Bolongs Mystiques", "Réserve UNESCO", "Pêche Traditionnelle"],
      region: "Fatick"
    },
    { 
      id: 14, 
      title: "Parc du Djoudj", 
      category: "Ornithologie", 
      image: djoudj,
      rating: 4.8,
      reviews: 145,
      price: "25.000",
      currency: "CFA",
      duration: "Journée",
      description: "Le troisième sanctuaire d'oiseaux au monde. Un spectacle naturel grandiose.",
      detailedDescription: "Situé au nord de Saint-Louis, le Parc National des Oiseaux du Djoudj est un miracle de la nature.",
      gallery: [
        "https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=800"
      ],
      experiences: [
        { title: "Exploration Ornithologique", desc: "Observez les colonies de pélicans.", duration: "2h" }
      ],
      highlights: ["Colonies de Pélicans", "Flamants Roses", "Patrimoine UNESCO"],
      region: "Saint-Louis"
    },
    { 
      id: 20, 
      title: "Monument de la Renaissance", 
      category: "Culture & Vue", 
      image: monument,
      rating: 4.7,
      reviews: 520,
      price: "5.000",
      currency: "CFA",
      duration: "1 Heure",
      description: "Plus haute que la Statue de la Liberté, cette œuvre majestueuse domine Dakar.",
      detailedDescription: "Situé sur les collines des Mamelles, le Monument est une structure imposante en bronze.",
      gallery: [
        "https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=1200"
      ],
      experiences: [
        { title: "Visite guidée", desc: "Découvrez la symbolique interne.", duration: "1h" }
      ],
      highlights: ["Vue Panoramique", "Symbole Africain", "Les Mamelles"],
      region: "Dakar"
    },
    { 
      id: 21, 
      title: "Parc de Hann", 
      category: "Nature & Loisirs", 
      image: parcHann,
      rating: 4.5,
      reviews: 230,
      price: "2.000",
      currency: "CFA",
      duration: "Demi-journée",
      description: "Le poumon vert de la capitale. Un jardin botanique et zoologique idéal.",
      detailedDescription: "Le Parc Forestier et Zoologique de Hann est une oasis de fraîcheur de 60 hectares.",
      gallery: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200"
      ],
      experiences: [
        { title: "Pique-nique nature", desc: "Déjeunez sous l'ombre des arbres.", duration: "2h" }
      ],
      highlights: ["Biodiversité", "Forêt Urbaine", "Zoo"],
      region: "Dakar"
    },
    { 
      id: 22, 
      title: "Casamance (Ziguinchor)", 
      category: "Authenticité", 
      image: casamanceAsset,
      rating: 4.9,
      reviews: 165,
      price: "75.000",
      currency: "CFA",
      duration: "4 Jours",
      description: "La région la plus verte et luxuriante du pays. Entre rizières et forêts de palmiers.",
      detailedDescription: "Ziguinchor est la porte d'entrée de la Casamance, une région au caractère unique.",
      gallery: [
        "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200"
      ],
      experiences: [
        { title: "Culture Diola", desc: "Visite des villages traditionnels.", duration: "4h" }
      ],
      highlights: ["Végétation Luxuriante", "Culture Diola", "Rizières"],
      region: "Casamance"
    },
    { 
      id: 23, 
      title: "Chutes de Dindéfelo", 
      category: "Aventure", 
      image: dindefelo,
      rating: 4.9,
      reviews: 75,
      price: "55.000",
      currency: "CFA",
      duration: "3 Jours",
      description: "Une cascade spectaculaire de 100 mètres de hauteur dans les montagnes de Kédougou.",
      detailedDescription: "Les chutes de Dindéfelo sont une merveille naturelle cachée dans une gorge abrupte.",
      gallery: [
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200"
      ],
      experiences: [
        { title: "Randonnée", desc: "Marche dans la réserve naturelle.", duration: "2h" }
      ],
      highlights: ["Cascade de 100m", "Montagnes", "Eaux Fraîches"],
      region: "Kédougou"
    },
    { 
      id: 24, 
      title: "Cap Skirring", 
      category: "Plage Tropicale", 
      image: cap_skirring,
      rating: 4.8,
      reviews: 190,
      price: "65.000",
      currency: "CFA",
      duration: "5 Jours",
      description: "L'un des plus beaux rivages d'Afrique de l'Ouest. Cocotiers et sable fin.",
      detailedDescription: "Situé à la pointe sud de la Casamance, le Cap Skirring est une station balnéaire d'exception.",
      gallery: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200"
      ],
      experiences: [
        { title: "Plage & Détente", desc: "Journée de repos sous les cocotiers.", duration: "Journée" }
      ],
      highlights: ["Plages de Rêve", "Soleil Permanent", "Ambiance Paisible"],
      region: "Casamance"
    },
    { 
      id: 25, 
      title: "Niokolo-Koba", 
      category: "Safari & Nature", 
      image: niokolo_koba,
      rating: 4.6,
      reviews: 130,
      price: "85.000",
      currency: "CFA",
      duration: "4 Jours",
      description: "Le plus grand parc national du Sénégal. Une réserve de biosphère classée à l'UNESCO.",
      detailedDescription: "Le Parc National du Niokolo-Koba est un sanctuaire sauvage traversé par le fleuve Gambie.",
      gallery: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200"
      ],
      experiences: [
        { title: "Safari 4x4", desc: "Observation des grands mammifères.", duration: "4h" }
      ],
      highlights: ["Big Five", "Patrimoine UNESCO", "Savane Sauvage"],
      region: "Tambacounda"
    }
  ],

  en: [
    { 
      id: 1, 
      title: "Goree Island", 
      category: "History", 
      image: goree,
      rating: 4.8,
      reviews: 156,
      price: "15,000",
      currency: "CFA",
      duration: "Half-day",
      groupSize: "1-20 people",
      description: "An island steeped in history and emotion, a UNESCO World Heritage site.",
      detailedDescription: "Located just a few miles off Dakar, Gorée Island is a sanctuary of memory.",
      gallery: [
        "https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=1200"
      ],
      experiences: [
        { title: "House of Slaves", desc: "Guided tour of Africa's most iconic memory site.", duration: "1h30" }
      ],
      highlights: ["UNESCO Heritage", "House of Slaves", "Peaceful Atmosphere"],
      region: "Dakar"
    },
    { 
      id: 2, 
      title: "Saint-Louis", 
      category: "Colonial Elegance", 
      image: stlouis,
      rating: 4.7,
      description: "The former capital of Senegal, Saint-Louis (Ndar), is a town of character with unique colonial charm.",
      detailedDescription: "Saint-Louis, UNESCO World Heritage site, is a town where time seems to have stood still.",
      gallery: [
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200"
      ],
      experiences: [
        { title: "Carriage Tour", desc: "Discover the island's history at a horse's pace.", duration: "1h" }
      ],
      highlights: ["Faidherbe Bridge", "Colonial Architecture", "Jazz Festival"],
      region: "Saint-Louis"
    },
    { 
      id: 10, 
      title: "Pink Lake", 
      category: "Must-See", 
      image: lacrose,
      rating: 4.9,
      description: "Famous for its unique pink color due to algae, Lake Retba is a spectacular site.",
      detailedDescription: "Lake Retba, better known as the Pink Lake, is a unique geological wonder.",
      gallery: [
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200"
      ],
      experiences: [
        { title: "Floating Swim", desc: "Unique experience where you float effortlessly.", duration: "45min" }
      ],
      highlights: ["Pink Waters", "High Salinity", "White Dunes"],
      region: "Dakar"
    },
    { 
      id: 11, 
      title: "Lompoul Desert", 
      category: "Adventure", 
      image: lompoul,
      rating: 4.8,
      description: "A small desert of magnificent ochre dunes. Live a unique Saharan experience.",
      detailedDescription: "Lompoul is an enchanted oasis, a Saharan pearl isolated from the coast.",
      gallery: [
        "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1200"
      ],
      experiences: [
        { title: "Sunset Camel Ride", desc: "A ride on the dune crests.", duration: "1h" }
      ],
      highlights: ["Ochre Dunes", "Nomadic Tents", "Starry Sky"],
      region: "Louga"
    },
    { 
      id: 3, 
      title: "Saly Portudal", 
      category: "Relaxation", 
      image: saly,
      rating: 4.6,
      description: "The flagship seaside resort of the Petite Côte. Saly offers a perfect blend of beaches.",
      detailedDescription: "Saly Portudal is the beating heart of seaside tourism in Senegal.",
      gallery: [
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800"
      ],
      experiences: [
         { title: "Jet Ski", desc: "Adrenaline rush on the calm coastal waters.", duration: "30min" }
      ],
      highlights: ["Sandy Beaches", "Water Sports", "Nightlife"],
      region: "Thiès"
    },
    { 
      id: 4, 
      title: "Somone", 
      category: "Lagoon & Nature", 
      image: mangrove,
      rating: 4.8,
      description: "A biodiversity haven where the lagoon meets the ocean. Somone is famous for its reserve.",
      detailedDescription: "The Somone lagoon is a true sanctuary of peace. Between intertwined mangroves.",
      gallery: [
        "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=800"
      ],
      experiences: [
        { title: "Pirogue Ride", desc: "Bird watching in the mangrove.", duration: "1h30" }
      ],
      highlights: ["Nature Reserve", "Mangrove", "Migratory Birds"],
      region: "Thiès"
    },
    { 
      id: 5, 
      title: "Toubab Dialaw", 
      category: "Art & Cliffs", 
      image: nature,
      rating: 4.7,
      description: "A village of artists nestled between ochre cliffs and the sea. Famous for its organic architecture.",
      detailedDescription: "Toubab Dialaw is a rare gem located where the red earth cliffs plunge into the Atlantic.",
      gallery: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800"
      ],
      experiences: [
        { title: "Dance Class", desc: "Introduction to African rhythms.", duration: "2h" }
      ],
      highlights: ["Sobo Badè Center", "Red Cliffs", "Bohemian Vibe"],
      region: "Thiès"
    },
    { 
      id: 6, 
      title: "Ngor Island", 
      category: "Surf & Island", 
      image: goree,
      rating: 4.6,
      description: "A paradise for surfers and peace lovers ten minutes from Dakar.",
      detailedDescription: "Facing the Almadies point, Ngor Island is a maze of flowers and artists' houses.",
      gallery: [
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800"
      ],
      experiences: [
        { title: "Surf Session", desc: "Face the famous Ngor wave.", duration: "1h30" }
      ],
      highlights: ["World Surf", "Island Serenity", "Grilled Fish"],
      region: "Dakar"
    },
    { 
      id: 12, 
      title: "Saloum Delta", 
      category: "Biodiversity", 
      image: mangrove,
      rating: 4.9,
      description: "A labyrinth of bolongs and mangroves classified by UNESCO.",
      detailedDescription: "Sine-Saloum is one of the most beautiful regions in Senegal.",
      gallery: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800"
      ],
      experiences: [
        { title: "Bolong Safari", desc: "Penetrate the heart of the mangroves.", duration: "3h" }
      ],
      highlights: ["Mystic Bolongs", "UNESCO Reserve", "Traditional Fishing"],
      region: "Fatick"
    },
    { 
      id: 14, 
      title: "Djoudj Bird Park", 
      category: "Ornithology", 
      image: djoudj,
      rating: 4.8,
      description: "The third largest bird sanctuary in the world. A grandiose natural spectacle.",
      detailedDescription: "Located north of Saint-Louis, the Djoudj Sanctuary is a miracle of nature.",
      gallery: [
        "https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=800"
      ],
      experiences: [
        { title: "Birdwatching Expedition", desc: "Observe the pelican colonies.", duration: "2h" }
      ],
      highlights: ["Pelican Colonies", "Pink Flamingos", "UNESCO Heritage"],
      region: "Saint-Louis"
    },
    { 
      id: 20, 
      title: "Renaissance Monument", 
      category: "Culture & View", 
      image: monument,
      rating: 4.7,
      description: "Taller than the Statue of Liberty, this majestic work dominates Dakar.",
      detailedDescription: "Located on one of the Mamelles hills, the Monument is an imposing bronze structure.",
      gallery: [
        "https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=1200"
      ],
      experiences: [
        { title: "Guided tour", desc: "Discover the internal symbolism.", duration: "1h" }
      ],
      highlights: ["Panoramic View", "African Symbol", "The Mamelles"],
      region: "Dakar"
    },
    { 
      id: 21, 
      title: "Hann Park", 
      category: "Nature & Leisure", 
      image: parcHann,
      rating: 4.5,
      description: "The green lung of the capital. A botanical and zoological garden ideal.",
      detailedDescription: "The Hann Forest and Zoo Park is a 60-hectare oasis of freshness.",
      gallery: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200"
      ],
      experiences: [
        { title: "Nature picnic", desc: "Lunch under the shade of century-old trees.", duration: "2h" }
      ],
      highlights: ["Biodiversity", "Urban Forest", "Zoo"],
      region: "Dakar"
    },
    { 
      id: 22, 
      title: "Casamance (Ziguinchor)", 
      category: "Authenticity", 
      image: casamanceAsset,
      rating: 4.9,
      description: "The greenest and most lush region of the country. Between rice fields.",
      detailedDescription: "Ziguinchor is the gateway to Casamance, a unique region separated from the north.",
      gallery: [
        "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200"
      ],
      experiences: [
        { title: "Diola Culture", desc: "Visit villages and discover local traditions.", duration: "4h" }
      ],
      highlights: ["Lush Vegetation", "Diola Culture", "Rice Fields"],
      region: "Casamance"
    },
    { 
      id: 23, 
      title: "Dindéfelo Falls", 
      category: "Adventure", 
      image: dindefelo,
      rating: 4.9,
      description: "A spectacular 100-meter-high waterfall nestled in the mountains of Kédougou.",
      detailedDescription: "The Dindéfelo falls are a natural wonder hidden in a steep gorge.",
      gallery: [
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200"
      ],
      experiences: [
        { title: "Hiking", desc: "Walk in the community nature reserve.", duration: "2h" }
      ],
      highlights: ["100m Waterfall", "Mountains", "Fresh Waters"],
      region: "Kédougou"
    },
    { 
      id: 24, 
      title: "Cap Skirring", 
      category: "Tropical Beach", 
      image: cap_skirring,
      rating: 4.8,
      description: "One of the most beautiful shorelines in West Africa. Coconut trees and fine sand.",
      detailedDescription: "Located at the southern tip of Casamance, Cap Skirring is an exceptional resort.",
      gallery: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200"
      ],
      experiences: [
        { title: "Beach & Relaxation", desc: "Day of rest under the coconut trees.", duration: "Day" }
      ],
      highlights: ["Dream Beaches", "Permanent Sun", "Peaceful Vibe"],
      region: "Casamance"
    },
    { 
      id: 25, 
      title: "Niokolo-Koba", 
      category: "Safari & Nature", 
      image: niokolo_koba,
      rating: 4.6,
      description: "The largest national park in Senegal. A UNESCO Biosphere Reserve.",
      detailedDescription: "Niokolo-Koba National Park is a wild sanctuary crossed by the Gambia River.",
      gallery: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200"
      ],
      experiences: [
        { title: "4x4 Safari", desc: "Observation of large mammals in their natural habitat.", duration: "4h" }
      ],
      highlights: ["Big Five", "UNESCO Heritage", "Wild Savanna"],
      region: "Tambacounda"
    }
  ]
};
