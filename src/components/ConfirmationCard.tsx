import React from 'react';
import { Check, Clock, MessageCircle } from 'lucide-react';

export function ConfirmationCard() {
  return (
    <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-purple-500/20">
      <div className="flex justify-center mb-6">
        <div className="bg-purple-500/20 rounded-full p-3">
          <Check className="w-12 h-12 text-purple-500" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-white text-center mb-2">
        Order Confirmed!
      </h1>
      
      <p className="text-gray-400 text-center mb-8">
        Your Server Boosts order has been confirmed and is being processed.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-gray-300">
          <Clock className="w-5 h-5 text-purple-500" />
          <span>Delivery within 24 hours</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-300">
          <MessageCircle className="w-5 h-5 text-purple-500" />
          <span>Need help? Join us at <a href="https://discord.gg/boostworld" className="text-purple-400 hover:text-purple-300 underline">discord.gg/boostworld</a></span>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-700">
        <p className="text-gray-400 text-center text-sm">
          Thanks for choosing Boost World! We appreciate your business.
        </p>
      </div>
    </div>
  );
}