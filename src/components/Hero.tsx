import { Button } from '@/components/ui/button';
import { Star, Check } from 'lucide-react';
import barbaraHero from '@/assets/barbara-hero.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen salon-hero-bg pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-muted-foreground">Excellence reconnue</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">NYUMAN</span>
              <br />
              <span className="salon-gradient bg-clip-text text-transparent">X BARBARA</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              L'art de la coiffure moderne rencontre l'élégance africaine. 
              Découvrez une expérience capillaire unique à Abidjan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="salon" size="xl">
                Réserver maintenant
              </Button>
              <Button variant="salonOutline" size="xl">
                Découvrir nos services
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8">
              <div className="text-center salon-stat rounded-xl p-4">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfaites</div>
              </div>
              <div className="text-center salon-stat rounded-xl p-4">
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Note moyenne</div>
              </div>
              <div className="text-center salon-stat rounded-xl p-4">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative floating">
              <img
                src={barbaraHero}
                alt="Barbara - Coiffeuse professionnelle Nyuman"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              
              {/* Availability Badge */}
              <div className="absolute top-6 right-6 availability-badge text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Disponible maintenant
              </div>

              {/* Quote */}
              <div className="absolute bottom-6 left-6 right-6 salon-card rounded-xl p-4">
                <p className="text-sm font-medium mb-2">"Chaque coiffure raconte une histoire unique"</p>
                <p className="text-xs text-muted-foreground">- Barbara, Ambassadrice Nyuman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;