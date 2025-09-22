import { Button } from '@/components/ui/button';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import barbaraHero from '@/assets/barbara-hero.jpg';

const About = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise Technique",
      description: "Maîtrise parfaite des techniques modernes de coiffure et de soins capillaires"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion Authentique", 
      description: "Un amour sincère pour l'art capillaire et la beauté naturelle"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Excellence Reconnue",
      description: "Ambassadrice officielle Nyuman avec une réputation d'excellence"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Approche Personnalisée",
      description: "Chaque cliente bénéficie d'un service sur-mesure adapté à ses besoins"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Rencontrez <span className="salon-gradient bg-clip-text text-transparent">Barbara</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ambassadrice Nyuman et artiste capillaire passionnée
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src={barbaraHero}
                alt="Barbara - Portrait professionnel"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 salon-stat rounded-xl p-6 max-w-[200px]">
                <div className="text-2xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfaites</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Une Passion, Un Art</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Barbara est une coiffeuse professionnelle passionnée, ambassadrice de Nyuman, 
                qui met en avant l'élégance, la créativité et le savoir-faire de la coiffure moderne à Abidjan.
              </p>
              <p className="text-lg text-muted-foreground">
                Avec plus de 3 années d'expérience, elle transforme chaque rendez-vous en une expérience unique, 
                alliant techniques modernes et respect de la beauté naturelle de chaque cliente.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="salon-card rounded-xl p-6">
                  <div className="text-primary mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="salon-card rounded-xl p-6 border-l-4 border-primary">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Chaque coiffure que je crée raconte l'histoire unique de ma cliente. 
                Mon objectif est de révéler sa beauté naturelle tout en respectant sa personnalité."
              </blockquote>
              <cite className="text-sm font-semibold text-primary">
                — Barbara, Ambassadrice Nyuman
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;