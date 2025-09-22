import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, MessageCircle, Instagram, Star } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppContact = () => {
    const whatsappUrl = "https://wa.me/33761800604?text=Bonjour Barbara, j'aimerais prendre rendez-vous pour une coiffure.";
    window.open(whatsappUrl, '_blank');
  };

  const testimonials = [
    {
      name: "Aminata K.",
      rating: 5,
      text: "Barbara est exceptionnelle ! Mes butterfly locs sont parfaites, je recommande vivement !"
    },
    {
      name: "Fatou D.",
      rating: 5, 
      text: "Service professionnel et résultat magnifique. Barbara comprend exactement ce que je veux."
    },
    {
      name: "Marie-Claire S.",
      rating: 5,
      text: "Ambiance chaleureuse et talent incroyable. Mes cheveux n'ont jamais été aussi beaux !"
    }
  ];

  return (
    <section id="contact" className="py-20 salon-hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="salon-gradient bg-clip-text text-transparent">Contact</span> & Réservation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prête à transformer votre look ? Contactez Barbara dès maintenant !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="salon-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Localisation</h4>
                    <p className="text-muted-foreground">
                      Abidjan, Côte d'Ivoire<br />
                      (Localisation exacte communiquée lors de la réservation)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <p className="text-muted-foreground">+33 7 61 80 06 04</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horaires</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lundi - Vendredi: 9h00 - 18h00</p>
                      <p>Samedi: 8h00 - 20h00</p>
                      <p>Dimanche: Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="salon-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <Button variant="salonOutline" size="icon">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="whatsapp" size="icon" onClick={handleWhatsAppContact}>
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonials & CTA */}
          <div className="space-y-8">
            <div className="salon-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Réservation Rapide</h3>
              <p className="text-muted-foreground mb-6">
                Réservez directement via WhatsApp pour une réponse rapide et personnalisée.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="w-full"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Réserver via WhatsApp
                </Button>
                
                <div className="text-center">
                  <div className="availability-badge text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Disponible maintenant
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="salon-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Ce que disent nos clientes</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-semibold text-sm">{testimonial.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;