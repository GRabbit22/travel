import { transportOptions } from "@/data/transport";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Train, Car, TramFront, Bus, CheckCircle2 } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Transport = () => {
  const iconMap: Record<string, any> = {
    Train,
    Car,
    TramFront,
    Bus,
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transport Options</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate Indore easily with various transport options available throughout the city
          </p>
        </div>

        {/* Transport Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {transportOptions.map((transport) => {
            const Icon = iconMap[transport.icon];
            return (
              <Card key={transport.id} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-hero rounded-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{transport.type}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        {transport.fareRange}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{transport.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Quick Tips
                    </h4>
                    <ul className="space-y-2">
                      {transport.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Travel Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Most destinations within city are 20-40 minutes apart by any transport mode
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Safety</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All modes of transport are generally safe. Use registered services for better security
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Best For Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                City buses are most economical. Metro offers best value for longer distances
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Pro Tips */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Pro Tips for Getting Around Indore</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Peak Hours to Avoid</h4>
              <p className="text-sm text-muted-foreground">
                9-11 AM and 5-8 PM on weekdays. Plan your travel accordingly to avoid heavy traffic.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Digital Payments</h4>
              <p className="text-sm text-muted-foreground">
                Most transport services accept UPI, cards, and digital wallets. Keep some cash for local transport.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Route Planning</h4>
              <p className="text-sm text-muted-foreground">
                Use Google Maps for route planning. It shows accurate timings for all transport modes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Airport Connectivity</h4>
              <p className="text-sm text-muted-foreground">
                Airport is 8 km from city center. Pre-paid taxis and app cabs are available 24/7.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default Transport;
