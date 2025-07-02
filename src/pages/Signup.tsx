import React, { useState } from 'react';
import { signUpWithRole } from '../utils/auth';
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

const Signup = () => {
  const [form, setForm] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  const navigate = useNavigate();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    const { error } = await signUpWithRole({ email: form.email, password: form.password });
    if (error) setError(error.message);
    else {
      setSuccess(true);
      setEmailSent(true);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Cosmic grid pattern */}
      <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none z-0"></div>
      {/* Blurred circular glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      <div className="w-full max-w-sm md:max-w-3xl z-10">
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            {emailSent ? (
              <div className="p-6 md:p-8 w-full flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Check your email</h1>
                <p className="text-center text-muted-foreground mb-4">A confirmation email has been sent to <span className="font-semibold">{form.email}</span>. Please confirm your email to activate your account.</p>
                <Button className="w-full" onClick={() => navigate('/login')}>Go to Login</Button>
              </div>
            ) : (
              <form className="p-6 md:p-8 w-full relative" onSubmit={handleSubmit}>
                <div className="flex items-center gap-2 mb-2">
                  <Link to="/coming-soon" className="">
                    <Button variant="ghost" size="icon" aria-label="Back to Home">
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                  </Link>
                  <h1 className="text-2xl font-bold">Create your account</h1>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleFormChange} required />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" value={form.password} onChange={handleFormChange} required />
                  </div>
                  {error && <div className="text-destructive text-sm text-center">{error}</div>}
                  {success && <div className="text-green-600 text-sm text-center">Signup successful! Redirecting...</div>}
                  <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</Button>
                  <div className="text-center text-sm">
                    Already have an account?{' '}
                    <Link to="/coming-soon" className="underline underline-offset-4">
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            )}
            <div className="bg-muted relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Signup illustration"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </CardContent>
        </Card>
        <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 mt-4">
          By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default Signup; 