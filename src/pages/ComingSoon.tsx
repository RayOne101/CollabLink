import React from 'react';

const ComingSoon = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 relative overflow-hidden">
    {/* Cosmic grid pattern */}
    <div className="absolute inset-0 cosmic-grid opacity-20 z-0"></div>
    {/* Soft blurred glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0">
      <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Coming Soon</h1>
      <p className="text-lg md:text-2xl text-muted-foreground text-center max-w-xl">
        We're working hard to launch our platform. Stay tuned for updates!
      </p>
    </div>
  </div>
);

export default ComingSoon; 