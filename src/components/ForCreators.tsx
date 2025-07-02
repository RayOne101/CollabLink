import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Sparkles, User, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import AnimatedHeadline from './AnimatedHeadline';

const creators = [
  {
    name: 'Ava Carter',
    role: 'Fashion Influencer',
    badge: 'Top Creator',
    stats: '2.1M followers • 45 projects',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Liam Smith',
    role: 'Travel Vlogger',
    badge: 'Adventurer',
    stats: '890K followers • 23 projects',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sophia Lee',
    role: 'Food Creator',
    badge: 'Chef',
    stats: '1.5M followers • 67 projects',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Noah Kim',
    role: 'Tech Reviewer',
    badge: 'Gadget Guru',
    stats: '750K followers • 34 projects',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    name: 'Maya Patel',
    role: 'Fitness Coach',
    badge: 'Motivator',
    stats: '1.2M followers • 28 projects',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export default function ForCreators() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [AutoScroll({ speed: 1, startDelay: 0, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <section id="for-creators" className="relative w-full py-16 px-0 bg-background overflow-hidden">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      <div className="relative z-10 w-full text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground inline-block relative">
          <span className="block px-2">For Content Creators</span>
          <span className="block mx-auto mt-2 h-1 w-24 rounded-full bg-primary/60"></span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Showcase your portfolio, connect with agencies, and land new projects.
        </p>
        <div className="embla w-full mx-auto px-4">
          <div className="embla__viewport overflow-hidden w-full" ref={emblaRef}>
            <div className="embla__container flex -ml-1">
              {creators.map((creator, i) => (
                <div
                  key={i}
                  className="embla__slide pl-1 md:basis-1/3 lg:basis-1/4 flex-shrink-0"
                >
                  <div className="p-1">
                    <Card className="w-full h-48 flex flex-col items-center gap-2 shadow-sm border border-border bg-background hover:shadow-md transition-all duration-200">
                      <div className="h-14 w-14 rounded-full overflow-hidden bg-muted flex items-center justify-center mt-4">
                        {creator.avatar ? (
                          <img src={creator.avatar} alt={creator.name} className="h-full w-full object-cover" />
                        ) : (
                          <User size={32} className="text-muted-foreground" />
                        )}
                      </div>
                      <CardHeader className="p-0 text-center w-full">
                        <CardTitle className="text-base font-semibold truncate">{creator.name}</CardTitle>
                      </CardHeader>
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {creator.role}
                      </span>
                      <CardContent className="text-muted-foreground text-xs pt-2 line-clamp-3">{creator.stats}</CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Embla minimal CSS (add to your global CSS if not present):
// .embla { overflow: hidden; width: 100%; }
// .embla__viewport { overflow: hidden; width: 100%; }
// .embla__container { display: flex; user-select: none; margin-left: -4px; }
// .embla__slide { position: relative; min-width: 0; }

// Add this to your global CSS (e.g., App.css or index.css):
// .animate-float {
//   animation: float 3s ease-in-out infinite;
// }
// @keyframes float {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
// } 