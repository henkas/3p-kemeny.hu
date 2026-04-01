export type Locale = "hu" | "en" | "de";

export type ServiceItem = { title: string; text: string };

export type ReferenceItem = {
  name: string;
  type: string;
  featured?: boolean;
};

export type LocaleContent = {
  lang: Locale;
  localeLabel: string;
  pageTitle: string;
  metaDescription: string;
  switcherLabel: string;
  nav: {
    about: string;
    services: string;
    references: string;
    gallery: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    phoneCta: string;
    emailCta: string;
    galleryCta: string;
  };
  about: {
    title: string;
    lead: string;
    body: string[];
    trustItems: string[];
    highlights: Array<{ label: string; value: string }>;
  };
  services: {
    title: string;
    intro: string;
    coreLabel: string;
    additionalLabel: string;
    core: ServiceItem[];
    additional: ServiceItem[];
  };
  references: {
    title: string;
    intro: string;
    featuredLabel: string;
    germany: string;
    hungary: string;
    itemsGermany: ReferenceItem[];
    itemsHungary: ReferenceItem[];
  };
  gallery: {
    title: string;
    intro: string;
    cta: string;
  };
  contact: {
    title: string;
    intro: string;
    phoneLabel: string;
    emailLabel: string;
    serviceAreaLabel: string;
    serviceAreaValue: string;
    languagesLabel: string;
    languagesValue: string;
  };
  footer: string;
};

export const contactInfo = {
  phone: "+36 20 410 2395",
  phoneTel: "tel:+36204102395",
  email: "info@3p-kemeny.hu",
  emailHref: "mailto:info@3p-kemeny.hu",
} as const;

export const galleryImages = [
  "gallery-01.jpg",
  "gallery-02.jpg",
  "gallery-03.jpg",
  "gallery-04.jpg",
  "gallery-05.jpg",
  "gallery-06.jpg",
  "gallery-07.jpg",
  "gallery-08.jpg",
] as const;

const referenceGermany: ReferenceItem[] = [
  { name: "Viessmann Allendorf", type: "Industrial", featured: true },
  { name: "Mercedes Kecskemet", type: "Factory", featured: true },
  { name: "Mercedes Sindelfingen", type: "Factory" },
  { name: "BMW Landshut", type: "Factory", featured: true },
  { name: "BMW Dingolfing", type: "Factory" },
  { name: "Airbus Immenstadt", type: "Industrial", featured: true },
  { name: "KfW Bank Frankfurt", type: "Bank", featured: true },
  { name: "Stuttgart Kriminalpolizei", type: "Police" },
  { name: "Tubingen Polizei", type: "Police" },
  { name: "Karlsruhe Landespolizei", type: "Police" },
  { name: "Bad Bergzabern Landespolizei", type: "Police" },
  { name: "Arburg Lossburg", type: "Industrial" },
  { name: "Freiburg Neues Rathaus", type: "Municipal" },
  { name: "Trumpf Laser Gerlingen and Sulgen", type: "Industrial", featured: true },
  { name: "VW plant Zwickau", type: "Factory", featured: true },
  { name: "Rapunzel Legau", type: "Industrial" },
  { name: "Reutlingen Hospital", type: "Healthcare" },
  { name: "Emmendingen Hospital", type: "Healthcare" },
];

const referenceHungary: ReferenceItem[] = [
  { name: "Dunaujvaros Malt Plant", type: "Industrial" },
  { name: "Vajda Paper Dunaujvaros", type: "Industrial" },
  { name: "Capital Square Budapest", type: "Commercial" },
  { name: "Budapest Business Center", type: "Commercial" },
  { name: "Madach Center", type: "Commercial" },
  { name: "Blaha Center", type: "Commercial" },
  { name: "Oxigen Wellness", type: "Wellness" },
  { name: "Kometa Kaposvar", type: "Industrial" },
  { name: "Szombathely Police", type: "Police" },
  { name: "Kalocsa Hospital", type: "Healthcare" },
  { name: "Tapioszele Transformer Plant", type: "Industrial" },
  { name: "Egis Pharmaceutical Budapest", type: "Industrial", featured: true },
];

export const locales: Record<Locale, LocaleContent> = {
  hu: {
    lang: "hu",
    localeLabel: "Magyar",
    pageTitle: "3P Kemeny | Kemenyszereles es kemenyepites Ajka es kornyeken",
    metaDescription:
      "Professzionalis kemenyszereles, beleles es ipari tapasztalat Ajka es kornyeken. Savallo rendszerek, onhordo kemenyek, nemetorszagi referenciak.",
    switcherLabel: "Nyelv",
    nav: {
      about: "Rolunk",
      services: "Szolgaltatasok",
      references: "Referenciak",
      gallery: "Galeria",
      contact: "Kapcsolat",
    },
    hero: {
      eyebrow: "3P Kemeny • Ajka es kornyeke",
      title: "Kemenyrendszerek, amikre hosszu tavon is szamithat",
      text: "Ipari es lakossagi kemenyepites, beleles es korszerusites — 15 ev tapasztalattal, nemetorszagi projekthatterrel.",
      phoneCta: "Hivjon most",
      emailCta: "Irjon emailt",
      galleryCta: "Munkaink",
    },
    about: {
      title: "Rolunk",
      lead: "Papp Robert vagyok, a 3P Kemeny alapitoja. Kemenyszerelessel foglalkozom tobb mint 15 eve.",
      body: [
        "Palyamat Jeremias rendszerekkel kezdtem, ami eros muszaki alapot adott a savallo es szigetelt kemenyrendszerek kivitelezesehez.",
        "Az elso 10 evemet Nemetorszagban toltottem, ahol csaladi hazaktol nagy ipari rendszerekig szereztam tapasztalatot. Ma Ajkan es kornyeken dolgozom egyeni vallalkozokent, kozvetlen egyeztetessel es szemelyes felelossegvalallassal.",
      ],
      trustItems: [
        "15+ ev szerelesi tapasztalat",
        "10 ev nemetorszagi projektmunka",
        "Jeremias rendszereken szerzett alap",
        "Ajka es kornyeke gyors elerhetoseggel",
      ],
      highlights: [
        { label: "Mukodesi terulet", value: "Ajka es kornyeke" },
        { label: "Szakterulet", value: "Savallo es szigetelt kemenyrendszerek" },
        { label: "Projektek", value: "Lakoepulet, ipari, kereskedelmi" },
      ],
    },
    services: {
      title: "Szolgaltatasok",
      intro: "Komplex kemenyes megoldasokat vegzunk felmerestol a kivitelezesig.",
      coreLabel: "Fo szolgaltatasok",
      additionalLabel: "Tovabbi munkak",
      core: [
        {
          title: "Kemeny beleles",
          text: "Regi belesek csereje, savallo rendszer kiepitese es korszerusites megbizhato anyagokkal.",
        },
        {
          title: "Kulso szigetelt kemeny",
          text: "Nemesacel, kulso fali kialakitas stabil rogzitessel es esztetikus megjelenessel.",
        },
        {
          title: "Onhordo kemenyek",
          text: "Onhordo szerkezetek allitasa es szerelese ipari szemleletu kivitelezessel.",
        },
      ],
      additional: [
        {
          title: "Keramia beles csere",
          text: "Serult keramia elemek bontasa es korszeru savallo rendszerre valo atallitas.",
        },
        {
          title: "Bekoto vezetek csere",
          text: "Biztonsagos csatlakozasok kialakitasa uj vagy korszerusitett futesi rendszerekhez.",
        },
        {
          title: "Kandallo bekotes",
          text: "Kandallokhoz igazodott bekotesek, funkcio es megjelenes egyensulyaval.",
        },
        {
          title: "Kemenymagasitas",
          text: "Huzasjavitas es szabalyos kivezetes kialakitasa a helyi adottsagokhoz igazodva.",
        },
        {
          title: "Kemenyfej visszabontas",
          text: "Serult vagy atalakitasra szorulo kemenyfejek biztonsagos visszabontasa.",
        },
        {
          title: "Koncentrikus rendszerek",
          text: "Modern futesi rendszerekhez illesztett koncentrikus kemenyek telepitese.",
        },
      ],
    },
    references: {
      title: "Referenciak",
      intro: "Hazai es nemzetkozi projektjeink egyarant igazoljak, hogy a csaladi hazas kivitelezestol a nagyvallalati megbizasokig megbizhato partnerek vagyunk.",
      featuredLabel: "Kiemelt megbizok",
      germany: "Nemetorszagi projektek",
      hungary: "Magyarorszagi projektek",
      itemsGermany: referenceGermany,
      itemsHungary: referenceHungary,
    },
    gallery: {
      title: "Galeria",
      intro: "Valogatott helyszini fotok korabbi munkainkbol.",
      cta: "Teljes meret megnyitasa",
    },
    contact: {
      title: "Kapcsolat",
      intro: "Arajanalatert vagy helyszini egyezteteshez hivjon vagy irjon bizalommal.",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      serviceAreaLabel: "Tevekenysegi terulet",
      serviceAreaValue: "Ajka es kornyeke",
      languagesLabel: "Nyelvek",
      languagesValue: "Magyar, nemet, angol",
    },
    footer: "Minden jog fenntartva.",
  },
  en: {
    lang: "en",
    localeLabel: "English",
    pageTitle: "3P Kemeny | Chimney Installation and Lining — Ajka, Hungary",
    metaDescription:
      "Professional chimney installation, relining and insulated systems near Ajka. Stainless steel, self-supporting chimneys, German project references.",
    switcherLabel: "Language",
    nav: {
      about: "About",
      services: "Services",
      references: "References",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      eyebrow: "3P Kemeny • Ajka region, Hungary",
      title: "Chimney systems built to last",
      text: "Industrial and residential chimney construction, relining and modernization — 15 years of experience with a German project background.",
      phoneCta: "Call now",
      emailCta: "Send email",
      galleryCta: "View projects",
    },
    about: {
      title: "About",
      lead: "I'm Robert Papp, founder of 3P Kemeny. I've been working in chimney installation for over 15 years.",
      body: [
        "I started my career with Jeremias systems, which gave me a strong technical foundation for stainless steel and insulated chimney work.",
        "I spent my first 10 years working in Germany, gaining experience from family houses to large industrial systems. Today I work as an independent specialist around Ajka, with direct communication and personal accountability on every project.",
      ],
      trustItems: [
        "15+ years of installation experience",
        "10 years on German projects",
        "Foundation with Jeremias systems",
        "Fast availability in the Ajka region",
      ],
      highlights: [
        { label: "Service area", value: "Ajka and nearby settlements" },
        { label: "Core expertise", value: "Stainless steel and insulated systems" },
        { label: "Projects", value: "Residential, industrial, commercial" },
      ],
    },
    services: {
      title: "Services",
      intro: "Complete chimney solutions from assessment to finished installation.",
      coreLabel: "Core services",
      additionalLabel: "Additional work",
      core: [
        {
          title: "Chimney relining",
          text: "Replacement of old liners and installation of durable stainless steel systems.",
        },
        {
          title: "External insulated chimneys",
          text: "Stainless steel exterior wall systems with stable fixing and clean detailing.",
        },
        {
          title: "Self-supporting chimneys",
          text: "Assembly of self-supporting structures with an industrial execution standard.",
        },
      ],
      additional: [
        {
          title: "Ceramic liner replacement",
          text: "Removal of damaged ceramic liners and conversion to modern acid-resistant solutions.",
        },
        {
          title: "Connector pipe replacement",
          text: "Safe connection upgrades for new or modernized heating systems.",
        },
        {
          title: "Fireplace connection",
          text: "Fireplace connections balanced for performance, safety and appearance.",
        },
        {
          title: "Chimney extension",
          text: "Height extension to improve draft and meet technical requirements.",
        },
        {
          title: "Chimney head dismantling",
          text: "Controlled removal of damaged or unsuitable chimney heads.",
        },
        {
          title: "Concentric systems",
          text: "Installation of concentric chimney systems for modern heating equipment.",
        },
      ],
    },
    references: {
      title: "References",
      intro: "Our project list shows a consistent standard across both residential jobs and demanding industrial work.",
      featuredLabel: "Featured clients",
      germany: "Projects in Germany",
      hungary: "Projects in Hungary",
      itemsGermany: referenceGermany,
      itemsHungary: referenceHungary,
    },
    gallery: {
      title: "Gallery",
      intro: "Selected site photos from previous projects.",
      cta: "Open full size",
    },
    contact: {
      title: "Contact",
      intro: "For a quote or site consultation, call or write directly.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      serviceAreaLabel: "Service area",
      serviceAreaValue: "Ajka and surrounding area",
      languagesLabel: "Languages",
      languagesValue: "Hungarian, German, English",
    },
    footer: "All rights reserved.",
  },
  de: {
    lang: "de",
    localeLabel: "Deutsch",
    pageTitle: "3P Kemeny | Schornsteinmontage und Sanierung in Ajka, Ungarn",
    metaDescription:
      "Fachgerechte Schornsteinmontage, Sanierung und Edelstahlsysteme in Ajka und Umgebung. Langjahrige Erfahrung aus deutschen Industrieprojekten.",
    switcherLabel: "Sprache",
    nav: {
      about: "Unternehmen",
      services: "Leistungen",
      references: "Referenzen",
      gallery: "Galerie",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "3P Kemeny • Region Ajka, Ungarn",
      title: "Schornsteinsysteme, auf die Sie langfristig zahlen konnen",
      text: "Industrie- und Wohnbau-Schornsteinbau, Sanierung und Modernisierung — 15 Jahre Erfahrung mit deutschem Projekthintergrund.",
      phoneCta: "Jetzt anrufen",
      emailCta: "E-Mail senden",
      galleryCta: "Projekte ansehen",
    },
    about: {
      title: "Unternehmen",
      lead: "Ich bin Robert Papp, Grunder von 3P Kemeny. Seit uber 15 Jahren bin ich im Schornsteinbau tatig.",
      body: [
        "Meine Laufbahn begann mit Jeremias Systemen, die mir eine solide technische Grundlage fur Edelstahl- und gedammte Schornsteinarbeiten gaben.",
        "Die ersten 10 Jahre war ich in Deutschland tatig, von Einfamilienhausern bis zu grossen Industrieanlagen. Heute arbeite ich als eigenstandiger Fachbetrieb in der Region Ajka — mit direkter Kommunikation und personlicher Verantwortung fur jedes Projekt.",
      ],
      trustItems: [
        "15+ Jahre Montageerfahrung",
        "10 Jahre Projekte in Deutschland",
        "Fachliche Basis mit Jeremias Systemen",
        "Schnelle Verfugbarkeit in der Region Ajka",
      ],
      highlights: [
        { label: "Einsatzgebiet", value: "Ajka und umliegende Orte" },
        { label: "Kernkompetenz", value: "Edelstahl- und gedammte Systeme" },
        { label: "Projektarten", value: "Wohnbau, Industrie, Gewerbe" },
      ],
    },
    services: {
      title: "Leistungen",
      intro: "Komplette Schornsteinlosungen von der Bestandsaufnahme bis zur fertigen Ausfuhrung.",
      coreLabel: "Kernleistungen",
      additionalLabel: "Weitere Arbeiten",
      core: [
        {
          title: "Schornsteinsanierung",
          text: "Austausch alter Auskleidungen und Einbau langlebiger Edelstahlsysteme.",
        },
        {
          title: "Aussenschornsteine mit Dammung",
          text: "Edelstahl-Aussensysteme mit stabiler Befestigung und sauberer Detaillierung.",
        },
        {
          title: "Selbsttragende Schornsteine",
          text: "Montage selbsttragender Konstruktionen mit industriellem Qualitatsanspruch.",
        },
      ],
      additional: [
        {
          title: "Keramik-Auskleidung tauschen",
          text: "Ruckbau beschadigter Keramiksysteme und Umrustung auf moderne saurebestandige Losungen.",
        },
        {
          title: "Anschlussleitung tauschen",
          text: "Sichere Anschlusse fur neue oder modernisierte Heizsysteme.",
        },
        {
          title: "Kaminanschluss",
          text: "Passgenaue Kaminanschlusse mit Fokus auf Funktion, Sicherheit und Optik.",
        },
        {
          title: "Schornsteinerhohung",
          text: "Erhohung zur Zugverbesserung und technischen Anpassung vor Ort.",
        },
        {
          title: "Ruckbau Schornsteinkopf",
          text: "Kontrollierter Ruckbau beschadigter oder ungeeigneter Schornsteinkopfe.",
        },
        {
          title: "Konzentrische Systeme",
          text: "Montage konzentrischer Schornsteinsysteme fur moderne Heiztechnik.",
        },
      ],
    },
    references: {
      title: "Referenzen",
      intro: "Unsere Referenzen belegen denselben Qualitatsanspruch bei Wohnprojekten wie bei anspruchsvollen Industrieauftragen.",
      featuredLabel: "Ausgewahlte Auftraggeber",
      germany: "Projekte in Deutschland",
      hungary: "Projekte in Ungarn",
      itemsGermany: referenceGermany,
      itemsHungary: referenceHungary,
    },
    gallery: {
      title: "Galerie",
      intro: "Ausgewahlte Baustellenfotos aus bisherigen Projekten.",
      cta: "In Vollgrosse offnen",
    },
    contact: {
      title: "Kontakt",
      intro: "Fur ein Angebot oder eine Ortsbesichtigung rufen Sie an oder schreiben Sie direkt.",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      serviceAreaLabel: "Einsatzgebiet",
      serviceAreaValue: "Ajka und Umgebung",
      languagesLabel: "Sprachen",
      languagesValue: "Ungarisch, Deutsch, Englisch",
    },
    footer: "Alle Rechte vorbehalten.",
  },
};

export const routes: Record<Locale, string> = {
  hu: "/",
  en: "/en/",
  de: "/de/",
};
