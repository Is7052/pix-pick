
import React from 'react';
import { Check, Star, Zap, Shield, ArrowLeft } from 'lucide-react';

interface PricingProps {
  onBack: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBack }) => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started and personal projects.',
      features: ['Attribution required', 'Basic asset collection', 'Single user license', 'No editing tools'],
      cta: 'Current Plan',
      highlight: false,
      icon: Zap
    },
    {
      name: 'Pro',
      price: '$12.99',
      description: 'The standard for professional creators and designers.',
      features: ['No attribution required', 'Full access to 10M+ assets', 'Multi-user access', 'Advanced online editor', 'Priority support'],
      cta: 'Go Pro Now',
      highlight: true,
      icon: Star
    },
    {
      name: 'Teams',
      price: '$49.99',
      description: 'Collaborate with your entire creative studio.',
      features: ['Shared asset library', 'Unlimited team members', 'Administrative controls', 'Custom license agreements', '24/7 Dedicated account manager'],
      cta: 'Contact Sales',
      highlight: false,
      icon: Shield
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors font-medium mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-500">Choose the plan that's right for your creative workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-[2.5rem] p-8 shadow-xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight ? 'border-blue-600 scale-105 z-10' : 'border-transparent'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                <plan.icon className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 font-medium">/month</span>
              </div>
              <p className="text-gray-500 text-sm mb-8">{plan.description}</p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-blue-600' : 'text-green-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.highlight 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                  : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm">
            Questions about our plans? <a href="#" className="text-blue-600 font-bold hover:underline">Chat with us</a>
          </p>
        </div>
      </div>
    </div>
  );
};
