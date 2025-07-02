import { UserPlus, Link2, Handshake, ChevronRight, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <UserPlus size={28} className="text-primary" />,
    title: 'Sign Up',
    description: 'Create your free account as a creator or agency in seconds.'
  },
  {
    icon: <Link2 size={28} className="text-primary" />,
    title: 'Connect',
    description: 'Discover and connect with top agencies or talented creators.'
  },
  {
    icon: <Handshake size={28} className="text-primary" />,
    title: 'Collaborate',
    description: 'Start projects, manage campaigns, and grow together.'
  }
];

const getCardVariants = (i: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }
});

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Cosmic grid pattern */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      {/* Soft blurred glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground inline-block relative">
            How It Works
            <span className="block mx-auto mt-2 h-1 w-12 rounded-full bg-primary/60"></span>
          </h2>
        </div>
        {/* Cards with transition indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
          {steps.map((step, i) => (
            <>
              <motion.div
                key={i}
                variants={getCardVariants(i)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.05, ease: 'linear' }}
                className="group p-7 flex flex-col items-center gap-4 border border-primary/30 bg-background/95 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-150 h-full relative min-h-[220px] mx-0 md:mx-2 my-4 md:my-0 cursor-pointer"
              >
                {/* Step number badge */}
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
                  {`0${i + 1}`}
                </span>
                {/* Icon with enhanced background */}
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  {step.icon}
                </div>
                {/* Title and divider */}
                <h3 className="text-lg font-semibold text-foreground mb-1 mt-1 tracking-tight text-center">{step.title}</h3>
                <div className="w-6 h-0.5 rounded-full bg-primary/20 mb-1"></div>
                {/* Description */}
                <CardContent className="text-muted-foreground text-base text-center p-0">
                  {step.description}
                </CardContent>
              </motion.div>
              {/* Arrow indicator, except after last card */}
              {i < steps.length - 1 && (
                <span className="flex md:hidden my-2">
                  <ChevronDown size={28} className="text-primary/60" />
                </span>
              )}
              {i < steps.length - 1 && (
                <span className="hidden md:flex mx-2 items-center">
                  <ChevronRight size={32} className="text-primary/60" />
                </span>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
} 