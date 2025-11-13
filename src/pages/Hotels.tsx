import { hotels } from "@/data/hotels";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Hotels = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Hotels in Indore</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find perfect accommodation for your stay, from luxury hotels to budget-friendly options
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold">{hotel.rating}</span>
                </div>
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle className="line-clamp-1">{hotel.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {hotel.location}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div>
                  <p className="text-2xl font-bold text-primary">{hotel.priceRange}</p>
                  <p className="text-xs text-muted-foreground">per night</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.slice(0, 3).map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{hotel.amenities.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              {/* Footer */}
              <CardFooter>
                <a
                  href={hotel.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full group-hover:bg-primary/90">
                    Book Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Booking Tips */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Best Booking Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Book 2-4 weeks in advance for better rates. Off-season (Apr-Sep) offers great deals.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Location Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Vijay Nagar and Scheme 54 are centrally located with easy access to major attractions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Check Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Always read recent reviews on booking platforms. Check ratings for cleanliness and service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Things to Know Before Booking</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Check-in/Check-out</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Standard check-in is 2 PM and check-out is 11 AM. Early check-in may be available on request.
              </p>
              <h4 className="font-semibold mb-2">Cancellation Policy</h4>
              <p className="text-sm text-muted-foreground">
                Most hotels offer free cancellation up to 24-48 hours before check-in. Always verify the policy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What's Usually Included</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complimentary breakfast (in most hotels)</li>
                <li>• Free WiFi</li>
                <li>• Room service</li>
                <li>• Basic toiletries</li>
              </ul>
              <h4 className="font-semibold mb-2 mt-4">Extra Charges</h4>
              <p className="text-sm text-muted-foreground">
                GST (12-18%), parking, and room service may incur additional charges.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default Hotels;
