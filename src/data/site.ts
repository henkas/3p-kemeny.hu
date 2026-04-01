export type Locale = "hu" | "en" | "de";

export type ServiceItem = { title: string; text: string };

export type ReferenceItem = {
  name: string;
  type: string;
  featured?: boolean;
};

export type ReferenceGroup = {
  heading: string;
  items: ReferenceItem[];
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
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
    primaryCta: string;
    phoneCta: string;
    galleryCta: string;
  };
  trustStrip: {
    stats: Array<{ value: string; label: string }>;
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
  process: {
    title: string;
    intro: string;
    steps: ProcessStep[];
  };
  references: {
    title: string;
    intro: string;
    featuredLabel: string;
    groups: ReferenceGroup[];
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
    responseTimeLabel: string;
    responseTimeValue: string;
    languagesLabel: string;
    languagesValue: string;
    addressLabel: string;
    addressLine1: string;
    addressLine2: string;
    addressDisclaimer: string;
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

export const locales: Record<Locale, LocaleContent> = {
  hu: {
    lang: "hu",
    localeLabel: "Magyar",
    pageTitle: "3P Kémény | Kéményszerelés és kéménybélelés — Ajka",
    metaDescription:
      "Professzionális kéményszerelés, kéménybélelés és szigetelt saválló rendszerek Ajka környékén. Több mint 15 év tapasztalat, németországi ipari projektmúlt.",
    switcherLabel: "Nyelv",
    nav: {
      about: "Rólunk",
      services: "Szolgáltatások",
      references: "Referenciák",
      gallery: "Galéria",
      contact: "Kapcsolat",
    },
    hero: {
      eyebrow: "Ajka és környéke",
      title: "Időtálló kéményrendszerek",
      text: "Ipari és lakossági kéményépítés, kéménybélelés és korszerűsítés — több mint 15 év gyakorlati tapasztalattal és németországi projektmúlttal.",
      primaryCta: "Ajánlatkérés",
      phoneCta: "Hívjon most",
      galleryCta: "Projektek megtekintése",
    },
    trustStrip: {
      stats: [
        { value: "15+", label: "év tapasztalat" },
        { value: "10", label: "év németországi projekteken" },
        { value: "30+", label: "nagyobb befejezett referencia" },
        { value: "✓", label: "Lakossági, ipari és kereskedelmi" },
      ],
    },
    about: {
      title: "Rólunk",
      lead: "Papp Róbert vagyok, a 3P Kémény alapítója. Több mint 15 éve foglalkozom kéményépítéssel és -béleléssel — és a mai napig minden munkát személyesen végzek el.",
      body: [
        "A Jeremias rendszerekkel kezdtem, ami stabil technikai alapot biztosított a saválló és szigetelt kémények területén.",
        "Az első tíz évben Németország-szerte dolgoztam — a családi házaktól kezdve a gyári méretű kivitelezésekig olyan ügyfeleknek, mint a Mercedes, a BMW és az Airbus. Ez a tapasztalat határozza meg a mai munkastílusomat: precíz kivitelezés, tiszta megoldások és közvetlen kommunikáció minden ügyféllel.",
        "Ma független szakemberként dolgozom Ajka környékén. Nincsenek közvetítők — csak egyetlen kapcsolattartó a felméréstől az átadásig.",
      ],
      trustItems: [
        "Több mint 15 év szerelési tapasztalat",
        "10 év németországi ipari és kereskedelmi projekteken",
        "Jeremias saválló rendszerekre kiképezve",
        "Gyors rendelkezésre állás Ajkán és környékén",
        "Közvetlen, személyes kommunikáció minden munkánál",
      ],
      highlights: [
        { label: "Szolgáltatási terület", value: "Ajka és a környező települések" },
        { label: "Fő szakterület", value: "Saválló és szigetelt rendszerek" },
        { label: "Projektek", value: "Lakossági, ipari, kereskedelmi" },
      ],
    },
    services: {
      title: "Szolgáltatások",
      intro: "Teljes körű kéménymegoldások — a helyszíni felméréstől a kész kivitelezésig.",
      coreLabel: "Fő szolgáltatások",
      additionalLabel: "További szolgáltatások",
      core: [
        {
          title: "Kéménybélelés",
          text: "Régi vagy sérült béléscsövek eltávolítása és cseréje tartós saválló rendszerekre.",
        },
        {
          title: "Külső szigetelt kémények",
          text: "Falon kívüli saválló rendszerek biztonságos rögzítéssel, megfelelő szigeteléssel és esztétikus kivitelezéssel.",
        },
        {
          title: "Önhordó kémények",
          text: "Szabadon álló kéményszerkezetek ipari szabványok szerinti megépítése.",
        },
      ],
      additional: [
        {
          title: "Kerámia bélés cseréje",
          text: "Repedt vagy elhasználódott kerámia béléscsövek eltávolítása, átalakítás modern saválló megoldásokra.",
        },
        {
          title: "Bekötővezeték cseréje",
          text: "Füstcsövek és bekötővezetékek biztonságos cseréje új vagy korszerűsített fűtőberendezésekhez.",
        },
        {
          title: "Kandalló bekötés",
          text: "Kandallók és kályhák bekötése a megfelelő huzat, biztonság és esztétika figyelembevételével.",
        },
        {
          title: "Kéménymagasítás",
          text: "Kémények magasítása a huzat javítása vagy a jelenlegi műszaki előírások teljesítése érdekében.",
        },
        {
          title: "Kéményfej visszabontás",
          text: "Sérült kéményfejek szakszerű visszabontása vagy újraépítése.",
        },
        {
          title: "Koncentrikus rendszerek",
          text: "Koncentrikus kéményrendszerek kiépítése kondenzációs kazánokhoz és modern fűtőberendezésekhez.",
        },
      ],
    },
    process: {
      title: "Hogyan dolgozunk",
      intro: "Minden projekt egy átlátható folyamatot követ — nincsenek meglepetések.",
      steps: [
        { step: "1", title: "Felmérés", text: "Helyszíni kiszállás a meglévő kémény állapotának felmérésére és az igények egyeztetésére." },
        { step: "2", title: "Árajánlat", text: "Írásos árajánlat világosan meghatározott munkakörrel, anyagokkal és határidővel." },
        { step: "3", title: "Kivitelezés", text: "Szakszerű kivitelezés — tiszta munkaterület, dokumentált munka, nincsenek elvarratlan szálak." },
        { step: "4", title: "Átadás", text: "Az elkészült rendszer bemutatása és a szükséges dokumentáció átadása." },
      ],
    },
    references: {
      title: "Referenciák",
      intro: "A családi házaktól a gyárcsarnokokig — állandó színvonal minden projektnél.",
      featuredLabel: "Kiemelt ügyfelek",
      groups: [
        {
          heading: "Németország — Járműipar és ipar",
          items: [
            { name: "Mercedes Kecskemét", type: "Gyár", featured: true },
            { name: "Mercedes Sindelfingen", type: "Gyár" },
            { name: "BMW Landshut", type: "Gyár", featured: true },
            { name: "BMW Dingolfing", type: "Gyár" },
            { name: "VW Zwickau", type: "Gyár", featured: true },
            { name: "Airbus Immenstadt", type: "Ipari", featured: true },
            { name: "Viessmann Allendorf", type: "Ipari", featured: true },
            { name: "Trumpf Laser Gerlingen & Sulgen", type: "Ipari" },
            { name: "Arburg Loßburg", type: "Ipari" },
            { name: "Rapunzel Legau", type: "Ipari" },
          ],
        },
        {
          heading: "Németország — Közintézmények, önkormányzatok és egészségügy",
          items: [
            { name: "KfW Bank Frankfurt", type: "Bank", featured: true },
            { name: "Freiburg Neues Rathaus", type: "Önkormányzati" },
            { name: "Stuttgart Kriminalpolizei", type: "Rendőrség" },
            { name: "Tübingen Polizei", type: "Rendőrség" },
            { name: "Karlsruhe Landespolizei", type: "Rendőrség" },
            { name: "Bad Bergzabern Landespolizei", type: "Rendőrség" },
            { name: "Reutlingeni Kórház", type: "Egészségügy" },
            { name: "Emmendingeni Kórház", type: "Egészségügy" },
          ],
        },
        {
          heading: "Magyarország — Ipari",
          items: [
            { name: "Dunaújváros Malátagyár", type: "Ipari" },
            { name: "Vajda Papír Dunaújváros", type: "Ipari" },
            { name: "Kométa Kaposvár", type: "Ipari" },
            { name: "Tápiószele Transzformátorgyár", type: "Ipari" },
            { name: "Egis Gyógyszergyár Budapest", type: "Ipari", featured: true },
          ],
        },
        {
          heading: "Magyarország — Kereskedelmi és közintézmények",
          items: [
            { name: "Capital Square Budapest", type: "Kereskedelmi" },
            { name: "Budapest Business Center", type: "Kereskedelmi" },
            { name: "Madách Center", type: "Kereskedelmi" },
            { name: "Blaha Center", type: "Kereskedelmi" },
            { name: "Oxigén Wellness", type: "Wellness" },
            { name: "Szombathelyi Rendőrség", type: "Rendőrség" },
            { name: "Kalocsai Kórház", type: "Egészségügy" },
          ],
        },
      ],
    },
    gallery: {
      title: "Galéria",
      intro: "Válogatott helyszíni fotók korábbi projektjeinkből.",
      cta: "Teljes méret megnyitása",
    },
    contact: {
      title: "Kapcsolat",
      intro: "Árajánlatért vagy helyszíni konzultációért hívjon vagy írjon — általában egy munkanapon belül válaszolunk.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      serviceAreaLabel: "Szolgáltatási terület",
      serviceAreaValue: "Ajka és környéke",
      responseTimeLabel: "Válaszidő",
      responseTimeValue: "1 munkanapon belül",
      languagesLabel: "Nyelvek",
      languagesValue: "Magyar, Német, Angol",
      addressLabel: "Székhely",
      addressLine1: "Papp Róbert E.V.",
      addressLine2: "8400 Ajka, Dobó Katica utca 102.",
      addressDisclaimer: "Székhelycím, személyes ügyfélfogadás nincs.",
    },
    footer: "Minden jog fenntartva.",
  },
  en: {
    lang: "en",
    localeLabel: "English",
    pageTitle: "3P Kémény | Chimney Installation and Lining — Ajka, Hungary",
    metaDescription:
      "Professional chimney installation, relining and insulated stainless steel systems near Ajka. 15+ years of experience, German industrial project background.",
    switcherLabel: "Language",
    nav: {
      about: "About",
      services: "Services",
      references: "References",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Ajka region, Hungary",
      title: "Chimney systems built to last",
      text: "Industrial and residential chimney construction, relining and modernization — with 15+ years of hands-on experience and a German project background.",
      primaryCta: "Request a quote",
      phoneCta: "Call now",
      galleryCta: "View projects",
    },
    trustStrip: {
      stats: [
        { value: "15+", label: "years of experience" },
        { value: "10", label: "years on German projects" },
        { value: "30+", label: "major completed references" },
        { value: "✓", label: "Residential, industrial & commercial" },
      ],
    },
    about: {
      title: "About",
      lead: "I'm Róbert Papp, founder of 3P Kémény. I've spent over 15 years building and lining chimneys — and I still do every job personally.",
      body: [
        "I started with Jeremias systems, which gave me a solid technical foundation in stainless steel and insulated chimney work.",
        "For my first ten years I worked across Germany — everything from single-family houses to factory-scale installations for clients like Mercedes, BMW and Airbus. That experience shaped how I work today: precise execution, clean detailing, and direct communication with every client.",
        "Today I operate as an independent specialist based near Ajka. No middlemen — just one point of contact from assessment to handover.",
      ],
      trustItems: [
        "15+ years of installation experience",
        "10 years on German industrial and commercial projects",
        "Trained on Jeremias stainless steel systems",
        "Fast availability in the Ajka region",
        "Direct, personal communication on every job",
      ],
      highlights: [
        { label: "Service area", value: "Ajka and surrounding settlements" },
        { label: "Core expertise", value: "Stainless steel and insulated systems" },
        { label: "Project types", value: "Residential, industrial, commercial" },
      ],
    },
    services: {
      title: "Services",
      intro: "Complete chimney solutions — from on-site assessment to finished installation.",
      coreLabel: "Core services",
      additionalLabel: "Additional services",
      core: [
        {
          title: "Chimney relining",
          text: "Removal of old or damaged liners and replacement with durable stainless steel systems.",
        },
        {
          title: "External insulated chimneys",
          text: "Wall-mounted stainless steel systems with secure fixing, proper insulation and clean finishing.",
        },
        {
          title: "Self-supporting chimneys",
          text: "Freestanding chimney structures built to industrial standards.",
        },
      ],
      additional: [
        {
          title: "Ceramic liner replacement",
          text: "Removal of cracked or deteriorated ceramic liners, conversion to modern acid-resistant solutions.",
        },
        {
          title: "Connector pipe replacement",
          text: "Safe replacement of connecting flue pipes for new or upgraded heating equipment.",
        },
        {
          title: "Fireplace connection",
          text: "Hookup of fireplaces and stoves, balanced for draft, safety and appearance.",
        },
        {
          title: "Chimney extension",
          text: "Height extensions to improve draft performance or meet current technical requirements.",
        },
        {
          title: "Chimney head work",
          text: "Controlled dismantling or reconstruction of damaged chimney heads.",
        },
        {
          title: "Concentric systems",
          text: "Installation of concentric chimney systems for condensing boilers and modern heating equipment.",
        },
      ],
    },
    process: {
      title: "How we work",
      intro: "Every project follows a straightforward process — no surprises.",
      steps: [
        { step: "1", title: "Assessment", text: "On-site visit to inspect the existing chimney and discuss your requirements." },
        { step: "2", title: "Quote", text: "Written quote with a clear scope of work, materials and timeline." },
        { step: "3", title: "Installation", text: "Professional execution — clean site, documented work, no loose ends." },
        { step: "4", title: "Handover", text: "Walkthrough of the completed system and any documentation you need." },
      ],
    },
    references: {
      title: "References",
      intro: "From family homes to factory floors — a consistent standard on every project.",
      featuredLabel: "Selected clients",
      groups: [
        {
          heading: "Germany — Automotive & industrial",
          items: [
            { name: "Mercedes Kecskemét", type: "Factory", featured: true },
            { name: "Mercedes Sindelfingen", type: "Factory" },
            { name: "BMW Landshut", type: "Factory", featured: true },
            { name: "BMW Dingolfing", type: "Factory" },
            { name: "VW Zwickau", type: "Factory", featured: true },
            { name: "Airbus Immenstadt", type: "Industrial", featured: true },
            { name: "Viessmann Allendorf", type: "Industrial", featured: true },
            { name: "Trumpf Laser Gerlingen & Sulgen", type: "Industrial" },
            { name: "Arburg Loßburg", type: "Industrial" },
            { name: "Rapunzel Legau", type: "Industrial" },
          ],
        },
        {
          heading: "Germany — Public, municipal & healthcare",
          items: [
            { name: "KfW Bank Frankfurt", type: "Bank", featured: true },
            { name: "Freiburg Neues Rathaus", type: "Municipal" },
            { name: "Stuttgart Kriminalpolizei", type: "Police" },
            { name: "Tübingen Polizei", type: "Police" },
            { name: "Karlsruhe Landespolizei", type: "Police" },
            { name: "Bad Bergzabern Landespolizei", type: "Police" },
            { name: "Reutlingen Hospital", type: "Healthcare" },
            { name: "Emmendingen Hospital", type: "Healthcare" },
          ],
        },
        {
          heading: "Hungary — Industrial",
          items: [
            { name: "Dunaújváros Malt Plant", type: "Industrial" },
            { name: "Vajda Papír Dunaújváros", type: "Industrial" },
            { name: "Kométa Kaposvár", type: "Industrial" },
            { name: "Tápiószele Transformer Plant", type: "Industrial" },
            { name: "Egis Pharmaceutical Budapest", type: "Industrial", featured: true },
          ],
        },
        {
          heading: "Hungary — Commercial & public",
          items: [
            { name: "Capital Square Budapest", type: "Commercial" },
            { name: "Budapest Business Center", type: "Commercial" },
            { name: "Madách Center", type: "Commercial" },
            { name: "Blaha Center", type: "Commercial" },
            { name: "Oxigén Wellness", type: "Wellness" },
            { name: "Szombathely Police", type: "Police" },
            { name: "Kalocsa Hospital", type: "Healthcare" },
          ],
        },
      ],
    },
    gallery: {
      title: "Gallery",
      intro: "Selected site photos from previous projects.",
      cta: "Open full size",
    },
    contact: {
      title: "Contact",
      intro: "For a quote or on-site consultation, call or write — we typically respond within one business day.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      serviceAreaLabel: "Service area",
      serviceAreaValue: "Ajka and surrounding area",
      responseTimeLabel: "Response time",
      responseTimeValue: "Within 1 business day",
      languagesLabel: "Languages",
      languagesValue: "Hungarian, German, English",
      addressLabel: "Registered address",
      addressLine1: "Papp Róbert E.V.",
      addressLine2: "8400 Ajka, Dobó Katica utca 102.",
      addressDisclaimer: "Registered business address only — no walk-in visits.",
    },
    footer: "All rights reserved.",
  },
  de: {
    lang: "de",
    localeLabel: "Deutsch",
    pageTitle: "3P Kémény | Schornsteinmontage und Sanierung — Ajka, Ungarn",
    metaDescription:
      "Fachgerechte Schornsteinmontage, Sanierung und gedämmte Edelstahlsysteme bei Ajka. Über 15 Jahre Erfahrung, deutscher Industrie-Projekthintergrund.",
    switcherLabel: "Sprache",
    nav: {
      about: "Über uns",
      services: "Leistungen",
      references: "Referenzen",
      gallery: "Galerie",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Region Ajka, Ungarn",
      title: "Schornsteinsysteme, auf die Sie langfristig zählen können",
      text: "Industrie- und Wohnbau-Schornsteinbau, Sanierung und Modernisierung — mit über 15 Jahren Praxiserfahrung und deutschem Projekthintergrund.",
      primaryCta: "Angebot anfordern",
      phoneCta: "Jetzt anrufen",
      galleryCta: "Projekte ansehen",
    },
    trustStrip: {
      stats: [
        { value: "15+", label: "Jahre Erfahrung" },
        { value: "10", label: "Jahre auf deutschen Projekten" },
        { value: "30+", label: "abgeschlossene Großprojekte" },
        { value: "✓", label: "Wohnbau, Industrie & Gewerbe" },
      ],
    },
    about: {
      title: "Über uns",
      lead: "Ich bin Róbert Papp, Gründer von 3P Kémény. Seit über 15 Jahren baue und saniere ich Schornsteine — und führe bis heute jedes Projekt persönlich aus.",
      body: [
        "Meine Laufbahn begann mit Jeremias-Systemen, die mir eine solide technische Grundlage für Edelstahl- und gedämmte Schornsteinarbeiten gaben.",
        "Die ersten zehn Jahre war ich in Deutschland tätig — von Einfamilienhäusern bis hin zu Großprojekten für Kunden wie Mercedes, BMW und Airbus. Diese Erfahrung prägt meine heutige Arbeitsweise: präzise Ausführung, saubere Detaillösungen und direkte Kommunikation mit jedem Auftraggeber.",
        "Heute arbeite ich als eigenständiger Fachbetrieb in der Region Ajka. Keine Zwischenhändler — nur ein einziger Ansprechpartner von der Bestandsaufnahme bis zur Übergabe.",
      ],
      trustItems: [
        "Über 15 Jahre Montageerfahrung",
        "10 Jahre auf deutschen Industrie- und Gewerbeprojekten",
        "Ausbildung an Jeremias-Edelstahlsystemen",
        "Schnelle Verfügbarkeit in der Region Ajka",
        "Direkte, persönliche Kommunikation bei jedem Projekt",
      ],
      highlights: [
        { label: "Einsatzgebiet", value: "Ajka und umliegende Ortschaften" },
        { label: "Kernkompetenz", value: "Edelstahl- und gedämmte Systeme" },
        { label: "Projektarten", value: "Wohnbau, Industrie, Gewerbe" },
      ],
    },
    services: {
      title: "Leistungen",
      intro: "Komplette Schornsteinlösungen — von der Bestandsaufnahme vor Ort bis zur fertigen Ausführung.",
      coreLabel: "Kernleistungen",
      additionalLabel: "Weitere Leistungen",
      core: [
        {
          title: "Schornsteinsanierung",
          text: "Ausbau alter oder beschädigter Auskleidungen und Einbau langlebiger Edelstahlsysteme.",
        },
        {
          title: "Außenschornsteine mit Dämmung",
          text: "Wandmontierte Edelstahlsysteme mit stabiler Befestigung, fachgerechter Dämmung und sauberer Detaillierung.",
        },
        {
          title: "Selbsttragende Schornsteine",
          text: "Montage freistehender Schornsteinkonstruktionen nach industriellem Qualitätsstandard.",
        },
      ],
      additional: [
        {
          title: "Keramik-Auskleidung tauschen",
          text: "Rückbau gerissener oder verschlissener Keramikauskleidungen, Umrüstung auf moderne säurebeständige Lösungen.",
        },
        {
          title: "Verbindungsleitung tauschen",
          text: "Sicherer Austausch von Rauchgasrohren und Verbindungsleitungen für neue oder modernisierte Heizanlagen.",
        },
        {
          title: "Kaminanschluss",
          text: "Fachgerechter Anschluss von Kaminen und Öfen — abgestimmt auf Zugverhalten, Sicherheit und Optik.",
        },
        {
          title: "Schornsteinerhöhung",
          text: "Höhenanpassung zur Verbesserung des Zugverhaltens oder Erfüllung aktueller technischer Vorschriften.",
        },
        {
          title: "Schornsteinkopf-Arbeiten",
          text: "Kontrollierter Rückbau oder Neuaufbau beschädigter Schornsteinköpfe.",
        },
        {
          title: "Konzentrische Systeme",
          text: "Montage konzentrischer Schornsteinsysteme für Brennwerttechnik und moderne Heizanlagen.",
        },
      ],
    },
    process: {
      title: "Arbeitsweise",
      intro: "Jedes Projekt folgt einem klaren Ablauf — ohne Überraschungen.",
      steps: [
        { step: "1", title: "Bestandsaufnahme", text: "Vor-Ort-Termin zur Begutachtung des bestehenden Schornsteins und Besprechung Ihrer Anforderungen." },
        { step: "2", title: "Angebot", text: "Schriftliches Angebot mit klar definiertem Leistungsumfang, Materialien und Zeitplan." },
        { step: "3", title: "Ausführung", text: "Fachgerechte Montage — saubere Baustelle, dokumentierte Arbeit, keine offenen Punkte." },
        { step: "4", title: "Übergabe", text: "Besichtigung der fertiggestellten Anlage und Aushändigung aller erforderlichen Unterlagen." },
      ],
    },
    references: {
      title: "Referenzen",
      intro: "Vom Einfamilienhaus bis zur Werkshalle — gleichbleibender Qualitätsanspruch bei jedem Projekt.",
      featuredLabel: "Ausgewählte Auftraggeber",
      groups: [
        {
          heading: "Deutschland — Automobil & Industrie",
          items: [
            { name: "Mercedes Kecskemét", type: "Werk", featured: true },
            { name: "Mercedes Sindelfingen", type: "Werk" },
            { name: "BMW Landshut", type: "Werk", featured: true },
            { name: "BMW Dingolfing", type: "Werk" },
            { name: "VW Zwickau", type: "Werk", featured: true },
            { name: "Airbus Immenstadt", type: "Industrie", featured: true },
            { name: "Viessmann Allendorf", type: "Industrie", featured: true },
            { name: "Trumpf Laser Gerlingen & Sulgen", type: "Industrie" },
            { name: "Arburg Loßburg", type: "Industrie" },
            { name: "Rapunzel Legau", type: "Industrie" },
          ],
        },
        {
          heading: "Deutschland — Öffentliche Einrichtungen, Kommunen & Gesundheitswesen",
          items: [
            { name: "KfW Bank Frankfurt", type: "Bank", featured: true },
            { name: "Freiburg Neues Rathaus", type: "Kommunal" },
            { name: "Stuttgart Kriminalpolizei", type: "Polizei" },
            { name: "Tübingen Polizei", type: "Polizei" },
            { name: "Karlsruhe Landespolizei", type: "Polizei" },
            { name: "Bad Bergzabern Landespolizei", type: "Polizei" },
            { name: "Klinikum Reutlingen", type: "Gesundheitswesen" },
            { name: "Klinikum Emmendingen", type: "Gesundheitswesen" },
          ],
        },
        {
          heading: "Ungarn — Industrie",
          items: [
            { name: "Malzfabrik Dunaújváros", type: "Industrie" },
            { name: "Vajda Papír Dunaújváros", type: "Industrie" },
            { name: "Kométa Kaposvár", type: "Industrie" },
            { name: "Transformatorenwerk Tápiószele", type: "Industrie" },
            { name: "Egis Pharma Budapest", type: "Industrie", featured: true },
          ],
        },
        {
          heading: "Ungarn — Gewerbe & öffentliche Einrichtungen",
          items: [
            { name: "Capital Square Budapest", type: "Gewerbe" },
            { name: "Budapest Business Center", type: "Gewerbe" },
            { name: "Madách Center", type: "Gewerbe" },
            { name: "Blaha Center", type: "Gewerbe" },
            { name: "Oxigén Wellness", type: "Wellness" },
            { name: "Polizei Szombathely", type: "Polizei" },
            { name: "Krankenhaus Kalocsa", type: "Gesundheitswesen" },
          ],
        },
      ],
    },
    gallery: {
      title: "Galerie",
      intro: "Ausgewählte Baustellenfotos aus bisherigen Projekten.",
      cta: "In Originalgröße öffnen",
    },
    contact: {
      title: "Kontakt",
      intro: "Für ein Angebot oder eine Vor-Ort-Besichtigung rufen Sie an oder schreiben Sie direkt — wir antworten in der Regel innerhalb eines Werktags.",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      serviceAreaLabel: "Einsatzgebiet",
      serviceAreaValue: "Ajka und Umgebung",
      responseTimeLabel: "Antwortzeit",
      responseTimeValue: "Innerhalb eines Werktags",
      languagesLabel: "Sprachen",
      languagesValue: "Ungarisch, Deutsch, Englisch",
      addressLabel: "Geschäftsadresse",
      addressLine1: "Papp Róbert E.V.",
      addressLine2: "8400 Ajka, Dobó Katica utca 102.",
      addressDisclaimer: "Nur Geschäftsadresse — kein Besucherempfang.",
    },
    footer: "Alle Rechte vorbehalten.",
  },
};

export const routes: Record<Locale, string> = {
  hu: "/",
  en: "/en/",
  de: "/de/",
};
