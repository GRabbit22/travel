import { faqs } from "@/data/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const FAQs = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-hero rounded-full">
              <HelpCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about traveling to Indore
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Emergency Numbers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Police:</span>
                <span className="font-semibold">100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ambulance:</span>
                <span className="font-semibold">108</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tourist Helpline:</span>
                <span className="font-semibold">1800-111-363</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Useful Apps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                • Google Maps (Navigation)
              </p>
              <p className="text-muted-foreground">
                • Uber/Ola (Transport)
              </p>
              <p className="text-muted-foreground">
                • Zomato/Swiggy (Food)
              </p>
              <p className="text-muted-foreground">
                • MakeMyTrip (Bookings)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">Local Etiquette</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Dress modestly at religious sites</p>
              <p>• Remove shoes before entering temples</p>
              <p>• Bargain politely at local markets</p>
              <p>• Ask before taking photos of people</p>
            </CardContent>
          </Card>
        </div>

        {/* Still Have Questions */}
        <Card className="mt-12 max-w-4xl mx-auto text-center">
          <CardContent className="py-12">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Feel free to reach out to us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:info@indoretravel.com">
                <Card className="px-6 py-4 hover:shadow-md transition-shadow cursor-pointer">
                  <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                  <p className="font-semibold">info@indoretravel.com</p>
                </Card>
              </a>
              <Card className="px-6 py-4 hover:shadow-md transition-shadow cursor-pointer">
                <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                <p className="font-semibold">+91 731 XXX XXXX</p>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default FAQs;
