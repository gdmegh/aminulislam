'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { test } from '@/ai/flows/test-flow';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function TestAIPage() {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTestFlow = async () => {
    if (!name) {
      setResult('Please enter a name.');
      return;
    }
    setLoading(true);
    setResult('');
    try {
      const response = await test({ name });
      setResult(response.greeting);
    } catch (error: any) {
      console.error('Error in test flow:', error);
      setResult(`An error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold mb-4">AI Test Page</h1>
          <p className="text-muted-foreground mb-8">
            This page is for testing the basic Genkit AI flow on Vercel to ensure the
            server actions are working correctly.
          </p>

          <div className="flex items-center gap-2 mb-4">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              disabled={loading}
            />
            <Button onClick={handleTestFlow} disabled={loading}>
              {loading ? 'Testing...' : 'Run Test Flow'}
            </Button>
          </div>

          {result && (
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="font-semibold">Result:</p>
              <p className="text-primary">{result}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
