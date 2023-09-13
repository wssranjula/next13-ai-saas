import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
// import { landinglogo } from  "@/components/landing-logo";
// import landinglogo from "@/components/landing-logo";
// import { LandingLogo } from "@components/landing-logo";
import LandingGallery from "@/components/landing-gallery";

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandingGallery />
      
    </div>
   );
}
 
export default LandingPage;
