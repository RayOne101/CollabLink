import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedHeadline from './AnimatedHeadline';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small businesses starting their fintech journey",
      features: [
        "Up to 100 transactions/month",
        "Basic payment processing",
        "Standard reporting",
        "Email support",
        "Basic fraud protection"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses with higher transaction volumes",
      features: [
        "Up to 10,000 transactions/month",
        "Advanced payment processing",
        "Real-time analytics",
        "Multi-currency support",
        "Advanced fraud protection",
        "API access",
        "Priority support"
      ],
      buttonText: "Start 14-day trial",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex financial operations",
      features: [
        "Unlimited transactions",
        "Custom payment workflows",
        "Advanced compliance tools",
        "Dedicated infrastructure",
        "White-label solutions",
        "Dedicated account manager",
        "24/7 premium support"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="relative w-full py-20 px-6 md:px-12 bg-background overflow-hidden">
      {/* Background light effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none">
        <div className="w-full h-full opacity-5 bg-primary blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground inline-block relative">
            <span className="block px-2">Transparent pricing for every stage</span>
            <span className="block mx-auto mt-2 h-1 w-24 rounded-full bg-primary/60"></span>
          </h2>
        </div>
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg">
            Scale your financial operations with plans that grow with your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.12, ease: 'easeInOut' } }}
              className={`p-6 rounded-xl border flex flex-col h-full cursor-pointer transition-all duration-150 relative ${
                plan.popular 
                  ? "border-primary/50 cosmic-glow bg-card" 
                  : "border-border cosmic-gradient bg-card"
              }`}
            >
              <AnimatePresence>
                {plan.popular && (
                  <motion.div
                    key="popular-badge"
                    initial={{ y: -20, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -20, opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    className="absolute -top-4 left-1/3 -translate-x-1/2 px-4 py-1 w-max bg-primary text-primary-foreground text-sm rounded-full font-medium shadow-lg z-20"
                  >
                    Most Popular
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mb-auto">
                <h3 className="text-2xl font-medium tracking-tighter mb-1 text-foreground">{plan.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold tracking-tighter text-foreground">{plan.price}</div>
                  {plan.period && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="space-y-3 mb-8">
                  <AnimatePresence>
                    {plan.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: i * 0.08 + index * 0.15 }}
                        className="flex items-center gap-3"
                      >
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
              <div className="mt-6 w-full flex justify-center">
                <Button 
                  className={
                    plan.buttonVariant === "default" 
                      ? "w-full bg-primary text-primary-foreground"
                      : "w-full border-border text-foreground hover:bg-muted"
                  }
                  variant={plan.buttonVariant as "default" | "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center text-muted-foreground">
          Have questions? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
