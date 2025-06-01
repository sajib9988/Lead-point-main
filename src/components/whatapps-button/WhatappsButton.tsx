'use client';

import { MessageCircle } from 'lucide-react'; // Optional, not used now
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

export default function WhatsAppsButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" passHref>
      <Button
        className="fixed bottom-6 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white hover:bg-[#1DAE52] shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp-style SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-black"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span className="font-bold text-black">WhatsApp</span>
      </Button>
    </Link>
  );
}
