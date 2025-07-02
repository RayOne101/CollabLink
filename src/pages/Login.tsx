import React from "react";
import { LoginForm } from "@/components/login-form";

const Login = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Cosmic grid pattern */}
      <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none z-0"></div>
      {/* Blurred circular glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      <div className="w-full max-w-sm md:max-w-3xl z-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login; 