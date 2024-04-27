'use client'
import React, { useState } from 'react';
import MessageForm from './MessageForm';
import TextTransformerForm from './TextTransformerForm';

const Dashboard = () => {
  const [processed, setProcessed] = useState<string>('');

  return (
    <main className="flex justify-between">
      <aside className="relative hidden flex-col items-start gap-8 md:flex">
        <TextTransformerForm
          title="Text transform"
          setProcessedText={setProcessed} // Pass the setter function to TextTransformerForm
        />
      </aside>
      <main className="relative flex h-[1005px] min-h-[70vh] w-2/3 flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <MessageForm processedText={processed} />
      </main>
    </main>
  );
};

export default Dashboard;
