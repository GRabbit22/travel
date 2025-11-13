import { destinations } from "@/data/destinations";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Destinations = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Top Destinations in Indore
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most iconic and beautiful places that make Indore a must-visit destination
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-background/90 text-foreground">
                  {destination.category}
                </Badge>
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-2">
                  <span>{destination.name}</span>
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {destination.description}
                </CardDescription>
              </CardHeader>

              {/* Footer */}
              <CardFooter>
                <a
                  href={destination.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full group-hover:bg-primary/90">
                    View on Maps
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 bg-gradient-card rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Planning Your Visit</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">Best Time to Visit</h3>
              <p className="text-muted-foreground text-sm">
                October to March for pleasant weather
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground text-sm">
                3-4 days to cover major attractions
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Getting Around</h3>
              <p className="text-muted-foreground text-sm">
                Metro, cabs, and autos available
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Destinations;
