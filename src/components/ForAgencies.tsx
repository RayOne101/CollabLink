import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Users, Building2, BadgeCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import AnimatedHeadline from './AnimatedHeadline';

const agencies = [
  {
    name: 'Brandify Media',
    industry: 'Marketing Agency',
    badge: 'Verified',
    stats: '89 successful jobs • 156 creators',
    logo: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    name: 'NextGen Talent',
    industry: 'Talent Management',
    badge: 'Top Agency',
    stats: '234 successful jobs • 445 creators',
    logo: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    name: 'Visionary Ads',
    industry: 'Advertising',
    badge: 'Innovator',
    stats: '67 successful jobs • 123 creators',
    logo: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'CollabWorks',
    industry: 'Collaboration Platform',
    badge: 'Collab Pro',
    stats: '445 successful jobs • 789 creators',
    logo: 'https://randomuser.me/api/portraits/women/36.jpg',
  },
  {
    name: 'InfluenceX',
    industry: 'Influencer Marketing',
    badge: 'ROI Leader',
    stats: '178 successful jobs • 234 creators',
    logo: 'https://randomuser.me/api/portraits/men/53.jpg',
  },
];

export default function ForAgencies() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [AutoScroll({ speed: 1, startDelay: 0, stopOnInteraction: false, direction: 'backward' })]
  );

  return (
    <section id="for-agencies" className="relative w-full py-16 px-0 bg-background overflow-hidden">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      <div className="relative z-10 w-full text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground inline-block relative">
          <span className="block px-2">For Agencies</span>
          <span className="block mx-auto mt-2 h-1 w-24 rounded-full bg-primary/60"></span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find top content creators, manage campaigns, and grow your client base.
        </p>
        <div className="embla w-full mx-auto px-4">
          <div className="embla__viewport overflow-hidden w-full" ref={emblaRef}>
            <div className="embla__container flex -ml-1">
              {agencies.map((agency, i) => (
                <div
                  key={i}
                  className="embla__slide pl-1 md:basis-1/3 lg:basis-1/4 flex-shrink-0"
                >
                  <div className="p-1">
                    <Card className="w-full h-48 flex flex-col items-center gap-2 shadow border border-border bg-background/90 hover:shadow-lg transition-all duration-200">
                      <div className="h-14 w-14 rounded-full overflow-hidden bg-muted flex items-center justify-center mt-4">
                        {agency.logo ? (
                          <img src={agency.logo} alt={agency.name} className="h-full w-full object-cover" />
                        ) : (
                          <Building2 size={32} className="text-muted-foreground" />
                        )}
                      </div>
                      <CardHeader className="p-0 text-center w-full">
                        <CardTitle className="text-base font-semibold truncate">{agency.name}</CardTitle>
                      </CardHeader>
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        {agency.industry}
                      </span>
                      <CardContent className="text-muted-foreground text-xs pt-2 line-clamp-3">{agency.stats}</CardContent>
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