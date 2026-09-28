import { HomeContact } from "@/components/sections/home-contact";
import { HomeGallery } from "@/components/sections/home-gallery";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeIntro } from "@/components/sections/home-intro";
import { HomeNews } from "@/components/sections/home-news";
import { HomeProjects } from "@/components/sections/home-projects";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeProjects />
      <HomeNews />
      <HomeGallery />
      <HomeContact />
    </>
  );
}
