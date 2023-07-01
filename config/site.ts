export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    instagram: string;
    linkedin: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and cities around the world",
  currentlyAt: "Budapest",
  socialLinks: {
    twitter: "https://twitter.com/",
    youtube: "https://youtube.com/",
    github: "https://github.com/goncanegis",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/goncanegis",
  },
};

export default siteConfig;
