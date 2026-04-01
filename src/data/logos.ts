const CLIENT_ID = "1idKqX_mjt3_lN3ROtG";
const CDN = "https://cdn.brandfetch.io/domain";

export type BrandLogo = {
  name: string;
  src: string;
  hoverSrc?: string;
  circle?: boolean;
};

export const trustBrandLogos: BrandLogo[] = [
  {
    name: "Mercedes-Benz",
    src: `${CDN}/mercedes-benz.com/w/800/h/800/symbol?c=${CLIENT_ID}`,
  },
  {
    name: "BMW",
    src: `${CDN}/bmwusa.com/w/400/h/400?c=${CLIENT_ID}`,
    circle: true,
  },
  {
    name: "Volkswagen",
    src: `${CDN}/volkswagen.com/w/800/h/800/logo?c=${CLIENT_ID}`,
  },
  {
    name: "Airbus",
    src: `${CDN}/airbus.com/w/800/h/148/logo?c=${CLIENT_ID}`,
  },
  {
    name: "Viessmann",
    src: "/images/logos/veissmann.png",
  },
  {
    name: "KfW Bank",
    src: `${CDN}/kfw.de/w/800/h/400/logo?c=${CLIENT_ID}`,
  },
  {
    name: "Arburg",
    src: `${CDN}/arburg.com/w/820/h/229/logo?c=${CLIENT_ID}`,
  },
  {
    name: "Ganz Electric",
    src: "/images/logos/ganz-electric.png",
  },
  {
    name: "Egis",
    src: "/images/logos/egis.svg",
  },
];
