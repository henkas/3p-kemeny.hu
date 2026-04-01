const CLIENT_ID = "1idKqX_mjt3_lN3ROtG";
const CDN = "https://cdn.brandfetch.io";

export type BrandLogo = {
  name: string;
  src: string;
};

export const trustBrandLogos: BrandLogo[] = [
  {
    name: "Mercedes-Benz",
    src: `${CDN}/mercedes-benz.com/theme/dark/logo.svg?c=${CLIENT_ID}`,
  },
  {
    name: "BMW",
    src: `${CDN}/bmw.com/theme/light/logo.svg?c=${CLIENT_ID}`,
  },
  {
    name: "Volkswagen",
    src: `${CDN}/volkswagen.com/theme/dark/logo.svg?c=${CLIENT_ID}`,
  },
  {
    name: "Airbus",
    src: `${CDN}/airbus.com/theme/dark/logo.svg?c=${CLIENT_ID}`,
  },
  {
    name: "Viessmann",
    src: `${CDN}/viessmann.com/theme/dark/logo.png?c=${CLIENT_ID}`,
  },
];
