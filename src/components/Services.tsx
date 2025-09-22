import { Button } from '@/components/ui/button';
import { Clock, MessageCircle } from 'lucide-react';
import butterflyLocs from '@/assets/butterfly-locs.jpg';
import softLocs from '@/assets/soft-locs.jpg';
import islandTwists from '@/assets/island-twists.jpg';
import marleyTwists from '@/assets/marley-twists.jpg';

const Services = () => {
  const services = [
    {
      name: "Butterfly locs",
      description: "Élégantes, parfaites pour un look naturel et sophistiqué.",
      duration: "2h",
      price: "29 500 XOF",
      image: butterflyLocs,
      whatsappText: "Bonjour Barbara, je souhaite réserver le service \"Butterfly locs\" (29 500 XOF)."
    },
    {
      name: "Soft locs", 
      description: "Haut de gamme avec mèches naturelles pour un résultat exceptionnel.",
      duration: "3h",
      price: "55 700 XOF",
      image: softLocs,
      whatsappText: "Bonjour Barbara, je souhaite réserver le service \"Soft locs\" (55 700 XOF)."
    },
    {
      name: "Island twists",
      description: "Professionnel et mise en forme pour sublimer vos cheveux.",
      duration: "1h30",
      price: "23 000 XOF",
      image: islandTwists,
      whatsappText: "Bonjour Barbara, je souhaite réserver le service \"Island twists\" (23 000 XOF)."
    },
    {
      name: "Marley twists",
      description: "Coiffure élégante pour vos événements spéciaux et occasions importantes.",
      duration: "2h",
      price: "42 800 XOF",
      image: marleyTwists,
      whatsappText: "Bonjour Barbara, je souhaite réserver le service \"Marley twists\" (42 800 XOF)."
    },
    {
      name: "Tresses Africaines",
      description: "Tresses africaines traditionnelles réalisées avec expertise et passion. Style authentique pour un look unique et élégant.",
      duration: "4h",
      price: "32 800 XOF",
      image: butterflyLocs, // Using butterfly locs as placeholder
      whatsappText: "Bonjour Barbara, je souhaite réserver le service \"Tresses Africaines\" (32 800 XOF)."
    },
    {
      name: "Autre coiffure",
      description: "Choisir cette option si vous souhaitez faire une autre coiffure.",
      duration: "1h15",
      price: "32 800 XOF",
      image: softLocs, // Using soft locs as placeholder
      whatsappText: "Bonjour Barbara, je souhaite réserver le service \"Autre coiffure\" (32 800 XOF)."
    }
  ];

  const handleWhatsAppBook = (text: string) => {
    const whatsappUrl = `https://wa.me/33761800604?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 salon-hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nos <span className="salon-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des prestations d'excellence pour sublimer votre beauté naturelle avec les produits premium Nyuman
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="salon-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary">
                  services
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                </div>
                
                <Button 
                  variant="whatsapp" 
                  className="w-full"
                  onClick={() => handleWhatsAppBook(service.whatsappText)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Réserver maintenant
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Service CTA */}
        <div className="mt-16 text-center salon-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Besoin d'un service personnalisé ?</h3>
          <p className="text-muted-foreground mb-6">
            Contactez Barbara pour discuter de vos besoins spécifiques
          </p>
          <Button 
            variant="salonOutline" 
            size="lg"
            onClick={() => handleWhatsAppBook("Bonjour Barbara, j'aimerais discuter d'un service personnalisé.")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Demande personnalisée
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;