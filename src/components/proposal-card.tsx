"use client"

import React from 'react';
import { type ProposalDetails } from '@/ai/flows/chat-flow';
import { Button } from './ui/button';
import { FileText, Clock, Users, Tag, CreditCard, Sparkles } from 'lucide-react';
import { Separator } from './ui/separator';

interface ProposalCardProps {
  proposal: ProposalDetails;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal }) => {

  const handlePayment = () => {
    // Placeholder for payment integration (e.g., Stripe, etc.)
    alert("Redirecting to payment gateway...");
  };

  return (
    <div className="bg-card text-card-foreground rounded-lg border border-primary/20 shadow-lg p-4 my-2 max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-primary/10 p-2 rounded-full">
            <FileText className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-bold font-headline text-foreground">{proposal.projectName}</h3>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{proposal.description}</p>
      
      <Separator className="my-4" />

      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary" /> Key Features</h4>
      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
        {proposal.features.map((feature, index) => (
          <li key={index}><span className="font-medium text-foreground/90">{feature.name}:</span> {feature.description}</li>
        ))}
      </ul>
      
      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary/80" />
          <div>
            <p className="text-muted-foreground">Timeline</p>
            <p className="font-semibold text-foreground">{proposal.timeline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-primary/80" />
          <div>
            <p className="text-muted-foreground">Effort</p>
            <p className="font-semibold text-foreground">{proposal.manMonths} Man-Months</p>
          </div>
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <Tag className="w-4 h-4 text-primary/80" />
          <div>
            <p className="text-muted-foreground">Estimated Price</p>
            <p className="font-semibold text-foreground">${proposal.price.toLocaleString()}{proposal.negotiable && <span className="text-xs font-normal text-muted-foreground"> (Negotiable)</span>}</p>
          </div>
        </div>
      </div>
      
      <Separator className="my-4" />

      <Button className="w-full" onClick={handlePayment}>
        <CreditCard className="mr-2 h-4 w-4" />
        Accept & Proceed to Payment
      </Button>
    </div>
  );
};

export default ProposalCard;
