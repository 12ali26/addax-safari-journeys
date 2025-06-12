
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Heart } from "lucide-react";

const featuredTours = [
  {
    id: 1,
    title: "Great Migration Experience",
    location: "Serengeti & Masai Mara",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "7 Days",
    groupSize: "Max 8",
    rating: 4.9,
    reviews: 124,
    price: 3200,
    originalPrice: 3800,
    highlights: ["Big Five", "Migration", "Cultural Visit"]
  },
  {
    id: 2,
    title: "Luxury Kenya Safari",
    location: "Masai Mara & Amboseli",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "5 Days",
    groupSize: "Max 6",
    rating: 4.8,
    reviews: 89,
    price: 2800,
    originalPrice: 3200,
    highlights: ["Luxury Lodges", "Game Drives", "Mt. Kilimanjaro Views"]
  },
  {
    id: 3,
    title: "Botswana Delta Adventure",
    location: "Okavango Delta",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "6 Days",
    groupSize: "Max 10",
    rating: 4.7,
    reviews: 67,
    price: 3600,
    originalPrice: 4000,
    highlights: ["Delta Cruise", "Mokoro Rides", "Elephant Herds"]
  }
];

export const FeaturedTours = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Safari Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked safari experiences designed to give you the adventure of a lifetime 
            with expert guides and luxury accommodations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <Card key={tour.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  Save ${tour.originalPrice - tour.price}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{tour.location}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({tour.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tour.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {tour.groupSize}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">
                      ${tour.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${tour.originalPrice}
                    </span>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
