import React from 'react';
import { Check } from 'lucide-react';
import { BoostWorldLogo } from './BoostWorldLogo';
import { ConfirmationCard } from './ConfirmationCard';

export function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <BoostWorldLogo className="mx-auto mb-8" />
        <ConfirmationCard />
      </div>
    </div>
  );
}