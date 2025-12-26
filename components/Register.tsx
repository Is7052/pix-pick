
import React, { useState } from 'react';
import { Mail, Lock, User as UserIcon, ArrowRight, Github, ShieldCheck } from 'lucide-react';
import { View, User } from '../types';

interface RegisterProps {
  onNavigate: (view: View) => void;
  onRegister: (user: User) => void;
}

export const Register: React.FC<RegisterProps> = ({ onNavigate, onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      onRegister({ name, email });
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Join Pix_Pick</h1>
          <p className="text-gray-500">Access millions of free and premium assets</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <div className="relative group">
              <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Create Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-start gap-3 py-2">
            <input type="checkbox" required id="terms" className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
            <label htmlFor="terms" className="text-xs text-gray-500 leading-tight cursor-pointer">
              By signing up, I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
            Create Account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
          <span className="relative px-4 bg-white text-gray-400 text-sm">or</span>
        </div>

        <button className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all mb-8 shadow-sm">
          <Github className="w-5 h-5" />
          Sign up with GitHub
        </button>

        <p className="text-center text-gray-500 text-sm">
          Already have an account? 
          <button onClick={() => onNavigate('login')} className="ml-1 text-blue-600 font-bold hover:underline">Login here</button>
        </p>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-gray-400 uppercase tracking-widest font-bold">
           <ShieldCheck className="w-4 h-4" />
           Secure 256-bit SSL encryption
        </div>
      </div>
    </div>
  );
};
