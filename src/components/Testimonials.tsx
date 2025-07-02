import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Our payment processing efficiency increased by 40% and transaction failures dropped to near zero. The automation features are game-changing.",
    author: "Sarah Johnson",
    position: "CFO at TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The real-time analytics and fraud detection capabilities have saved us millions. We can spot issues before they become problems.",
    author: "Michael Chen",
    position: "Head of Risk at FinanceFlow",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Compliance used to be a nightmare. Now our regulatory reporting is automated and we're always audit-ready.",
    author: "Leila Rodriguez",
    position: "Operations Director at GlobalPay",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Trusted by finance teams worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            See how our platform transforms financial operations for businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                  <img src={testimonial.avatar} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
