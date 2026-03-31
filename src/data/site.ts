export type Locale = "hu" | "en" | "de";

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
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ value: string; label: string }>;
  };
  trust: {
    title: string;
    items: string[];
  };
  about: {
    title: string;
    lead: string;
    body: string[];
    highlights: Array<{ label: string; value: string }>;
  };
  services: {
    title: string;
    intro: string;
    items: Array<{ title: string; text: string }>;
  };
  references: {
    title: string;
    intro: string;
    germany: string;
    hungary: string;
    itemsGermany: Array<{ name: string; type: string }>;
    itemsHungary: Array<{ name: string; type: string }>;
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
    serviceAreaLabel: string;
    serviceAreaValue: string;
    availabilityLabel: string;
    availabilityValue: string;
    cardTitle: string;
    cardText: string;
    checklistTitle: string;
    checklist: string[];
  };
  footer: string;
};

export const galleryImages = [
  "14ab8b9d.jpg",
  "3b5f5653.jpg",
  "3e9b3531.jpg",
  "496f789d.jpg",
  "4f425385.jpg",
  "63b1207d.jpg",
  "6dcbac84.jpg",
  "8e46cf85.jpg",
  "aaf2c88a.jpg",
  "b137f932.jpg",
  "e8de1655.jpg",
  "fd16a8bb.jpg"
] as const;

const referenceGermany = [
  ["Viessmann Allendorf", "Industrial"],
  ["Mercedes Kecskemet", "Factory"],
  ["Mercedes Sindelfingen", "Factory"],
  ["BMW Landshut", "Factory"],
  ["BMW Dingolfing", "Factory"],
  ["Airbus Immenstadt", "Industrial"],
  ["KfW Bank Frankfurt", "Bank"],
  ["Stuttgart Kriminalpolizei", "Police"],
  ["Tubingen Polizei", "Police"],
  ["Karlsruhe Landespolizei", "Police"],
  ["Bad Bergzabern Landespolizei", "Police"],
  ["Arburg Lossburg", "Industrial"],
  ["Freiburg Neues Rathaus", "Municipal"],
  ["Trumpf Laser Gerlingen and Sulgen", "Industrial"],
  ["VW plant Zwickau", "Factory"],
  ["Rapunzel Legau", "Industrial"],
  ["Reutlingen Hospital", "Healthcare"],
  ["Emmendingen Hospital", "Healthcare"]
].map(([name, type]) => ({ name, type }));

const referenceHungary = [
  ["Dunaujvaros Malt Plant", "Industrial"],
  ["Vajda Paper Dunaujvaros", "Industrial"],
  ["Capital Square Budapest", "Commercial"],
  ["Budapest Business Center", "Commercial"],
  ["Madach Center", "Commercial"],
  ["Blaha Center", "Commercial"],
  ["Oxigen Wellness", "Wellness"],
  ["Kometa Kaposvar", "Industrial"],
  ["Szombathely Police", "Police"],
  ["Kalocsa Hospital", "Healthcare"],
  ["Tapioszele Transformer Plant", "Industrial"],
  ["Egis Pharmaceutical Budapest", "Industrial"]
].map(([name, type]) => ({ name, type }));

export const locales: Record<Locale, LocaleContent> = {
  hu: {
    lang: "hu",
    localeLabel: "Magyar",
    pageTitle: "3P Kemeny | Kemenyszereles es kemenyepites Ajka es kornyeken",
    metaDescription: "Professzionalis kemenyszereles, beleles es ipari tapasztalat Ajka es kornyeken.",
    switcherLabel: "Nyelv",
    nav: {
      about: "Rolunk",
      services: "Szolgaltatasok",
      references: "Referenciak",
      gallery: "Galeria",
      contact: "Kapcsolat"
    },
    hero: {
      eyebrow: "3P Kemeny • Ajka es kornyeke",
      title: "Savallo, biztonsagos kemenymegoldasok csaladi hazakhoz es ipari rendszerekhez",
      text: "Tobb eves nemzetkozi tapasztalattal epitunk, belelunk es korszerusitunk kemenyrendszereket. Celfokuszban a megbizhato kivitelezes, az esztetikus megjelenes es a hosszu tavu uzembiztonsag.",
      primaryCta: "Hivjon most",
      secondaryCta: "Munkaink megnezese",
      stats: [
        { value: "15+", label: "ev szerelesi tapasztalat" },
        { value: "10", label: "ev nemetorszagi projektmunka" },
        { value: "30+", label: "kiemelt referencia" }
      ]
    },
    trust: {
      title: "Miert valasztanak minket",
      items: [
        "Jeremias rendszereken szerzett szakmai alapok",
        "Tapasztalat csaladi hazaktol a nagy ipari rendszerekig",
        "Preciz savallo es szigetelt kivitelezes",
        "Ajka es kornyeke gyors elerhetoseggel"
      ]
    },
    about: {
      title: "Bemutatkozas",
      lead: "A 3P Kemeny szakmai hatteret evek ota nemzetkozi es hazai projektek epitik.",
      body: [
        "15 eves szerelesi tapasztalattal rendelkezunk, palyank elejen Jeremias rendszerekkel dolgoztunk, amely eros muszaki alapot adott a specializalt kemenyepitesi munkakhoz.",
        "Az utobbi 10 evben Nemetorszagban dolgoztunk, ahol kis csaladi hazak mellett nagy ipari rendszereken is szereztunk kivitelezesi rutint. Jelenleg egyeni vallalkozokent vallalunk kemenyszerelest, kemenybelelest es onhordo kemenyek kivitelezeset."
      ],
      highlights: [
        { label: "Mukodesi terulet", value: "Ajka es kornyeke" },
        { label: "Szakterulet", value: "Savallo es szigetelt kemenyrendszerek" },
        { label: "Projektfokusz", value: "Lakoepulet, kereskedelmi es ipari kornyezet" }
      ]
    },
    services: {
      title: "Szolgaltatasok",
      intro: "Komplex kemenyes megoldasokat vegzunk felmerestol a kivitelezesig.",
      items: [
        { title: "Kemeny beleles", text: "Regi belesek cserje, savallo rendszer kiepitese es korszerusites megbizhato anyagokkal." },
        { title: "Keramia beles csere", text: "Serult keramia elemek bontasa es korszeru savallo rendszerre valo atallitas." },
        { title: "Kulso szigetelt kemeny epites", text: "Nemesacel, kulso fali kialakitas stabil rogzitessel es esztetikus megjelenessel." },
        { title: "Bekoto vezetek csere", text: "Biztonsagos csatlakozasok kialakitasa uj vagy korszerusitett futesi rendszerekhez." },
        { title: "Kandallo bekotes", text: "Kandallokhoz igazodott bekotesek, funkcio es megjelenes egyensulyaval." },
        { title: "Kemenymagasitas", text: "Huzasjavitas es szabalyos kivezetes kialakitasa a helyi adottsagokhoz igazodva." },
        { title: "Kemenyfej visszabontas", text: "Serult vagy atalakitasra szorulo kemenyfejek biztonsagos visszabontasa." },
        { title: "Koncentrikus rendszerek", text: "Modern futesi rendszerekhez illesztett koncentrikus kemenyek telepitese." },
        { title: "Onhordo kemenyek", text: "Onhordo szerkezetek allitasa es szerelese ipari szemleletu kivitelezessel." }
      ]
    },
    references: {
      title: "Referenciak",
      intro: "Hazai es nemzetkozi projektjeink egyarant igazoljak, hogy a csaladi hazas kivitelezestol a nagyvallalati megbizasokig megbizhato partnerek vagyunk.",
      germany: "Nemetorszagi projektek",
      hungary: "Magyarorszagi projektek",
      itemsGermany: referenceGermany,
      itemsHungary: referenceHungary
    },
    gallery: {
      title: "Galeria",
      intro: "Valogatott helyszini fotok korabbi munkainkbol. A kepek a kivitelezes minoseget es a reszletkepzest mutatjak meg.",
      cta: "Teljes meret megnyitasa"
    },
    contact: {
      title: "Kapcsolat",
      intro: "Arajanalatert vagy helyszini egyezteteshez hivjon bizalommal. Gyors kapcsolatfelvetelhez telefonon vagy az oldalon talalhato elerhetosegeken er el bennunket.",
      phoneLabel: "Telefon",
      serviceAreaLabel: "Tevekenysegi terulet",
      serviceAreaValue: "Ajka es kornyeke",
      availabilityLabel: "Profil",
      availabilityValue: "Kemenyszereles, beleles, kulso szigetelt rendszerek",
      cardTitle: "Megbizhato kivitelezes, korrekt kommunikacio",
      cardText: "Lakossagi es ipari projektekben egyarant a biztonsag, a tartossag es az igenyes kialakitas az alapelvunk.",
      checklistTitle: "Mivel keszuljon az elso egyezteteshez",
      checklist: [
        "Rovid leiras a futesi rendszerrol vagy a tervezett atalakitastol",
        "A helyszin cime es nehany foto, ha van",
        "Ha ismert, a jelenlegi kemeny tipusa es allapota",
        "Az igenyelt hatarido vagy kivitelezesi idoszak"
      ]
    },
    footer: "Minden jog fenntartva."
  },
  en: {
    lang: "en",
    localeLabel: "English",
    pageTitle: "3P Kemeny | Chimney installation and lining in Ajka",
    metaDescription: "Professional chimney installation, relining and insulated chimney systems around Ajka.",
    switcherLabel: "Language",
    nav: {
      about: "About",
      services: "Services",
      references: "References",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      eyebrow: "3P Kemeny • Ajka region",
      title: "Reliable stainless steel chimney systems for homes and industrial sites",
      text: "We build, reline and modernize chimney systems with years of international experience. Every project is centered on safety, clean execution and long-term performance.",
      primaryCta: "Call now",
      secondaryCta: "View projects",
      stats: [
        { value: "15+", label: "years of installation experience" },
        { value: "10", label: "years on German projects" },
        { value: "30+", label: "major references" }
      ]
    },
    trust: {
      title: "Why clients trust us",
      items: [
        "Hands-on foundation with Jeremias chimney systems",
        "Experience from private homes to large industrial plants",
        "Precise stainless steel and insulated system execution",
        "Fast coverage in Ajka and the surrounding area"
      ]
    },
    about: {
      title: "About",
      lead: "3P Kemeny combines local service with international project experience.",
      body: [
        "We have 15 years of installation experience and started by working with Jeremias systems, building a solid technical base for specialist chimney work.",
        "During the past 10 years we worked in Germany on projects ranging from small family houses to large industrial systems. Today we operate as an independent business focused on chimney installation, chimney relining and self-supporting chimney structures."
      ],
      highlights: [
        { label: "Service area", value: "Ajka and nearby settlements" },
        { label: "Core expertise", value: "Stainless steel and insulated chimney systems" },
        { label: "Project range", value: "Residential, commercial and industrial" }
      ]
    },
    services: {
      title: "Services",
      intro: "Complete chimney solutions from assessment to finished installation.",
      items: [
        { title: "Chimney relining", text: "Replacement of old liners and installation of durable stainless steel systems." },
        { title: "Ceramic liner replacement", text: "Removal of damaged ceramic liners and conversion to modern acid-resistant solutions." },
        { title: "External insulated chimney systems", text: "Stainless steel exterior wall systems with stable fixing and clean detailing." },
        { title: "Connector pipe replacement", text: "Safe connection upgrades for new or modernized heating systems." },
        { title: "Fireplace connection", text: "Fireplace connections balanced for performance, safety and appearance." },
        { title: "Chimney extension", text: "Height extension to improve draft and meet technical requirements." },
        { title: "Chimney head dismantling", text: "Controlled removal of damaged or unsuitable chimney heads." },
        { title: "Concentric systems", text: "Installation of concentric chimney systems for modern heating equipment." },
        { title: "Self-supporting chimneys", text: "Assembly of self-supporting structures with an industrial execution standard." }
      ]
    },
    references: {
      title: "References",
      intro: "Our project list shows a consistent standard across both residential jobs and demanding industrial work.",
      germany: "Projects in Germany",
      hungary: "Projects in Hungary",
      itemsGermany: referenceGermany,
      itemsHungary: referenceHungary
    },
    gallery: {
      title: "Gallery",
      intro: "Selected site photos from previous projects, highlighting workmanship, material quality and finishing details.",
      cta: "Open full size"
    },
    contact: {
      title: "Contact",
      intro: "For a quote or site consultation, call directly. The fastest way to reach us is by phone using the contact details below.",
      phoneLabel: "Phone",
      serviceAreaLabel: "Service area",
      serviceAreaValue: "Ajka and surrounding area",
      availabilityLabel: "Focus",
      availabilityValue: "Installation, relining and insulated chimney systems",
      cardTitle: "Clear communication and dependable execution",
      cardText: "We approach both residential and industrial work with the same priorities: safety, durability and clean final appearance.",
      checklistTitle: "Helpful details for the first call",
      checklist: [
        "A short note about the heating system or planned modification",
        "Project address and a few photos if available",
        "The existing chimney type and condition, if known",
        "Preferred timing for the work"
      ]
    },
    footer: "All rights reserved."
  },
  de: {
    lang: "de",
    localeLabel: "Deutsch",
    pageTitle: "3P Kemeny | Schornsteinmontage und Sanierung in Ajka",
    metaDescription: "Fachgerechte Schornsteinmontage, Sanierung und Edelstahlsysteme in Ajka und Umgebung.",
    switcherLabel: "Sprache",
    nav: {
      about: "Unternehmen",
      services: "Leistungen",
      references: "Referenzen",
      gallery: "Galerie",
      contact: "Kontakt"
    },
    hero: {
      eyebrow: "3P Kemeny • Region Ajka",
      title: "Zuverlassige Edelstahlschornsteine fur Wohnhauser und Industrieanlagen",
      text: "Wir bauen, sanieren und modernisieren Schornsteinsysteme auf Basis langjahriger internationaler Erfahrung. Im Mittelpunkt stehen Sicherheit, saubere Ausfuhrung und dauerhafte Funktion.",
      primaryCta: "Jetzt anrufen",
      secondaryCta: "Projekte ansehen",
      stats: [
        { value: "15+", label: "Jahre Montageerfahrung" },
        { value: "10", label: "Jahre Projekte in Deutschland" },
        { value: "30+", label: "wichtige Referenzen" }
      ]
    },
    trust: {
      title: "Warum Kunden uns beauftragen",
      items: [
        "Fachliche Basis mit Jeremias Systemen",
        "Erfahrung von Einfamilienhausern bis zu Industrieanlagen",
        "Prazise Ausfuhrung bei Edelstahl- und Damm-Systemen",
        "Schnelle Verfugbarkeit in Ajka und Umgebung"
      ]
    },
    about: {
      title: "Unternehmen",
      lead: "3P Kemeny verbindet regionale Verlasslichkeit mit internationaler Projekterfahrung.",
      body: [
        "Wir verfugen uber 15 Jahre Montageerfahrung und haben zunachst mit Jeremias Systemen gearbeitet. Dadurch entstand eine solide technische Grundlage fur spezialisierte Schornsteinarbeiten.",
        "In den letzten 10 Jahren waren wir in Deutschland tatig und sammelten Erfahrung von kleinen Wohnprojekten bis zu grossen industriellen Anlagen. Heute arbeiten wir als eigenstandiges Unternehmen mit Schwerpunkt auf Schornsteinmontage, Schornsteinsanierung und selbsttragenden Schornsteinen."
      ],
      highlights: [
        { label: "Einsatzgebiet", value: "Ajka und umliegende Orte" },
        { label: "Kernkompetenz", value: "Edelstahl- und gedammte Schornsteinsysteme" },
        { label: "Projektarten", value: "Wohnbau, Gewerbe und Industrie" }
      ]
    },
    services: {
      title: "Leistungen",
      intro: "Komplette Schornsteinlosungen von der Bestandsaufnahme bis zur fertigen Ausfuhrung.",
      items: [
        { title: "Schornsteinsanierung", text: "Austausch alter Auskleidungen und Einbau langlebiger Edelstahlsysteme." },
        { title: "Austausch keramischer Auskleidungen", text: "Ruckbau beschadigter Keramiksysteme und Umrustung auf moderne saurebestandige Losungen." },
        { title: "Aussenschornsteine mit Dammung", text: "Edelstahl-Aussensysteme mit stabiler Befestigung und sauberer Detaillierung." },
        { title: "Anschlussleitung tauschen", text: "Sichere Anschlusse fur neue oder modernisierte Heizsysteme." },
        { title: "Kaminanschluss", text: "Passgenaue Kaminanschlusse mit Fokus auf Funktion, Sicherheit und Optik." },
        { title: "Schornsteinerhohung", text: "Erhohung zur Zugverbesserung und zur technischen Anpassung an die Situation vor Ort." },
        { title: "Ruckbau des Schornsteinkopfes", text: "Kontrollierter Ruckbau beschadigter oder ungeeigneter Schornsteinkopfe." },
        { title: "Konzentrische Systeme", text: "Montage konzentrischer Schornsteinsysteme fur moderne Heiztechnik." },
        { title: "Selbsttragende Schornsteine", text: "Montage selbsttragender Konstruktionen mit industriellem Qualitatsanspruch." }
      ]
    },
    references: {
      title: "Referenzen",
      intro: "Unsere Referenzen belegen denselben Qualitatsanspruch bei Wohnprojekten wie bei anspruchsvollen Industrieauftragen.",
      germany: "Projekte in Deutschland",
      hungary: "Projekte in Ungarn",
      itemsGermany: referenceGermany,
      itemsHungary: referenceHungary
    },
    gallery: {
      title: "Galerie",
      intro: "Ausgewahlte Baustellenfotos aus fruheren Projekten mit Fokus auf Ausfuhrungsqualitat, Materialwahl und Details.",
      cta: "In Vollgrosse offnen"
    },
    contact: {
      title: "Kontakt",
      intro: "Fur ein Angebot oder eine Ortsbesichtigung rufen Sie bitte direkt an. Telefonisch sind wir am schnellsten erreichbar.",
      phoneLabel: "Telefon",
      serviceAreaLabel: "Einsatzgebiet",
      serviceAreaValue: "Ajka und Umgebung",
      availabilityLabel: "Leistungsschwerpunkt",
      availabilityValue: "Montage, Sanierung und gedammte Schornsteinsysteme",
      cardTitle: "Verlassliche Ausfuhrung und klare Abstimmung",
      cardText: "Sowohl bei Wohn- als auch bei Industrieprojekten arbeiten wir mit Fokus auf Sicherheit, Haltbarkeit und saubere Endergebnisse.",
      checklistTitle: "Hilfreiche Angaben fur das erste Gesprach",
      checklist: [
        "Kurze Beschreibung des Heizsystems oder der geplanten Anderung",
        "Projektadresse und nach Moglichkeit einige Fotos",
        "Vorhandener Schornsteintyp und Zustand, falls bekannt",
        "Gewunschter Zeitraum fur die Ausfuhrung"
      ]
    },
    footer: "Alle Rechte vorbehalten."
  }
};

export const routes: Record<Locale, string> = {
  hu: "/",
  en: "/en/",
  de: "/de/"
};
