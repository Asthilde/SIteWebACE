import { Injectable } from '@angular/core';
import { SectionPresentation } from './section-presentation';
import { AvisClient } from './avis-client';
import { OffrePresentation } from './offre-presentation';
import { Experience } from './experience';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  constructor() { }

  listeSections: SectionPresentation[] = [
    {
      titre: "Ma philosophie",
      image: "../assets/philosophie.jpg",
      texte: "En tant qu’entraîneur, je suis persuadé que le meilleur moyen de progresser et d’atteindre ses objectifs est une somme de facteurs : une connaissance globale de la performance (physiologie, anatomie, biomécanique…) et une écoute permanente des besoins et une adaptation de la planification. Pour moi, l’athlète doit être au centre des décisions qui concernent la performance. Les axes de développement de la performance doivent être décidés en concertation entre l’athlète et l’entraîneur !",
      lienPage: "offres"
    },
    {
      titre: "Qui je suis ?",
      image: "../assets/qui-suis-je.png",
      texte: "Je m’appelle Lucas JANY, ayant pratiqué beaucoup de sports différents pendant mon enfance (gym, équitation, escrime, tir à l’arc, handball…), je n’ai pour autant jamais lâché mon vélo en parallèle. Passionné de cyclisme depuis 2014, j’ai découvert le triathlon en 2017 avant de m’attaquer à la compétition en cyclisme sur route au cours de la saison 2019-2020. Depuis lors, je jongle entre des épreuves de triathlon et des saisons plus ou moins chargées en cyclisme. Après un bac S, je me suis orienté vers une licence STAPS, Entraînement Sportif afin d’évoluer dans un milieu qui m’est cher !",
      lienPage: "qui-suis-je"
    }
  ]

  listeTemoignages: AvisClient[] = [
    {
      auteur: "Noémie",
      age: 23,
      pratique:"Triathlon et Cyclisme sur route en compétition depuis 2 ans",
      texte: "Lucas est un entraîneur qui sait être attentif et à l'écoute des besoins de ses athlètes. Je n'ai cessé de progresser et d'être prête pour mes objectifs depuis que je suis suivie par lui. Lucas est un entraîneur idéal autant pour les athlètes cherchant seulement à avoir un plan d'entraînement pour être prêt pour un/plusieurs objectifs que pour ceux cherchant à comprendre leurs défauts/qualités et à dépasser leurs limites au travers des entraînements qu'il prévoit. Il est une source de motivation sans faille et d'un naturel plutôt préservateur, ce qui m'a permis de rebondir après quelques déceptions et de ne plus me blesser depuis le début de notre collaboration.",
      image: "../assets/Noemie.jpg"
    },
    {
      auteur: "Patrick",
      age: 62,
      pratique:"VTT, ski de fond et course à pied pour le loisir depuis plusieurs années",
      texte: "Avec Lucas j'ai pu réussir à me préparer sereinement pour ma première course en course à pied et ma première cyclosportive alors que je n'avais quasiment jamais couru et fait du vélo de route de ma vie ! Il a su adapter mon plan à mon emploi du temps très chargé et j'ai vu mon niveau progresser de semaines en semaines !",
      image: "../assets/Patrick.jpg"
    }
  ]

  listeOffres: OffrePresentation[] = [
    {
      titre: "Offre Découverte",
      resume: "Elle s’adresse aux sportifs débutants qui ont pour projet de découvrir la pratique des sports d’endurance. Elle est un premier pas pour découvrir les effets du coaching avant de se lancer dans des objectifs plus élevés !",
      public: "Sportifs débutants qui ont pour projet de découvrir la pratique des sports d’endurance.",
      details: "L'offre inclut l'envoi d'un questionnaire personnel, une définition commune de vos objectifs et paramètres pour les atteindre, un plan d'entraînement communiqué une fois par mois via la plateforme d'entraînement Nolio, un suivi par mail/WhatsApp une fois par semaine et un contact téléphonique une fois par mois pour adapter le plan.",
      tarifs: [70, 200, 380, 750]
  },
  {
      titre: "Offre Premium",
      resume:  "Elle vise les compétiteurs qui ont pour objectif de progresser de manière régulière et souhaitant avoir un retour fréquent sur leur pratique mais qui ne font pas de la performance une priorité. Elle est idéale si vous souhaitez avoir un entrainement structuré et régulier mais que le sport n’est pas votre unique priorité !",
      public: "Compétiteurs ayant pour objectif de progresser sans que la performance ne soit leur priorité.",
      details: "L'offre inclut l'envoi d'un questionnaire personnel, une définition commune de vos objectifs et paramètres pour les atteindre, un plan d'entraînement communiqué une fois par mois via la plateforme d'entraînement Nolio, un suivi par mail/WhatsApp quotidien, un contact téléphonique une fois par semaine, une analyse hebdomadaire des données d'entraînement qui peut entraîner des modifications du plan d'entraînement chaque mois.",
      tarifs: [99, 285, 540, 1000]
  },
  {
      titre: "Offre Expert",
      resume:  "Elle s’oriente vers un public de sportifs aguerris qui ont pour objectif de mettre tout en œuvre pour la performance. Que ce soit pour atteindre un objectif personnel ou dans le but de performer sur des courses et d'aller chercher les victoires lors des courses. Je propose une analyse globale de la performance et la mise en place de tous les facteurs pour l’amélioration de la performance.",
      public: "Sportifs recherchant l'amélioration et l'optimisation de leurs performances sur les compétitions.",
      details: "Cette offre peut après un accord commun amener à un suivi personnel lors des objectifs majeurs de la saison. Elle inclut l'envoi d'un questionnaire personnel, une rencontre pour définir vos objectifs et moyens pour les atteindre, un plan d'entraînement communiqué chaque semaine via la plateforme d'entraînement Nolio, un suivi par mail/WhatsApp à volonté, un contact téléphonique régulier selon les besoins, une analyse quotidienne des données d'entraînement qui peut entraîner des modifications du plan d'entraînement en fonction des ressentis et de votre emploi du temps et un suivi en présentiel lors de vos principaux objectifs (à définir).",
      tarifs: [119, 350, 640, 1299]
  }
  ]

  offreSpeciale: OffrePresentation = {
      titre: "Offre spéciale",
      resume:  "Cette offre s’adresse aux clubs, structures associatives ou privées qui souhaiteraient un accompagnement spécifique (stage, encadrement à l’année, suivi d’une équipe ou d’un team…).",
      public: "Clubs, associations ou structures privées souhaitant un accompagnement personnalisé",
      details: "Veuillez me contacter pour que nous définissions ensemble vos besoins et que je vous fasse parvenir un devis adapté.",
      tarifs: []
  }

  listeOutils: SectionPresentation[] = [
    {
      titre: "Nolio",
      image: "../assets/nolio_logo.png",
      texte: "Afin de communiquer au mieux avec mes athlètes, j’utilise une plateforme spécialisée, développée par 2 ingénieurs grenoblois et nommée “Nolio”. Cette plateforme me permet de communiquer efficacement avec mes athlètes pour tout ce qui concerne l’entraînement."
  },
  {
      titre: "WhatsApp",
      image: "../assets/WhatsApp_logo.png",
      texte: "J'utilise principalement cette application pour que mes athlètes puissent me contacter facilement et régulièrement dans le cadre du suivi quotidien. Egalement, elle me sert à faire des entretiens téléphoniques/vidéos pour toute personne souhaitant me contacter."
  }
  ]

  experiencePro: Experience = {
      titre: "Mon expérience professionnelle",
      presentation: [
          "2019 - 2021 : entraîneur Ecole Française de Triathlon - Aquatique Club Olympide",
          "2020 - 2021 : entraîneur stagiaire - Cyclisme Seyssinet Seyssins",
          "2021 - aujourd’hui : Conseiller Technique Départemental - Comité Isère Cyclisme FFC",
          "2021 - aujourd’hui : Fondateur, Directeur et Entraîneur - Alpes Cyclisme Entraînement"
      ],
      presentation_details: {
      2 : ["Coordination et Entraînement de la section Sport - Études du comité (Isère Cyclisme Études)",
      "Accompagnement des clubs du comité tout au long de la saison",
      "Organisation et Gestion de stages de regroupement et d’entraînement",
      "Sélection et Direction Sportive sur les Coupes de France U17 et sur des courses Fédérales et UCI en U19 et Féminines"
      ],
      3 : ["Accompagnement d’athlètes en cyclisme, triathlon et course à pied"] 
      }
     ,
      titre_liste: "Résultats marquants",
      faits: [
          "🥉 Classique des Alpes UCI 2022", 
          "🏆🏆🥈 Coupe de France U17 2024", 
          "🥉 Finale de Coupe de France U17 2022",
          "🥈🥈🥉places aux championnats de France de Cyclisme sur piste U17",
          "🏆De nombreuses victoires et places d’honneurs sur les fédérales U19 et les courses régionales (PACA, AURA…)",
          "🥈Duathlon du Tricastin 2023",
          "🥈GP d’Oyeu UFOLEP féminin 2023",
          "🥉 GP de la Tour du Pin FFC féminin ACCESS 2023",
          "6ème place Championnat de France E-Cycling FFC 2023"
      ]
  }

  experiencePerso: Experience = {
    titre: "Mon expérience d'athlète",
    faits: [
        "2018 : 4ème Run & Bike de Guilherand-Grange",
        "       7ème Championnat AURA Run & Bike",
        "2019 : 44ème Sélectif France U19",
        "       🥈 Triathlon International des Gorges de l’Ardèche U19",
        "       6ème Gentleman de Culoz",
        "2021 : 24ème GP de Culoz FFC",
        "       81ème Triathlon VercorsMan XL",
        "       20ème Triathlon S de Bègles",
        "2023 : 5ème Grimpée de Montchardon",
        "Participation à des compétitions FFC, FFTRI, FFA, FFS"
    ],
    image: "../assets/athlete.jpg"
  }

  getSections() : SectionPresentation[] {
    return this.listeSections;
  }

  getSectionByTitle(titre:string) : SectionPresentation | undefined {
    return this.listeSections.find(section => section.titre === titre);
  }

  getTemoignages() : AvisClient[] {
    return this.listeTemoignages;
  }

  getOffres() : OffrePresentation[] {
    return this.listeOffres;
  }

  getOffreSpeciale() : OffrePresentation {
    return this.offreSpeciale;
  }

  getOutils() : SectionPresentation[] {
    return this.listeOutils;
  }

  getExpePro() : Experience {
    return this.experiencePro;
  }

  getExpePerso() : Experience {
    return this.experiencePerso;
  }
}
