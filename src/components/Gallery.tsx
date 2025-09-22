import { useState } from 'react';
import { Button } from '@/components/ui/button';
import butterflyLocs from '@/assets/butterfly-locs.jpg';
import softLocs from '@/assets/soft-locs.jpg';
import islandTwists from '@/assets/island-twists.jpg';
import marleyTwists from '@/assets/marley-twists.jpg';
import barbaraHero from '@/assets/barbara-hero.jpg';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const categories = ['Tous', 'Tresses', 'Tissages', 'Brushing', 'Événements', 'Avant/Après'];

  const galleryItems = [
    {
      id: 1,
      title: "Tresses Box Braids Premium",
      category: "Tresses",
      image: butterflyLocs
    },
    {
      id: 2, 
      title: "Coiffure Événementielle Sophistiquée",
      category: "Événements",
      image: barbaraHero
    },
    {
      id: 3,
      title: "Transformation Avant/Après Spectaculaire", 
      category: "Avant/Après",
      image: softLocs
    },
    {
      id: 4,
      title: "Tissage Naturel Premium",
      category: "Tissages", 
      image: marleyTwists
    },
    {
      id: 5,
      title: "Brushing Lisse Professionnel",
      category: "Brushing",
      image: islandTwists
    },
    {
      id: 6,
      title: "Tresses Collées Artistiques",
      category: "Tresses",
      image: butterflyLocs
    },
    {
      id: 7,
      title: "Style Naturel Élégant",
      category: "Événements", 
      image: softLocs
    },
    {
      id: 8,
      title: "Coiffure Protectrice Moderne",
      category: "Tresses",
      image: marleyTwists
    }
  ];

  const filteredItems = activeFilter === 'Tous' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="galerie" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Galerie de nos <span className="salon-gradient bg-clip-text text-transparent">Réalisations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez quelques-unes de nos plus belles créations. Chaque coiffure raconte une histoire unique.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "salon" : "salonOutline"}
              onClick={() => setActiveFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl salon-card hover:scale-105 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-xs font-medium text-orange-300 mb-1">
                  {item.category}
                </div>
                <h3 className="font-bold text-sm">{item.title}</h3>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Inspiré par nos créations ? Réservez votre rendez-vous maintenant !
          </p>
          <Button variant="salon" size="lg">
            Réserver maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;