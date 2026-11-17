/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ProcessSection } from './components/ProcessSection';
import { ConsultModal } from './components/ConsultModal';

export default function App() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  return (
    <main className="min-h-screen w-full">
      <HeroSection onBookConsult={() => setIsConsultOpen(true)} />
      <ProcessSection previewTheme="dark" />
      <ProcessSection previewTheme="light" />
      <ConsultModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </main>
  );
}
