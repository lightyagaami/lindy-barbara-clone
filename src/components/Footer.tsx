import { Heart, MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    const whatsappUrl = "https://wa.me/33761800604?text=Bonjour Barbara, j'aimerais prendre rendez-vous pour une coiffure.";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold salon-gradient bg-clip-text text-transparent mb-4">
              NYUMAN X BARBARA
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              L'art de la coiffure moderne rencontre l'élégance africaine. 
              Découvrez une expérience capillaire unique à Abidjan.
            </p>
            <div className="flex gap-4">
              <Button variant="salonOutline" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="whatsapp" size="icon" onClick={handleWhatsAppContact}>
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#hero" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#galerie" className="hover:text-primary transition-colors">Galerie</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Butterfly locs</li>
              <li>Soft locs</li>
              <li>Island twists</li>
              <li>Marley twists</li>
              <li>Tresses Africaines</li>
              <li>Services personnalisés</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Nyuman X Barbara. Tous droits réservés.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 text-red-500 fill-current" /> à Abidjan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;