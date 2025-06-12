
import { Hero } from "@/components/Hero";
import { Destinations } from "@/components/Destinations";
import { FeaturedTours } from "@/components/FeaturedTours";
import { BookingSection } from "@/components/BookingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <BookingSection />
      <Destinations />
      <FeaturedTours />
    </div>
  );
};

export default Index;
