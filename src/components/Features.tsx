import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedHeadline from './AnimatedHeadline';

const faqs = [
  {
    question: 'How do I sign up as a creator or agency?',
    answer: 'Click the Sign Up button and choose your role. Fill in your details and you\'ll be onboarded in seconds.'
  },
  {
    question: 'How are payments handled?',
    answer: 'Payments are processed securely through our platform. Creators receive instant payouts after project completion.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use industry-standard encryption and compliance tools to keep your data safe.'
  },
  {
    question: 'Can I collaborate with multiple agencies or creators?',
    answer: 'Absolutely! Our platform is designed for flexible, multi-party collaboration.'
  },
  {
    question: 'What fees are involved?',
    answer: 'We offer transparent pricing with no hidden fees. See our Pricing section for details.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = React.useCallback((idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }, []);

  const faqCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.13, duration: 0.6 }
    })
  };

  return (
    <section id="faq" className="w-full py-12 md:py-16 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Cosmic grid pattern */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      {/* Soft blurred glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground inline-block relative">
            <span className="block px-2">FAQ</span>
            <span className="block mx-auto mt-2 h-1 w-24 rounded-full bg-primary/60"></span>
          </h2>
          <p className="text-muted-foreground text-lg">Frequently asked questions about our platform</p>
        </div>
        <div className="grid gap-4 max-w-2xl mx-auto mt-8">
          <AnimatePresence>
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={faqCardVariants}
                className="overflow-hidden rounded-xl"
              >
                <motion.div
                  className={`rounded-xl border border-primary/20 bg-background/95 backdrop-blur-sm shadow-lg transition-all duration-300 ${openIndex === idx ? 'bg-primary/10 border-primary/40' : ''}`}
                >
                  <motion.button
                    className={`w-full flex items-center justify-between px-6 py-4 text-left text-lg font-medium text-foreground focus:outline-none transition-all duration-200 rounded-xl ${openIndex === idx ? 'text-primary' : ''}`}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => toggle(idx)}
                    aria-expanded={openIndex === idx}
                    type="button"
                    tabIndex={0}
                    style={{ backgroundColor: openIndex === idx ? 'var(--tw-bg-opacity, theme(colors.primary/10))' : undefined }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`ml-2 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : 'text-foreground'}`}
                    />
                  </motion.button>
                  <AnimatePresence initial={false}>
                    {openIndex === idx && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-muted-foreground text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
