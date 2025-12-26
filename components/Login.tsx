
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { View, User } from '../types';

interface LoginProps {
  onNavigate: (view: View) => void;
  onLogin: (user: User) => void;
}

export const Login: React.FC<LoginProps> = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock successful login
    if (email && password) {
      onLogin({
        name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
        email: email
      });
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome back</h1>
          <p className="text-gray-500">Enter your details to access your account</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
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
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <button type="button" className="text-xs text-blue-600 font-bold hover:underline">Forgot password?</button>
            </div>
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

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
            Sign In
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
          <span className="relative px-4 bg-white text-gray-400 text-sm">or continue with</span>
        </div>

        <button className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all mb-8 shadow-sm">
          <Github className="w-5 h-5" />
          Login with GitHub
        </button>

        <p className="text-center text-gray-500 text-sm">
          Don't have an account? 
          <button onClick={() => onNavigate('register')} className="ml-1 text-blue-600 font-bold hover:underline">Create account</button>
        </p>
      </div>
    </div>
  );
};
