import { Link } from "react-router-dom";
import { MapPin, Wallet, Car, Hotel, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  const quickLinks = [
    {
      title: "Top Destinations",
      description: "Explore Indore's most iconic places",
      icon: MapPin,
      path: "/destinations",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Expense Tracker",
      description: "Manage your travel budget",
      icon: Wallet,
      path: "/expense-tracker",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Transport Guide",
      description: "Navigate the city with ease",
      icon: Car,
      path: "/transport",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Best Hotels",
      description: "Find perfect accommodation",
      icon: Hotel,
      path: "/hotels",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "FAQs",
      description: "Get answers to common questions",
      icon: HelpCircle,
      path: "/faqs",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Plan Your Perfect
            <br />
            <span className="text-accent">Indore Trip</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover the heart of Madhya Pradesh. Explore heritage sites, savor street food, and create unforgettable memories.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/destinations">
              <Button size="lg" className="text-lg shadow-lg">
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/expense-tracker">
              <Button size="lg" variant="secondary" className="text-lg shadow-lg">
                Plan Budget
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to plan an amazing trip to Indore, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link key={link.path} to={link.path}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {link.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Indore Section */}
      <section className="bg-gradient-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Visit Indore?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Indore offers a perfect blend of history, culture, and modern amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">300+</div>
              <div className="text-lg font-semibold mb-2">Years of History</div>
              <p className="text-muted-foreground">
                Rich Maratha heritage and architectural marvels
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">#1</div>
              <div className="text-lg font-semibold mb-2">Cleanest City</div>
              <p className="text-muted-foreground">
                Cleanest city in India for multiple consecutive years
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-lg font-semibold mb-2">Food Varieties</div>
              <p className="text-muted-foreground">
                Street food capital with unique Indori flavors
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
