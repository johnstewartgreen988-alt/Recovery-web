import { Hero } from "@/components/sections/Hero";
import { PressStrip } from "@/components/sections/PressStrip";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { RecentRecoveries } from "@/components/sections/RecentRecoveries";
import { ScamTypes } from "@/components/sections/ScamTypes";
import { TeamSection } from "@/components/sections/TeamSection";
import { ImageCarousel } from "@/components/sections/ImageCarousel";
import { FinalCta } from "@/components/sections/FinalCta";
import { FeesTeaser } from "@/components/sections/FeesTeaser";
import { FaqSection } from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PressStrip />
      <ReviewsSection />
      <RecentRecoveries />
      <ScamTypes />
      <TeamSection />
      <ImageCarousel />
      <FinalCta />
      <FeesTeaser />
      <FaqSection />
    </>
  );
}
