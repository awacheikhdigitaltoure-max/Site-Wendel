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

export const destinationsData = {
  fr: [
    { 
      id: 1, 
      title: "Île de Gorée", 
      category: "Histoire", 
      image: goree,
      rating: 4.8,
      description: "Une île empreinte d'histoire et d'émotion, classée au patrimoine mondial de l'UNESCO. Ses ruelles colorées et ses bougainvilliers cachent un passé poignant lié à la mémoire de l'esclavage.",
      detailedDescription: "Située à seulement quelques kilomètres au large de Dakar, l'île de Gorée est un sanctuaire de mémoire. Cette petite île volcanique, dépourvue de voitures, offre un contraste saisissant entre la beauté de ses architectures coloniales aux couleurs ocres et la gravité de son histoire. La Maison des Esclaves, avec sa porte du 'non-retour', reste le symbole le plus puissant de cette époque. Aujourd'hui, Gorée est aussi un centre d'art vibrant où peintres et sculpteurs exposent leurs œuvres dans le labyrinthe des ruelles fleuries.",
      gallery: [
        "https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=1200",
        "https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=1200",
        "https://images.unsplash.com/photo-1629117621431-155fd160f249?q=80&w=1200"
      ],
      experiences: [
        { title: "Maison des Esclaves", desc: "Visite guidée du lieu de mémoire le plus emblématique d'Afrique.", duration: "1h30" },
        { title: "Le Castel", desc: "Une marche vers le sommet pour une vue panoramique sur Dakar et l'océan.", duration: "45min" },
        { title: "Ateliers d'Artistes", desc: "Rencontre avec les peintres de sable et sculpteurs locaux.", duration: "2h" }
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
      description: "L'ancienne capitale du Sénégal, Saint-Louis (Ndar), est une cité de caractère au charme colonial unique. Connectée par le pont Faidherbe, elle est le berceau du jazz et de l'élégance sénégalaise.",
      detailedDescription: "Saint-Louis du Sénégal, classée au patrimoine mondial de l'UNESCO, est une ville où le temps semble s'être arrêté. Située à l'embouchure du fleuve Sénégal, elle se divise entre l'île historique aux maisons coloniales colorées et le quartier des pêcheurs de Guet Ndar, vibrant d'activité. Le célèbre pont Faidherbe, conçu par les ateliers Eiffel, relie l'île au continent. C'est une ville de culture, célèbre pour son Festival de Jazz international et ses 'Signares', femmes métisses symbole de l'élégance saint-louisienne.",
      gallery: [
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200",
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1200",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
        "https://images.unsplash.com/photo-1563290231-698f1266299b?q=80&w=1200"
      ],
      experiences: [
        { title: "Tour en calèche", desc: "Découvrez l'histoire de l'île au rythme des chevaux.", duration: "1h" },
        { title: "Pirogue au crépuscule", desc: "Une balade sur le fleuve Sénégal au coucher du soleil.", duration: "1h30" },
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
      description: "Célèbre pour sa couleur rose unique due à une algue, le Lac Retba est un site spectaculaire situé entre les dunes et l'océan. C'est ici que s'achevait le mythique rallye Paris-Dakar.",
      detailedDescription: "Le Lac Retba, plus connu sous le nom de Lac Rose, est une merveille géologique unique. Sa forte salinité (similaire à celle de la Mer Morte) et la présence d'une algue particulière lui donnent des teintes allant du mauve au rose vif sous l'effet du soleil. Vous y verrez les ramasseurs de sel, enduits de beurre de karité, extraire manuellement le sel du fond du lac. Autour, les immenses dunes de sable blanc offrent un terrain de jeu parfait pour l'aventure en 4x4 ou en quad, avec l'océan juste derrière.",
      gallery: [
        "/images/goree_1.png",
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200",
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200",
        "https://images.unsplash.com/photo-1629130761565-d064fc674697?q=80&w=1200"
      ],
      experiences: [
        { title: "Baptême de flottaison", desc: "Baignade unique où l'on flotte sans aucun effort grâce au sel.", duration: "45min" },
        { title: "Rallye des Dunes", desc: "Circuit en 4x4 sur les traces du Paris-Dakar.", duration: "2h" },
        { title: "Récolte de sel", desc: "Rencontre et échange avec les travailleurs du lac.", duration: "1h" }
      ],
      highlights: ["Eaux couleur rose", "Haute Salinité", "Dunes Blanches", "Circuit Rallye"],
      region: "Dakar"
    },
    { 
      id: 11, 
      title: "Désert de Lompoul", 
      category: "Aventure", 
      image: lompoul,
      rating: 4.8,
      description: "Un petit désert de dunes d'ocre magnifiques. Vivez une expérience saharienne unique au cœur du Sénégal avec une nuit sous les tentes nomades (khaïmas).",
      detailedDescription: "Lompoul est une parenthèse enchantée, une perle saharienne isolée entre la Grande Côte et l'intérieur des terres. Ses dunes de sable ocre, sculptées par le vent, s'étendent à perte de vue. Ici, l'aventure commence par un transfert en 4x4 pour atteindre les campements de charme. Le soir, sous un ciel étoilé d'une pureté incroyable, le désert s'anime au son des percussions et du thé traditionnel à la menthe. Une déconnexion totale garantie.",
      gallery: [
        "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1200",
        "https://images.unsplash.com/photo-1509316785289-025f5d846b35?q=80&w=1200",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200",
        "https://images.unsplash.com/photo-1504198453319-5ce911baf2ea?q=80&w=1200"
      ],
      experiences: [
        { title: "Méharée au couchant", desc: "Balade à dos de dromadaire sur les crêtes des dunes.", duration: "1h" },
        { title: "Nuit sous tente", desc: "Dormez dans des khaïmas confortables en plein désert.", duration: "1 nuit" },
        { title: "Surf sur sable", desc: "Glissez sur les pentes raides des dunes dorées.", duration: "1h" }
      ],
      highlights: ["Dunes Ocre", "Tentes Nomades", "Ciel Etoilé", "Calme Absolu"],
      region: "Louga"
    },
    { 
      id: 3, 
      title: "Saly Portudal", 
      category: "Détente", 
      image: saly,
      rating: 4.6,
      description: "La station balnéaire phare de la Petite Côte. Saly offre un mélange parfait de plages de sable fin, de sports nautiques et d'animation pour une détente absolue.",
      detailedDescription: "Saly Portudal est le cœur battant du tourisme balnéaire au Sénégal. Cette ancienne cité de pêcheurs s'est transformée en une station dynamique bordée de cocotiers. Ses plages abritées sont idéales pour la baignade et la pratique du jet-ski, du parachute ascensionnel ou de la pêche au gros. Le soir, la ville s'anime avec ses restaurants, boutiques et casinos, offrant une ambiance festive et conviviale sous le climat doux de la côte.",
      gallery: [
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800"
      ],
      experiences: [
         { title: "Jet Ski", desc: "Séquence adrénaline sur les eaux calmes de la côte.", duration: "30min" },
         { title: "Pêche sportive", desc: "Sortie en mer pour tenter de capturer un espadon.", duration: "4h" }
      ],
      highlights: ["Plages de sable", "Loisirs nautiques", "Vie Nocturne", "Hôtels de Luxe"],
      region: "Thiès"
    },
    { 
      id: 4, 
      title: "Somone", 
      category: "Lagune & Nature", 
      image: mangrove,
      rating: 4.8,
      description: "Un écrin de biodiversité où la lagune rencontre l'océan. La Somone est célèbre pour sa réserve naturelle de la biosphère et sa quiétude reposante.",
      detailedDescription: "La lagune de la Somone est un véritable sanctuaire de paix. Entre mangroves entrelacées et bancs de sable fin, elle abrite une multitude d'oiseaux migrateurs comme les pélicans et les hérons. La balade en pirogue à travers les bolongs est une expérience méditative. Le village lui-même, avec ses restaurants pieds dans l'eau, offre une pause gourmande inoubliable face au ballet des vagues et des oiseaux.",
      gallery: [
        "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=800",
        "https://images.unsplash.com/photo-1522306877087-2433e1436e4f?q=80&w=800"
      ],
      experiences: [
        { title: "Balade en pirogue", desc: "Observation des oiseaux migrateurs dans la mangrove.", duration: "1h30" },
        { title: "Dégustation d'huîtres", desc: "Goûtez aux huîtres grillées sur les bords de la lagune.", duration: "1h" }
      ],
      highlights: ["Réserve Naturelle", "Mangrove", "Oiseaux Migrateurs", "Repos Absolu"],
      region: "Thiès"
    },
    { 
      id: 5, 
      title: "Toubab Dialaw", 
      category: "Art & Falaises", 
      image: nature,
      rating: 4.7,
      description: "Un village d'artistes niché entre falaises ocre et mer. Célèbre pour son école de danse et son architecture organique, c'est le lieu idéal pour la création.",
      detailedDescription: "Toubab Dialaw est une perle rare située là où les falaises de terre rouge plongent dans l'Atlantique. Ce village a su préserver une âme bohème et artistique hors du commun. C'est ici qu'on trouve l'Espace Sobo Badè, un centre culturel à l'architecture onirique faite de pierre, de fer et de coquillages. Les amateurs de danse, de musique et d'arts visuels viennent du monde entier pour s'y ressourcer. Les petites criques isolées au pied des falaises offrent des moments de baignade spectaculaires.",
      gallery: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800"
      ],
      experiences: [
        { title: "Cours de Danse", desc: "Initiation aux rythmes africains à l'école de danse Jant-Bi.", duration: "2h" },
        { title: "Atelier Poterie", desc: "Créez votre propre œuvre avec les artisans locaux.", duration: "2h" }
      ],
      highlights: ["Centre Sobo Badè", "Falaises Rouges", "Criques Secrètes", "Ambiance Bohème"],
      region: "Thiès"
    },
    { 
      id: 6, 
      title: "Île de Ngor", 
      category: "Surf & Île", 
      image: goree,
      rating: 4.6,
      description: "Un paradis pour les surfeurs et les amoureux de la tranquillité à dix minutes de Dakar. Ses ruelles sans voitures et sa vague mythique en font un lieu privilégié.",
      detailedDescription: "Face à la pointe des Almadies, l'île de Ngor est un labyrinthe de fleurs et de maisons d'artistes. Accessibles en pirogue traditionnelle, ses plages aux eaux cristallines sont un havre de paix loin du bourrom-bourrom de la capitale. La côte nord de l'île est mondialement connue des surfeurs pour sa vague 'Ngor Right', immortalisée dans le film 'The Endless Summer'. C'est une escale chic et décontractée où l'on déguste du poisson grillé les pieds dans le sable en regardant les pirogues passer.",
      gallery: [
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800",
        "https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?q=80&w=800"
      ],
      experiences: [
        { title: "Session de Surf", desc: "Affrontez la célèbre vague de Ngor avec un coach local.", duration: "1h30" },
        { title: "Traversée en pirogue", desc: "Vivez le trajet typique entre le continent et l'île.", duration: "10min" }
      ],
      highlights: ["Surf mondial", "Sérénité Insulaire", "Poissons Grillés", "Ateliers d'Art"],
      region: "Dakar"
    },
    { 
      id: 12, 
      title: "Delta du Saloum", 
      category: "Biodiversité", 
      image: mangrove,
      rating: 4.9,
      description: "Un labyrinthe de bolongs et de mangroves classé à l'UNESCO. Découvrez un Sénégal authentique et sauvage entre terre et eau.",
      detailedDescription: "Le Sine-Saloum est l'une des plus belles régions du Sénégal. Ce delta formé par la rencontre de deux fleuves avec l'océan est un immense parc national. En pirogue, on navigue entre des centaines d'îles de mangrove, domaines de milliers d'oiseaux et de petits singes. Les villages de pêcheurs et de ramasseurs de coquillages y vivent au rythme des marées. Les îles-cimetières de coquillages, comme à Fadiouth, témoignent d'une culture millénaire et d'une cohabitation religieuse exemplaire.",
      gallery: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800"
      ],
      experiences: [
        { title: "Safari en Bolong", desc: "Pénétrez au cœur des mangroves impénétrables.", duration: "3h" },
        { title: "Nuit en Écolodge", desc: "Séjournez en immersion totale dans une architecture durable.", duration: "1 nuit" }
      ],
      highlights: ["Bolongs Mystiques", "Réserve UNESCO", "Pêche Traditionnelle", "Îles aux Oiseaux"],
      region: "Fatick"
    },
    { 
      id: 14, 
      title: "Parc du Djoudj", 
      category: "Ornithologie", 
      image: djoudj,
      rating: 4.8,
      description: "Le troisième sanctuaire d'oiseaux au monde. Un spectacle naturel grandiose où des millions d'oiseaux migrateurs viennent hiverner.",
      detailedDescription: "Situé à soixante kilomètres au nord de Saint-Louis, le Parc National des Oiseaux du Djoudj est un miracle de la nature. Chaque année, plus de trois millions d'oiseaux de soixante-dix espèces différentes y font étape. La traversée en pirogue du grand plan d'eau est une immersion magique au milieu des pélicans, flamants roses, cormorans et hérons. On y croise également des crocodiles et des phacochères. C'est l'un des rares endroits au monde où l'on peut voir le nichoir des pélicans de si près.",
      gallery: [
        "https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=800",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800"
      ],
      experiences: [
        { title: "Exploration Ornithologique", desc: "Observez les colonies de pélicans en pleine nichée.", duration: "2h" },
        { title: "Piste des Crocodiles", desc: "Observez les reptiles se chauffer au soleil du fleuve.", duration: "1h30" }
      ],
      highlights: ["Colonies de Pélicans", "Flamants Roses", "Patrimoine UNESCO", "Sanctuaire Mondial"],
      region: "Saint-Louis"
    },
    { 
      id: 20, 
      title: "Monument de la Renaissance", 
      category: "Culture & Vue", 
      image: monument,
      rating: 4.7,
      description: "Plus haute que la Statue de la Liberté, cette œuvre majestueuse domine Dakar. Elle symbolise une Afrique qui se dresse vers son destin.",
      detailedDescription: "Situé sur l'une des collines des Mamelles, le Monument de la Renaissance Africaine est une structure imposante en bronze de 52 mètres. Inauguré en 2010, il offre l'une des vues les plus spectaculaires sur la presqu'île du Cap-Vert et l'océan Atlantique. La montée des marches jusqu'au pied du couple et de l'enfant est un défi sportif récompensé par un panorama à couper le souffle, surtout au coucher du soleil quand la lumière dore le bronze.",
      gallery: [
        "https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=1200",
        "https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=1200"
      ],
      experiences: [
        { title: "Visite guidée", desc: "Découvrez la symbolique interne et l'histoire du monument.", duration: "1h" },
        { title: "Coucher de soleil", desc: "Le meilleur moment pour des photos panoramiques de Dakar.", duration: "1h" }
      ],
      highlights: ["Vue Panoramique", "Symbole Africain", "Exploit Architectural", "Les Mamelles"],
      region: "Dakar"
    },
    { 
      id: 21, 
      title: "Parc de Hann", 
      category: "Nature & Loisirs", 
      image: parcHann,
      rating: 4.5,
      description: "Le poumon vert de la capitale. Un jardin botanique et zoologique idéal pour une pause nature rafraîchissante au cœur de Dakar.",
      detailedDescription: "Le Parc Forestier et Zoologique de Hann est une oasis de fraîcheur de 60 hectares. Créé en 1903, il abrite une grande diversité d'espèces végétales et un zoo où l'on peut observer les lions du Sénégal, des hyènes, des gazelles et de nombreux oiseaux. C'est le lieu de rendez-vous privilégié des familles dakaroises pour les pique-niques et les balades à l'ombre des grands eucalyptus et des kapokiers.",
      gallery: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200"
      ],
      experiences: [
        { title: "Pique-nique nature", desc: "Déjeunez sous l'ombre des arbres centenaires.", duration: "2h" },
        { title: "Zoo Tour", desc: "Rencontre avec la faune sauvage du Sénégal.", duration: "1h30" }
      ],
      highlights: ["Biodiversité", "Forêt Urbaine", "Zoo", "Calme"],
      region: "Dakar"
    },
    { 
      id: 22, 
      title: "Casamance (Ziguinchor)", 
      category: "Authenticité", 
      image: casamanceAsset,
      rating: 4.9,
      description: "La région la plus verte et luxuriante du pays. Entre rizières, forêts de palmiers et culture Diola, la Casamance vous transportera ailleurs.",
      detailedDescription: "Ziguinchor est la porte d'entrée de la Casamance, une région au caractère unique séparée du nord par la Gambie. Ici, le rythme ralentit. Les maisons à impluvium, les danses traditionnelles des masques et la gentillesse légendaire des Diolas font de ce voyage une immersion culturelle profonde. Les paysages de rizières inondées et les bolongs bordés de fromagers géants offrent des décors d'une beauté sauvage incomparable.",
      gallery: [
        "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200",
        "https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?q=80&w=1200"
      ],
      experiences: [
        { title: "Culture Diola", desc: "Visite des villages et découverte des traditions locales.", duration: "4h" },
        { title: "Pirogue sur le fleuve", desc: "Navigation silencieuse entre les îles de Casamance.", duration: "3h" }
      ],
      highlights: ["Végétation Luxuriante", "Culture Diola", "Rizières", "Iles de Casamance"],
      region: "Casamance"
    },
    { 
      id: 23, 
      title: "Chutes de Dindéfelo", 
      category: "Aventure", 
      image: "https://images.unsplash.com/photo-1433006346545-5107630989d9?q=80&w=1200",
      rating: 4.9,
      description: "Une cascade spectaculaire de 100 mètres de hauteur nichée dans les montagnes de Kédougou. Un paradis caché pour les randonneurs.",
      detailedDescription: "Près de la frontière guinéenne, dans la région de Kédougou, les chutes de Dindéfelo sont une merveille naturelle cachée dans une gorge abrupte. Après une marche d'approche dans une forêt dense, le bruit de l'eau vous guide vers ce rideau argenté qui se jette dans un bassin d'eau claire et fraîche. C'est l'un des rares endroits au Sénégal où l'on peut faire l'expérience de la montagne et se baigner au pied d'une chute d'eau vertigineuse.",
      gallery: [
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200",
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200"
      ],
      experiences: [
        { title: "Randonnée", desc: "Marche dans la réserve naturelle communautaire.", duration: "2h" },
        { title: "Baignade", desc: "Plouf rafraîchissant dans le bassin au pied de la cascade.", duration: "1h" }
      ],
      highlights: ["Cascade de 100m", "Montagnes", "Randonnée", "Eaux Fraîches"],
      region: "Kédougou"
    },
    { 
      id: 24, 
      title: "Cap Skirring", 
      category: "Plage Tropicale", 
      image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200",
      rating: 4.8,
      description: "L'un des plus beaux rivages d'Afrique de l'Ouest. Cocotiers, sable fin et soleil permanent font du Cap Skirring une destination de rêve.",
      detailedDescription: "Situé à la pointe sud de la Casamance, le Cap Skirring est une station balnéaire d'exception. Ses plages immenses, bordées de filaos et de cocotiers, offrent un cadre idyllique pour la détente. Loin de l'agitation urbaine, c'est l'endroit parfait pour savourer la douceur de vivre casamançaise, entre farniente sur le sable et exploration des bolongs environnants.",
      gallery: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200"
      ],
      experiences: [
        { title: "Plage & Détente", desc: "Journée de repos sous les cocotiers.", duration: "Journée" },
        { title: "Quad sur la côte", desc: "Exploration des villages côtiers et des pistes de brousse.", duration: "3h" }
      ],
      highlights: ["Plages de Rêve", "Soleil Permanent", "Ambiance Paisible", "Pêche en Mer"],
      region: "Casamance"
    },
    { 
      id: 25, 
      title: "Niokolo-Koba", 
      category: "Safari & Nature", 
      image: "https://images.unsplash.com/photo-1516422317184-268504999c4d?q=80&w=1200",
      rating: 4.6,
      description: "Le plus grand parc national du Sénégal. Une réserve de biosphère classée à l'UNESCO, foyer d'une faune sauvage impressionnante.",
      detailedDescription: "Le Parc National du Niokolo-Koba est un sanctuaire sauvage traversé par le fleuve Gambie. Sur plus de 900 000 hectares, il abrite des lions, des léopards, des éléphants, des hippopotames et des centaines d'espèces d'oiseaux. Faire un safari au lever du soleil dans cette savane arborée est une aventure inoubliable au cœur du Sénégal sauvage.",
      gallery: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200",
        "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1200"
      ],
      experiences: [
        { title: "Safari 4x4", desc: "Observation des grands mammifères dans leur habitat naturel.", duration: "4h" },
        { title: "Croisière sur le fleuve", desc: "Observation des hippopotames et crocodiles.", duration: "2h" }
      ],
      highlights: ["Big Five", "Patrimoine UNESCO", "Savane Sauvage", "Fleuve Gambie"],
      region: "Tambacounda"
    },
    { 
      id: 26, 
      title: "Joal-Fadiouth", 
      category: "Culture & Coquillages", 
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200",
      rating: 4.7,
      description: "Le village natal du poète Senghor et son île aux coquillages. Un exemple unique de symbiose et de tolérance entre les cultures.",
      detailedDescription: "Fadiouth est une île artificielle entièrement constituée de coquilles de mollusques accumulées au fil des siècles. Connectée par un pont en bois au village de Joal, elle abrite un cimetière mixte où chrétiens et musulmans reposent ensemble, symbole de la tolérance sénégalaise. Les ruelles blanches de l'île et ses greniers à mil sur pilotis en font un site d'une poésie rare.",
      gallery: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200"
      ],
      experiences: [
        { title: "Visite de Fadiouth", desc: "Marche dans les ruelles pavées de coquillages.", duration: "2h" },
        { title: "Cimetière marin", desc: "Visite du lieu de repos éternel multi-confessionnel.", duration: "45min" }
      ],
      highlights: ["Île aux Coquillages", "Pont de Bois", "Tolérance Religieuse", "Maison de Senghor"],
      region: "Thiès"
    },
    { 
      id: 27, 
      title: "Mbour", 
      category: "Vie Locale", 
      image: "https://images.unsplash.com/photo-1551882547-ff43c61f3c40?q=80&w=1200",
      rating: 4.5,
      description: "Le plus grand port de pêche artisanale du pays. Vivez l'effervescence colorée de l'arrivée des pirogues au crépuscule.",
      detailedDescription: "Mbour est une ville énergique, pouls de la vie côtière sénégalaise. Son marché est un festival de couleurs et d'odeurs, mais c'est à la plage que le spectacle est le plus grandiose : des centaines de pirogues rentrent de mer en fin de journée dans une chorégraphie incroyable. C'est l'endroit idéal pour comprendre l'importance vitale de la mer pour le Sénégal.",
      gallery: [
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200"
      ],
      experiences: [
        { title: "Port de Pêche", desc: "Assistez au spectaculaire retour des pirogues.", duration: "1h30" },
        { title: "Marché Artisanal", desc: "Shopping authentique et rencontre des artisans.", duration: "2h" }
      ],
      highlights: ["Pirogues Colorées", "Marché de Poissons", "Effervescence", "Traditions"],
      region: "Thiès"
    },
    { 
      id: 28, 
      title: "Tambacounda", 
      category: "Sénégal Oriental", 
      image: "https://images.unsplash.com/photo-1516422317184-268504999c4d?q=80&w=1200",
      rating: 4.4,
      description: "Le carrefour des cultures de l'est. Découvrez un Sénégal authentique, terre de partage entre les peuples mandingues et peuls.",
      detailedDescription: "Tambacounda est la porte d'entrée du Sénégal Oriental. Ville carrefour, elle est entourée de paysages de brousse typiques et de villages traditionnels. C'est ici que l'on ressent la chaleur du cœur du pays, au rythme des marchés animés et de l'hospitalité légendaire des habitants de l'Est.",
      gallery: [
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200",
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200"
      ],
      experiences: [
        { title: "Marché Central", desc: "Immersion dans le plus grand marché de l'est.", duration: "2h" },
        { title: "Rencontre Peulh", desc: "Visite d'un campement traditionnel dans la brousse.", duration: "3h" }
      ],
      highlights: ["Carrefour Culturel", "Marché Authentique", "Hospitalité", "Porte du Parc Niokolo"],
      region: "Tambacounda"
    },
    { 
      id: 29, 
      title: "Foundiougne", 
      category: "Tranquillité", 
      image: "https://images.unsplash.com/photo-1522306877087-2433e1436e4f?q=80&w=1200",
      rating: 4.6,
      description: "Une cité fluviale paisible sur le Saloum. Le temps semble s'être arrêté dans ce petit paradis entouré d'eau.",
      detailedDescription: "Foundiougne est une ancienne escale du fleuve Saloum, accessible par un pont majestueux ou un bac plus traditionnel. C'est une ville calme, ombragée par de grands fromagers et des manguiers, où l'on vient pour le repos, la pêche et de longues balades sur les bords du fleuve, à la garde des pélicans.",
      gallery: [
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200"
      ],
      experiences: [
        { title: "Pêche à la ligne", desc: "Moment de détente sur le fleuve Saloum.", duration: "2h" },
        { title: "Coucher de soleil", desc: "Balade sur le front de mer à l'heure dorée.", duration: "1h" }
      ],
      highlights: ["Vue Fluviale", "Ancien Port", "Calme Absolu", "Pont de Foundiougne"],
      region: "Fatick"
    }
  ],

  en: [
    { 
      id: 1, 
      title: "Goree Island", 
      category: "History", 
      image: goree,
      rating: 4.8,
      description: "An island steeped in history and emotion, a UNESCO World Heritage site. Its colorful alleys and bougainvilleas hide a poignant past linked to the memory of slavery.",
      detailedDescription: "Located just a few miles off Dakar, Gorée Island is a sanctuary of memory. This small volcanic island, car-free, offers a striking contrast between the beauty of its ochre-colored colonial architecture and the gravity of its history. The House of Slaves, with its 'door of no return', remains the most powerful symbol of this era. Today, Gorée is also a vibrant art center where painters and sculptors showcase their work in the maze of flowered alleys.",
      gallery: [
        "/images/goree_1.png",
        "/images/goree_2.png",
        "/images/goree_3.png",
        "https://images.unsplash.com/photo-1629117621431-155fd160f249?q=80&w=1200"
      ],
      experiences: [
        { title: "House of Slaves", desc: "Guided tour of Africa's most iconic memory site.", duration: "1h30" },
        { title: "The Castel", desc: "A walk to the summit for a panoramic view of Dakar and the ocean.", duration: "45min" },
        { title: "Artist Workshops", desc: "Meet local sand painters and sculptors.", duration: "2h" }
      ],
      highlights: ["UNESCO Heritage", "House of Slaves", "Peaceful Atmosphere", "Memorial Site"],
      region: "Dakar"
    },
    { 
      id: 2, 
      title: "Saint-Louis", 
      category: "Colonial Elegance", 
      image: stlouis,
      rating: 4.7,
      description: "The former capital of Senegal, Saint-Louis (Ndar), is a town of character with unique colonial charm. Connected by the Faidherbe bridge, it is the cradle of jazz and Senegalese elegance.",
      detailedDescription: "Saint-Louis, UNESCO World Heritage site, is a town where time seems to have stood still. Located at the mouth of the Senegal River, it se divided between the historic island with colorful colonial houses and the fishing district of Guet Ndar, vibrant with activity. The famous Faidherbe Bridge, designed by the Eiffel workshops, links the island to the mainland. It's a town of culture, famous for its International Jazz Festival and its 'Signares', symbols of Saint-Louis elegance.",
      gallery: [
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200",
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1200",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
        "https://images.unsplash.com/photo-1563290231-698f1266299b?q=80&w=1200"
      ],
      experiences: [
        { title: "Carriage Tour", desc: "Discover the island's history at a horse's pace.", duration: "1h" },
        { title: "Sunset Pirogue", desc: "A boat ride on the Senegal River as the sun sets.", duration: "1h30" },
        { title: "Guet Ndar", desc: "Immersion in the effervescence of the fishing district.", duration: "2h" }
      ],
      highlights: ["Faidherbe Bridge", "Colonial Architecture", "Jazz Festival", "Guet Ndar District"],
      region: "Saint-Louis"
    },
    { 
      id: 10, 
      title: "Pink Lake", 
      category: "Must-See", 
      image: lacrose,
      rating: 4.9,
      description: "Famous for its unique pink color due to algae, Lake Retba is a spectacular site located between dunes and the ocean. This is where the mythical Paris-Dakar rally ended.",
      detailedDescription: "Lake Retba, better known as the Pink Lake, is a unique geological wonder. Its high salinity and the presence of a specific alga give it shades ranging from purple to bright pink under the sun. You'll see salt harvesters extracting salt manually from the bottom. Around it, the giant white sand dunes offer a perfect playground for 4x4 or quad adventures, with the ocean right behind.",
      gallery: [
        "/images/goree_1.png",
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200",
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200",
        "https://images.unsplash.com/photo-1629130761565-d064fc674697?q=80&w=1200"
      ],
      experiences: [
        { title: "Floating Swim", desc: "Unique experience where you float effortlessly due to salt.", duration: "45min" },
        { title: "Dune Rally", desc: "4x4 circuit on the Paris-Dakar trail.", duration: "2h" },
        { title: "Salt Harvest", desc: "Meet and exchange with the lake workers.", duration: "1h" }
      ],
      highlights: ["Pink Waters", "High Salinity", "White Dunes", "Rally Circuit"],
      region: "Dakar"
    },
    { 
      id: 11, 
      title: "Lompoul Desert", 
      category: "Adventure", 
      image: lompoul,
      rating: 4.8,
      description: "A small desert of magnificent ochre dunes. Live a unique Saharan experience in the heart of Senegal with a night under nomadic tents (khaïmas).",
      detailedDescription: "Lompoul is an enchanted oasis, a Saharan pearl isolated between the coast and the inland. Its ochre sand dunes, sculpted by the wind, stretch as far as the eye can see. Here, adventure starts with a 4x4 transfer to charming camps. In the evening, under an incredibly pure starry sky, the desert comes alive with percussion and traditional mint tea. A total disconnect guaranteed.",
      gallery: [
        "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1200",
        "https://images.unsplash.com/photo-1509316785289-025f5d846b35?q=80&w=1200",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200",
        "https://images.unsplash.com/photo-1504198453319-5ce911baf2ea?q=80&w=1200"
      ],
      experiences: [
        { title: "Sunset Camel Ride", desc: "A ride on the dune crests.", duration: "1h" },
        { title: "Night under Tents", desc: "Sleep in comfortable nomadic tents in the desert.", duration: "1 night" },
        { title: "Sand Surfing", desc: "Slide down the steep slopes of the golden dunes.", duration: "1h" }
      ],
      highlights: ["Ochre Dunes", "Nomadic Tents", "Starry Sky", "Absolute Calm"],
      region: "Louga"
    },
    { 
      id: 3, 
      title: "Saly Portudal", 
      category: "Relaxation", 
      image: saly,
      rating: 4.6,
      description: "The flagship seaside resort of the Petite Côte. Saly offers a perfect blend of fine sand beaches, water sports, and entertainment for absolute relaxation.",
      detailedDescription: "Saly Portudal is the beating heart of seaside tourism in Senegal. This former fishing town has transformed into a dynamic resort lined with coconut trees. Its sheltered beaches are ideal for swimming and practicing jet-skiing, parasailing, or deep-sea fishing. In the evening, the town comes alive with its restaurants, shops, and casinos, offering a festive and friendly atmosphere under the gentle coastal climate.",
      gallery: [
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800"
      ],
      experiences: [
         { title: "Jet Ski", desc: "Adrenaline rush on the calm coastal waters.", duration: "30min" },
         { title: "Sport Fishing", desc: "Sea outing to try and catch a swordfish.", duration: "4h" }
      ],
      highlights: ["Sandy Beaches", "Water Sports", "Nightlife", "Luxury Hotels"],
      region: "Thiès"
    },
    { 
      id: 4, 
      title: "Somone", 
      category: "Lagoon & Nature", 
      image: mangrove,
      rating: 4.8,
      description: "A biodiversity haven where the lagoon meets the ocean. Somone is famous for its natural biosphere reserve and its relaxing tranquility.",
      detailedDescription: "The Somone lagoon is a true sanctuary of peace. Between intertwined mangroves and fine sandbanks, it houses a multitude of migratory birds like pelicans and herons. The pirogue ride through the bolongs is a meditative experience. The village itself, with its waterfront restaurants, offers an unforgettable gourmet break facing the ballet of waves and birds.",
      gallery: [
        "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=800",
        "https://images.unsplash.com/photo-1522306877087-2433e1436e4f?q=80&w=800"
      ],
      experiences: [
        { title: "Pirogue Ride", desc: "Bird watching in the mangrove.", duration: "1h30" },
        { title: "Oyster Tasting", desc: "Taste grilled oysters on the lagoon shores.", duration: "1h" }
      ],
      highlights: ["Nature Reserve", "Mangrove", "Migratory Birds", "Total Rest"],
      region: "Thiès"
    },
    { 
      id: 5, 
      title: "Toubab Dialaw", 
      category: "Art & Cliffs", 
      image: nature,
      rating: 4.7,
      description: "A village of artists nestled between ochre cliffs and the sea. Famous for its dance school and organic architecture, it's the ideal place for creation.",
      detailedDescription: "Toubab Dialaw is a rare gem located where the red earth cliffs plunge into the Atlantic. This village has preserved an extraordinary bohemian and artistic soul. Here you find the Sobo Badè Space, a cultural center with a dreamlike architecture made of stone, iron, and shells. Dance, music, and visual arts enthusiasts come from the whole world to recharge. Small isolated coves at the foot of the cliffs offer spectacular swimming moments.",
      gallery: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800"
      ],
      experiences: [
        { title: "Dance Class", desc: "Introduction to African rhythms at the Jant-Bi dance school.", duration: "2h" },
        { title: "Pottery Workshop", desc: "Create your own work with local artisans.", duration: "2h" }
      ],
      highlights: ["Sobo Badè Center", "Red Cliffs", "Secret Coves", "Bohemian Vibe"],
      region: "Thiès"
    },
    { 
      id: 6, 
      title: "Ngor Island", 
      category: "Surf & Island", 
      image: goree,
      rating: 4.6,
      description: "A paradise for surfers and peace lovers ten minutes from Dakar. Its car-free alleys and mythical wave make it a privileged spot.",
      detailedDescription: "Facing the Almadies point, Ngor Island is a maze of flowers and artists' houses. Accessible by traditional pirogue, its crystal clear waters are a haven of peace far from the city's hustle. The northern coast is world-famous among surfers for its 'Ngor Right' wave. It's a chic and relaxed stopover where you enjoy grilled fish with your feet in the sand watching the pirogues pass.",
      gallery: [
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800",
        "https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?q=80&w=800"
      ],
      experiences: [
        { title: "Surf Session", desc: "Face the famous Ngor wave with a local coach.", duration: "1h30" },
        { title: "Pirogue Crossing", desc: "Experience the typical journey between the mainland and the island.", duration: "10min" }
      ],
      highlights: ["World Surf", "Island Serenity", "Grilled Fish", "Art Workshops"],
      region: "Dakar"
    },
    { 
      id: 12, 
      title: "Saloum Delta", 
      category: "Biodiversity", 
      image: mangrove,
      rating: 4.9,
      description: "A labyrinth of bolongs and mangroves classified by UNESCO. Discover an authentic and wild Senegal between land and water.",
      detailedDescription: "Sine-Saloum is one of the most beautiful regions in Senegal. This delta formed by two rivers meeting the ocean is an immense national park. By pirogue, you navigate between hundreds of mangrove islands, home to thousands of birds and small monkeys. Fishing villages live by the rhythm of the tides. The shell cemetery islands, like in Fadiouth, testify to a millenary culture and exemplary religious cohabitation.",
      gallery: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800"
      ],
      experiences: [
        { title: "Bolong Safari", desc: "Penetrate the heart of the impenetrable mangroves.", duration: "3h" },
        { title: "Ecolodge Stay", desc: "Stay in total immersion in sustainable architecture.", duration: "1 night" }
      ],
      highlights: ["Mystic Bolongs", "UNESCO Reserve", "Traditional Fishing", "Bird Islands"],
      region: "Fatick"
    },
    { 
      id: 14, 
      title: "Djoudj Bird Park", 
      category: "Ornithology", 
      image: djoudj,
      rating: 4.8,
      description: "The third largest bird sanctuary in the world. A grandiose natural spectacle where millions of migratory birds come to winter.",
      detailedDescription: "Located sixty kilometers north of Saint-Louis, the Djoudj National Bird Sanctuary is a miracle of nature. Each year, over three million birds from seventy different species make a stop here. The pirogue crossing is a magical immersion among pelicans, flamingos, cormorants, and herons. You also encounter crocodiles and warthogs. It's one of the few places in the world where you can see the pelicans' nesting site so closely.",
      gallery: [
        "https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=800",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800"
      ],
      experiences: [
        { title: "Birdwatching Expedition", desc: "Observe the pelican colonies in full nesting.", duration: "2h" },
        { title: "Crocodile Trail", desc: "Observe the reptiles sunbathing by the river.", duration: "1h30" }
      ],
      highlights: ["Pelican Colonies", "Pink Flamingos", "UNESCO Heritage", "World Sanctuary"],
      region: "Saint-Louis"
    },
    { 
      id: 20, 
      title: "Renaissance Monument", 
      category: "Culture & View", 
      image: monument,
      rating: 4.7,
      description: "Taller than the Statue of Liberty, this majestic work dominates Dakar. It symbolizes an Africa rising towards its destiny.",
      detailedDescription: "Located on one of the Mamelles hills, the African Renaissance Monument is an imposing 52-meter bronze structure. Inaugurated in 2010, it offers some of the most spectacular views of the Cap-Vert peninsula and the Atlantic Ocean. Climbing the steps to the foot of the couple and child is a physical challenge rewarded by a breathtaking panorama, especially at sunset when the light gilds the bronze.",
      gallery: [
        "https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=1200",
        "https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=1200"
      ],
      experiences: [
        { title: "Guided tour", desc: "Discover the internal symbolism and history of the monument.", duration: "1h" },
        { title: "Sunset", desc: "The best time for panoramic photos of Dakar.", duration: "1h" }
      ],
      highlights: ["Panoramic View", "African Symbol", "Architectural Feat", "The Mamelles"],
      region: "Dakar"
    },
    { 
      id: 21, 
      title: "Hann Park", 
      category: "Nature & Leisure", 
      image: parcHann,
      rating: 4.5,
      description: "The green lung of the capital. A botanical and zoological garden ideal for a refreshing nature break in the heart of Dakar.",
      detailedDescription: "The Hann Forest and Zoo Park is a 60-hectare oasis of freshness. Created in 1903, it houses a great diversity of plant species and a zoo where you can observe Senegal's lions, hyenas, gazelles, and many birds. It's a favorite meeting place for Dakar families for picnics and walks in the shade of large eucalyptus and kapok trees.",
      gallery: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200"
      ],
      experiences: [
        { title: "Nature picnic", desc: "Lunch under the shade of century-old trees.", duration: "2h" },
        { title: "Zoo Tour", desc: "Meet the wild fauna of Senegal.", duration: "1h30" }
      ],
      highlights: ["Biodiversity", "Urban Forest", "Zoo", "Calm"],
      region: "Dakar"
    },
    { 
      id: 22, 
      title: "Casamance (Ziguinchor)", 
      category: "Authenticity", 
      image: casamanceAsset,
      rating: 4.9,
      description: "The greenest and most lush region of the country. Between rice fields, palm forests, and Diola culture, Casamance will transport you elsewhere.",
      detailedDescription: "Ziguinchor is the gateway to Casamance, a unique region separated from the north by Gambia. Here, the pace slows down. The impluvium houses, the traditional mask dances, and the legendary kindness of the Diola people make this trip a deep cultural immersion. The landscapes of flooded rice fields and bolongs lined with giant silk-cotton trees offer incomparable scenes of wild beauty.",
      gallery: [
        "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200",
        "https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?q=80&w=1200"
      ],
      experiences: [
        { title: "Diola Culture", desc: "Visit villages and discover local traditions.", duration: "4h" },
        { title: "River Pirogue", desc: "Silent navigation between the Casamance islands.", duration: "3h" }
      ],
      highlights: ["Lush Vegetation", "Diola Culture", "Rice Fields", "Casamance Islands"],
      region: "Casamance"
    },
    { 
      id: 23, 
      title: "Dindéfelo Falls", 
      category: "Adventure", 
      image: "https://images.unsplash.com/photo-1433006346545-5107630989d9?q=80&w=1200",
      rating: 4.9,
      description: "A spectacular 100-meter-high waterfall nestled in the mountains of Kédougou. A hidden paradise for hikers.",
      detailedDescription: "Near the Guinean border, in the Kédougou region, the Dindéfelo falls are a natural wonder hidden in a steep gorge. After a hike through dense forest, the sound of water guides you to this silver curtain plunging into a pool of clear, cool water. It's one of the few places in Senegal where you can experience the mountains and swim at the foot of a dizzying waterfall.",
      gallery: [
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200",
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200"
      ],
      experiences: [
        { title: "Hiking", desc: "Walk in the community nature reserve.", duration: "2h" },
        { title: "Swimming", desc: "Refreshing splash in the pool at the foot of the waterfall.", duration: "1h" }
      ],
      highlights: ["100m Waterfall", "Mountains", "Hiking", "Fresh Waters"],
      region: "Kédougou"
    },
    { 
      id: 24, 
      title: "Cap Skirring", 
      category: "Tropical Beach", 
      image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200",
      rating: 4.8,
      description: "One of the most beautiful shorelines in West Africa. Coconut trees, fine sand, and permanent sun make Cap Skirring a dream destination.",
      detailedDescription: "Located at the southern tip of Casamance, Cap Skirring is an exceptional seaside resort. Its immense beaches, bordered by casuarina and coconut trees, offer an idyllic setting for relaxation. Far from the urban hustle, it's the perfect place to savor the gentle life of Casamance, between lounging on the sand and exploring the surrounding bolongs.",
      gallery: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200"
      ],
      experiences: [
        { title: "Beach & Relaxation", desc: "Day of rest under the coconut trees.", duration: "Day" },
        { title: "Coastal Quad", desc: "Exploration of coastal villages and bush tracks.", duration: "3h" }
      ],
      highlights: ["Dream Beaches", "Permanent Sun", "Peaceful Vibe", "Sea Fishing"],
      region: "Casamance"
    },
    { 
      id: 25, 
      title: "Niokolo-Koba", 
      category: "Safari & Nature", 
      image: "https://images.unsplash.com/photo-1516422317184-268504999c4d?q=80&w=1200",
      rating: 4.6,
      description: "The largest national park in Senegal. A UNESCO Biosphere Reserve, home to impressive wildlife.",
      detailedDescription: "Niokolo-Koba National Park is a wild sanctuary crossed by the Gambia River. Over 900,000 hectares, it hosts lions, leopards, elephants, hippos, and hundreds of bird species. A sunrise safari in this savanna is an unforgettable adventure in heart of wild Senegal.",
      gallery: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200",
        "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1200"
      ],
      experiences: [
        { title: "4x4 Safari", desc: "Observation of large mammals in their natural habitat.", duration: "4h" },
        { title: "River Cruise", desc: "Observation of hippos and crocodiles.", duration: "2h" }
      ],
      highlights: ["Big Five", "UNESCO Heritage", "Wild Savanna", "Gambia River"],
      region: "Tambacounda"
    },
    { 
      id: 26, 
      title: "Joal-Fadiouth", 
      category: "Culture & Shells", 
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200",
      rating: 4.7,
      description: "Founder Senghor's birthplace and its shell island. A unique example of symbiosis and tolerance between cultures.",
      detailedDescription: "Fadiouth is an artificial island made entirely of mollusk shells accumulated over centuries. Linked by a wooden bridge to Joal, it houses a mixed cemetery where Christians and Muslims rest together, a symbol of Senegalese tolerance. The island's white alleys and stilt granaries make it a site of rare poetry.",
      gallery: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200"
      ],
      experiences: [
        { title: "Fadiouth Visit", desc: "Walk in the shell-paved alleys.", duration: "2h" },
        { title: "Marine Cemetery", desc: "Visit the multi-faith eternal resting place.", duration: "45min" }
      ],
      highlights: ["Shell Island", "Wooden Bridge", "Religious Tolerance", "Senghor's House"],
      region: "Thiès"
    },
    { 
      id: 27, 
      title: "Mbour", 
      category: "Local Life", 
      image: "https://images.unsplash.com/photo-1551882547-ff43c61f3c40?q=80&w=1200",
      rating: 4.5,
      description: "The country's largest artisanal fishing port. Experience the colorful bustle of pirogues returning at twilight.",
      detailedDescription: "Mbour is an energetic town, the pulse of Senegalese coastal life. Its market is a carnival of color and scent, but the beach show is grandest: hundreds of pirogues return at day's end in an incredible choreography. It's the perfect place to understand the sea's vital importance for Senegal.",
      gallery: [
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200"
      ],
      experiences: [
        { title: "Fishing Port", desc: "Witness the spectacular return of the pirogues.", duration: "1h30" },
        { title: "Artisan Market", desc: "Authentic shopping and meeting artisans.", duration: "2h" }
      ],
      highlights: ["Colorful Pirogues", "Fish Market", "Bustle", "Traditions"],
      region: "Thiès"
    },
    { 
      id: 28, 
      title: "Tambacounda", 
      category: "Eastern Senegal", 
      image: "https://images.unsplash.com/photo-1516422317184-268504999c4d?q=80&w=1200",
      rating: 4.4,
      description: "The cultural hub of the east. Discover authentic Senegal, a land of sharing between Manding and Fulani peoples.",
      detailedDescription: "Tambacounda is the gateway to Eastern Senegal. A hub city, it's surrounded by typical bush landscapes and traditional villages. It's here you feel the heart of the country, at the rhythm of the bustling markets and legendary eastern hospitality.",
      gallery: [
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200",
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200"
      ],
      experiences: [
        { title: "Central Market", desc: "Immersion in the east's largest market.", duration: "2h" },
        { title: "Fulani Meeting", desc: "Visit a traditional bush camp.", duration: "3h" }
      ],
      highlights: ["Cultural Hub", "Authentic Market", "Hospitality", "Niokolo Park Gateway"],
      region: "Tambacounda"
    },
    { 
      id: 29, 
      title: "Foundiougne", 
      category: "Tranquility", 
      image: "https://images.unsplash.com/photo-1522306877087-2433e1436e4f?q=80&w=1200",
      rating: 4.6,
      description: "A peaceful river city on the Saloum. Time seems to have stopped in this little paradise surrounded by water.",
      detailedDescription: "Foundiougne is a former river stop on the Saloum, accessible by a majestic bridge or a more traditional ferry. It's a quiet town shaded by large silk-cotton and mango trees, where people come for rest, fishing, and long walks on the river banks, watched by pelicans.",
      gallery: [
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200"
      ],
      experiences: [
        { title: "Rod Fishing", desc: "Relaxing moment on the Saloum River.", duration: "2h" },
        { title: "Sunset", desc: "Golden hour walk on the waterfront.", duration: "1h" }
      ],
      highlights: ["River View", "Old Port", "Absolute Calm", "Foundiougne Bridge"],
      region: "Fatick"
    }
  ]
};
