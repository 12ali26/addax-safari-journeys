
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Search } from "lucide-react";

export const BookingSection = () => {
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState("");
  const [dates, setDates] = useState("");

  return (
    <section className="relative -mt-20 z-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-white shadow-2xl">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                  Destination
                </label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="serengeti">Serengeti, Tanzania</SelectItem>
                    <SelectItem value="masai-mara">Masai Mara, Kenya</SelectItem>
                    <SelectItem value="kruger">Kruger, South Africa</SelectItem>
                    <SelectItem value="chobe">Chobe, Botswana</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Check-in Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                  Check-in Date
                </label>
                <Input 
                  type="date" 
                  className="h-12"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-orange-500" />
                  Guests
                </label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5+">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button className="h-12 bg-orange-500 hover:bg-orange-600 text-white">
                <Search className="w-4 h-4 mr-2" />
                Search Safari
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
